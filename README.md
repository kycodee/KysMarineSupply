# K & Y Marine Supply

K & Y Marine Supply is a full-stack web application designed for a marine supply company specializing in the sale of heavy-duty boat engines and generators. The platform allows users to browse available products, make purchases, and helps the business intelligently restock inventory using machine learning forecasting.

---

## Features

-  Purchase powerful marine engines and generators
-  Inventory management with live stock tracking
-  Sales data collected and processed to forecast future demand
-  Machine learning regression model to reduce overstocking/understocking
-  Admin tools for order tracking and restocking suggestions

---

## Machine Learning Integration

At regular intervals (e.g., end of the month), historical sales data is passed through a **regression model** built with `scikit-learn`. This helps predict demand for each engine and generator, enabling smarter restocking decisions and reducing inventory overhead.

---

## Tech Stack

### Frontend:
- **TypeScript**
- **Next.js** – React framework for SSR and API routing
- **Tailwind CSS** – Utility-first CSS
- **DaisyUI** – Tailwind component library for rapid UI development

### Backend:
- **FastAPI** – Modern, fast (high-performance) Python web framework
- **SQLAlchemy** – ORM for SQL Server database interactions
- **SQL Server** – Relational database for engine, order, and user data
- **scikit-learn** – Regression models for demand forecasting

### DevOps:
- **Docker** – Containerization for local development and deployment
- **MacOS** – Primary development environment

---

# Getting Started (Development)

## Frontend Setup

### Install Dependencies

```bash
cd marine-supply-frontend
npm install
npm run dev
```
## Backend Setup
### Create and activate a virtual environment
```bash
python3 -m venv venv
source venv/bin/activate
```

### Upgrade pip
```bash
pip install --upgrade pip
```


### Run the FastAPI server
```bash
uvicorn main:app --reload
```

### API will be live at:
http://127.0.0.1:8000

### Swagger API docs (for testing)
http://127.0.0.1:8000/docs

