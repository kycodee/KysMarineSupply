import pandas as pd
from sklearn.linear_model import LinearRegression
from sqlalchemy.orm import Session
from models import Engine, Order

def forecast_hourly_demand(session: Session):
    # 1. Load orders from the DB
    orders = session.query(Order.engine_id, Order.quantity, Order.timestamp).all()

    # 2. Convert to DataFrame
    df = pd.DataFrame(orders, columns=["engine_id", "quantity", "timestamp"])
    df['timestamp'] = pd.to_datetime(df['timestamp'])
    df['hour'] = df['timestamp'].dt.floor('h')

    # 3. Group by engine and hour
    hourly_orders = df.groupby(['engine_id', 'hour']).agg({'quantity': 'sum'}).reset_index()

    # 4. Forecast using linear regression
    forecasts = {}

    for engine_id in hourly_orders['engine_id'].unique():
        engine_id = int(engine_id)
        engine_df = hourly_orders[hourly_orders['engine_id'] == engine_id].copy()
        engine_df = engine_df.sort_values('hour')
        engine_df['hour_number'] = (engine_df['hour'] - engine_df['hour'].min()).dt.total_seconds() // 3600

        X = engine_df[['hour_number']]
        y = engine_df['quantity']

        model = LinearRegression()
        model.fit(X, y)

        next_hour = engine_df['hour_number'].max() + 1
        predicted_quantity = model.predict([[next_hour]])[0]
        predicted_quantity = max(round(predicted_quantity), 0)

        # 🔍 Get engine name from the database
        engine = session.query(Engine).filter(Engine.id == engine_id).first()
        engine_name = engine.name if engine else f"Engine ID {engine_id}"

        # ✅ Use engine name as key instead of ID
        forecasts[engine_name] = int(predicted_quantity)

    print(forecasts)
    return forecasts
