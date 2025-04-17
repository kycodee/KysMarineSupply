from sqlalchemy import create_engine
from sqlalchemy.engine import URL
from sqlalchemy import text

connection_url = URL.create(
    "mssql+pyodbc",
    username="SA",
    password="MarineSupply@2025",
    host="127.0.0.1",
    port=1433,
    database="master",  
    query={
        "driver": "ODBC Driver 18 for SQL Server",
        "Encrypt": "yes",
        "TrustServerCertificate": "yes",
    },
)

engine = create_engine(connection_url)

try:
    with engine.connect() as connection:
        result = connection.execute(text("SELECT @@VERSION"))
        for row in result:
            print("Connection successful! SQL Server version:")
            print(row[0])
except Exception as e:
    print("Connection failed:")
    print(e)