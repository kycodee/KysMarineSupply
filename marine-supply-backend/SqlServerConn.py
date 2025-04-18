from sqlalchemy import create_engine, text
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base

Base = declarative_base()


connection_url = URL.create(
    "mssql+pyodbc",
    username="SA",
    password="MarineSupply@2025",
    host="127.0.0.1",
    port=1433,
    database="MarineSupplyDB",  
    query={
        "driver": "ODBC Driver 18 for SQL Server",
        "Encrypt": "yes",
        "TrustServerCertificate": "yes",
    }
)

engine = create_engine(connection_url, isolation_level="AUTOCOMMIT")

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT DB_NAME()"))
        print("Connected to database:", result.fetchone()[0])
except Exception as e:
    print("Connection failed:")
    print(e)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
