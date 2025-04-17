from sqlalchemy import Column, Integer, String
from SqlServerConn import Base

class Engine(Base):
    __tablename__ = "engines"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    power = Column(String)
    series = Column(String)
    image_url = Column(String)