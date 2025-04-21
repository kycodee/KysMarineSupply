from typing import Union

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, schemas
from SqlServerConn import get_db, engine, Base
from sqlalchemy.orm import Session
from models import Engine
from seed_db import seed_data
from fastapi.middleware.cors import CORSMiddleware
from order_linear_regression import forecast_hourly_demand

# Initializes FastAPI app
app = FastAPI()

# Add CORS middleware to allow specific origins 
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Seeds the database with initial data (engines)
seed_data()

# Endpoint that fetches a list of all of the engines in the DB
@app.get("/engines", response_model=list[schemas.EngineRead])
def read_engines(db: Session = Depends(get_db)):
    return crud.get_engines(db)

# Endpoint to forecast the hourly demand for engines
@app.get("/forecast_hourly_demand")
def get_hourly_forecast(db: Session = Depends(get_db)):
    # Calls forecast function
    forecasts = forecast_hourly_demand(db)
    
    # Return the forecast as a response
    return forecasts

# Endpoint to create an order
@app.post("/orders", response_model=schemas.OrderRead)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    # Checking if the engine exists in the database
    engine = crud.get_engine(db, engine_id=order.engine_id)
    if not engine:
        raise HTTPException(status_code=404, detail="Engine not found")
    
    # Checking if there is enough stock for the order
    if engine.current_stock is not None and engine.current_stock < order.quantity:
        raise HTTPException(status_code=400, detail="Not enough stock available")
    
    # Creates the order and returns the order details
    return crud.create_order(db, engine_id=order.engine_id, quantity=order.quantity)

