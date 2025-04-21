from SqlServerConn import SessionLocal  # Your SQLAlchemy session setup
from order_linear_regression import forecast_hourly_demand

# Testing the linear regression forecast is working correctly
def main():
    session = SessionLocal()
    forecast_hourly_demand(session)
    session.close()

if __name__ == "__main__":
    main()
