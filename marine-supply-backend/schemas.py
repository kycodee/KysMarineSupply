from pydantic import BaseModel

class EngineBase(BaseModel):
    name: str
    power: str
    series: str
    image_url: str

class EngineCreate(EngineBase):
    pass

class EngineRead(EngineBase):
    id: int

    class Config:
        orm_mode = True