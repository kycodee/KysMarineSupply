from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel
from SqlServerConn import engine

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: Union[bool, None] = None


@app.get("/")
def read_root():
    return {"Hello": "World"}


@app.get("/items/{item_id}")
def read_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/items/{item_id}")
def update_item(item_id: int, item: Item):
    return {"item_name": item.name, "item_id": item_id}

@app.post("/items/")
async def create_item(item: Item):
    return item


# try:
#     with engine.connect() as connection:
#         result = connection.execute("SELECT @@VERSION")
#         for row in result:
#             print("Connection successful! SQL Server version:")
#             print(row[0])
# except Exception as e:
#     print("Connection failed:")
#     print(e)