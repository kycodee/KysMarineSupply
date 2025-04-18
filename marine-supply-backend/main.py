from typing import Union

from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
import crud, schemas
from SqlServerConn import get_db, engine, Base
from sqlalchemy.orm import Session
from models import Engine
from seed_db import seed_data

app = FastAPI()


seed_data()

@app.get("/engines", response_model=list[schemas.EngineRead])
def read_engines(db: Session = Depends(get_db)):
    return crud.get_engines(db)


