# K & Y Marine Supply

K & Y Marine Supply is a full-stack web application designed for a marine supply company specializing in the sale of heavy-duty boat engines and generators. The platform allows users to browse available products, make purchases, and helps the business intelligently restock inventory using machine learning forecasting.

---

## Features

-  Purchase powerful marine engines
-  Hourly sales data collection for demand forecasting
-  Machine learning model to predict next-hour sales and prevent overstocking/understocking

---

## Machine Learning Integration

Sales data is continuously logged and processed to predict the next hour’s demand for each product. A **regression model**, built with `scikit-learn`, uses recent hourly sales trends to forecast short-term demand. This enables real-time restocking decisions and helps the business respond quickly to shifts in customer purchasing behavior.

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

```bash
cd marine-supply-backend
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

