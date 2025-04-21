from sqlalchemy import Column, Integer, String, DateTime, ForeignKey
from SqlServerConn import Base
from sqlalchemy.orm import relationship
from datetime import datetime

# Defining the Engine class, which represents an engine in the database
class Engine(Base):
    __tablename__ = "engines"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, unique=True, index=True)
    power = Column(String)
    series = Column(String)
    image_url = Column(String)
    link = Column(String)
    current_stock = Column(Integer, default=0)

    orders = relationship("Order", back_populates="engine", cascade="all, delete-orphan")


# Defining the Order class, which represents an engine in the database
class Order(Base):
    __tablename__ = "orders"

    id = Column(Integer, primary_key=True, index=True)
    engine_id = Column(Integer, ForeignKey("engines.id"))
    quantity = Column(Integer)
    timestamp = Column(DateTime, default=datetime.utcnow)

    engine = relationship("Engine", back_populates="orders", passive_deletes=True)
