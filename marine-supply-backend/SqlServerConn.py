import os
from sqlalchemy import create_engine, text
from sqlalchemy.engine import URL
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm import declarative_base
from dotenv import load_dotenv

# Loads the environment variables from the .env file
load_dotenv()

# Base class that SQLAlchemy models inherit from
Base = declarative_base()

# Database connection URL for a SQL Server database 
connection_url = URL.create(
    "mssql+pyodbc",
    username=os.getenv("DB_USERNAME"),  
    password=os.getenv("DB_PASSWORD"),   
    host=os.getenv("DB_HOST"),  
    port=int(os.getenv("DB_PORT")), 
    database=os.getenv("DB_NAME"),  
    query={
        "driver": os.getenv("DB_DRIVER"),  
        "Encrypt": "yes",
        "TrustServerCertificate": "yes",
    }
)

# Create the SQLAlchemy engine
engine = create_engine(connection_url, isolation_level="AUTOCOMMIT")

# Testing the database connection and having the DB name print out to confirm the correct DB is being used
try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT DB_NAME()"))
        print("Connected to database:", result.fetchone()[0])
except Exception as e:
    print("Connection failed:")
    print(e)

# # Creating a session factory for interacting with the DB
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Dependency for getting a DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
