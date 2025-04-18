from sqlalchemy.orm import Session
from models import Engine

def get_engines(db: Session):
    return db.query(Engine).all()

