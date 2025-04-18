from typing import Union

from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import crud, schemas
from SqlServerConn import get_db, engine, Base
from sqlalchemy.orm import Session
from models import Engine
from seed_db import seed_data
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],  # or ["*"] to allow all
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

seed_data()

@app.get("/engines", response_model=list[schemas.EngineRead])
def read_engines(db: Session = Depends(get_db)):
    return crud.get_engines(db)

# @app.post("/orders", response_model=schemas.OrderRead)
# def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
#     engine = crud.get_engine(db, engine_id=order.engine_id)
#     if not engine:
#         raise HTTPException(status_code=404, detail="Engine not found")
    
#     if engine.current_stock is not None and engine.current_stock < order.quantity:
#         raise HTTPException(status_code=400, detail="Not enough stock available")

#     return crud.create_order(db, engine_id=order.engine_id, quantity=order.quantity)

@app.post("/orders", response_model=schemas.OrderRead)
def create_order(order: schemas.OrderCreate, db: Session = Depends(get_db)):
    engine = crud.get_engine(db, engine_id=order.engine_id)
    if not engine:
        raise HTTPException(status_code=404, detail="Engine not found")
    
    if engine.current_stock is not None and engine.current_stock < order.quantity:
        raise HTTPException(status_code=400, detail="Not enough stock available")

    return crud.create_order(db, engine_id=order.engine_id, quantity=order.quantity)

