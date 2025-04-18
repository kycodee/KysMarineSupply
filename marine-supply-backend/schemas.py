from pydantic import BaseModel
from datetime import datetime
from typing import Optional


# Engine Schema
class EngineBase(BaseModel):
    name: str
    power: str
    series: str
    image_url: str
    link: str
    current_stock: int

class EngineCreate(EngineBase):
    pass

class EngineRead(EngineBase):
    id: int

    class Config:
        from_attributes = True


# Order Schema
class OrderBase(BaseModel):
    engine_id: int
    quantity: int = 1

class OrderCreate(OrderBase):
    pass

class OrderRead(OrderBase):
    id: int
    timestamp: datetime
    engine: Optional[EngineRead]

    class Config:
        from_attributes = True