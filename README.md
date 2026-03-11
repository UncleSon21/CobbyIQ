# OnboardIQ — Backend

AI-powered employee onboarding copilot.  
Stack: FastAPI · PostgreSQL · Voyage AI · Pinecone · Claude API

---

## Prerequisites (Windows)

- [Python 3.11+](https://www.python.org/downloads/)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)
- [Git](https://git-scm.com/)

---

## Setup (run once)

### 1. Start the database
```bash
# From the project root (where docker-compose.yml is)
docker compose up -d
```
PostgreSQL runs on `localhost:5432`  
pgAdmin (DB browser) runs on `http://localhost:5050`  
pgAdmin login: `admin@onboardiq.com` / `admin`

### 2. Create virtual environment
```bash
cd backend
python -m venv venv
venv\Scripts\activate       # Windows
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

### 4. Configure environment
```bash
copy .env.example .env
# Open .env and fill in your API keys:
#   ANTHROPIC_API_KEY  → https://console.anthropic.com
#   VOYAGE_API_KEY     → https://www.voyageai.com
#   PINECONE_API_KEY   → https://app.pinecone.io
```

### 5. Run database migrations
```bash
alembic upgrade head
```
This creates all 5 tables in PostgreSQL.

### 6. Start the server
```bash
uvicorn app.main:app --reload
```
API runs at `http://localhost:8000`  
Swagger docs at `http://localhost:8000/docs`

---

## Pinecone Setup (one time)

Create an index in your Pinecone dashboard:
- **Index name:** `onboardiq`
- **Dimensions:** `1024`  (voyage-3 output size)
- **Metric:** `cosine`

---

## Project Structure

```
backend/
├── app/
│   ├── main.py              ← FastAPI app + route registration
│   ├── core/
│   │   ├── config.py        ← Settings from .env
│   │   ├── database.py      ← SQLAlchemy engine + session
│   │   └── security.py      ← JWT auth + RBAC dependencies
│   ├── models/
│   │   └── __init__.py      ← All 5 SQLAlchemy models
│   ├── schemas/
│   │   └── __init__.py      ← Pydantic request/response schemas
│   ├── routes/
│   │   ├── auth.py          ← POST /auth/register, /auth/login
│   │   ├── chat.py          ← POST /chat/ask, GET /chat/history
│   │   └── __init__.py      ← documents, tasks, hires, analytics
│   └── services/
│       ├── rag.py           ← Voyage AI embed + Pinecone search + Claude answer
│       └── ingestion.py     ← Parse → chunk → embed → store pipeline
├── alembic/                 ← DB migration scripts
├── alembic.ini
├── requirements.txt
└── .env.example
```

---

## Key API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/auth/register` | Public | Create company + HR admin |
| POST | `/auth/login` | Public | Get JWT token |
| POST | `/documents/upload` | HR | Upload file → triggers ingestion |
| POST | `/chat/ask` | Hire | Ask question → RAG → answer |
| GET | `/tasks` | Hire | Get 30/60/90 day task list |
| PATCH | `/tasks/{id}/complete` | Hire | Mark task done |
| POST | `/hires` | HR | Create new hire profile |
| GET | `/analytics/overview` | HR | Dashboard metrics |
| GET | `/analytics/gaps` | HR | Unanswered questions report |

Full interactive docs: `http://localhost:8000/docs`

---

## Development Workflow

```bash
# After changing models, create a new migration:
alembic revision --autogenerate -m "describe your change"
alembic upgrade head

# Reset the database completely:
alembic downgrade base
alembic upgrade head
```
