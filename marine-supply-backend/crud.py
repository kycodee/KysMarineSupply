from fastapi import HTTPException
from sqlalchemy.orm import Session
from models import Engine, Order

# Function to get a list of all the engines from the DB
def get_engines(db: Session):
    return db.query(Engine).all()

# Function to grab a single engine by its ID
def get_engine(db: Session, engine_id: int):
    return db.query(Engine).filter(Engine.id == engine_id).first()

# Function to create an order for a specific engine
def create_order(db: Session, engine_id: int, quantity: int):
    engine = get_engine(db, engine_id)
    if engine is None:
        raise HTTPException(status_code=404, detail="Engine not found")
    if engine.current_stock < quantity:
        raise HTTPException(status_code=400, detail="Not enough stock available")

    engine.current_stock -= quantity
    order = Order(engine_id=engine_id, quantity=quantity)
    db.add(order)
    db.commit()
    db.refresh(order)
    return order