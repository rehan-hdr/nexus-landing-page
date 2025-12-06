NEXUS — Local LLM Knowledge + Task Assistant (Backend MVP)
One-file specification for engineering agents

This document contains all requirements, architecture, schema, prompt templates, code structure, and instructions needed to build the MVP backend for Nexus — a completely local, private, RAG-powered knowledge and task assistant.

🚀 Goal

Build a fully functional backend that:

Accepts user messages

Auto-categorizes them (task, note, idea, journal, question, other)

Stores every message locally

Embeds + stores messages in ChromaDB

Retrieves context via embeddings

Queries local LLM (tinyllama via Ollama)

Parses LLM output (JSON)

Creates tasks automatically when detected

Returns final response to the user

This is an offline, privacy-first, local-only system.

🧱 Technology Stack (MANDATORY)
Local LLM

tinyllama via Ollama

Endpoint: http://localhost:11434/api/generate

Backend

FastAPI (async)

Embeddings

sentence-transformers/all-MiniLM-L6-v2

Vector DB

ChromaDB

Persisted to: ./chroma_data

Structured DB

SQLite via SQLModel

File: ./nexus.db

Storage policy

Store every message (user + assistant)

Categorization

LLM auto-categorizes

No user confirmation needed

Journal Features

sentiment/mood analysis returned by LLM

Mindmap

simple link suggestions only; no graph DB

future expansion handled by LLM only

🧩 System Responsibilities

When the user sends a message:

Embed message

Query Chroma top-k = 5

Assemble full prompt (system + retrieved context)

Query tinyllama

Receive JSON + short reply

Parse JSON

Store:

user message

assistant message

embeddings

If category = "task", auto-create task entry

Return JSON back to the client

🗂 Project Structure
backend/
├─ app/
│  ├─ main.py
│  ├─ db.py
│  ├─ models.py
│  ├─ schemas.py
│  ├─ prompts.py
│  ├─ routers/
│  │   ├─ chat.py
│  │   ├─ tasks.py
│  ├─ services/
│  │   ├─ llm_service.py
│  │   ├─ embedder.py
│  │   ├─ chroma_client.py
│  │   ├─ storage.py
├─ requirements.txt
├─ README.md
├─ nexus_system_prompt.md   <-- The long system prompt in this file.

🗄 SQLite Schema (MANDATORY)
Message

id (UUID, PK)

text (str)

sender ("user" | "assistant")

timestamp (datetime)

summary (str?)

category (str)

metadata (JSON?)

chroma_id (str?)

Task

id (UUID)

title (str)

description (str?)

due_date (datetime?)

priority (int?)

status (default "todo")

created_at, updated_at

source_message_id (UUID)

Note

id, content, summary, created_at, source_message_id

(no fancy graph tables; LLM handles relationships)

🔎 RAG / Embedding Requirements

sentence-transformers/all-MiniLM-L6-v2

Embedding → list of floats

Store each message in Chroma as:

id = UUID

document = message text

metadata = { "message_id": "...", "category": "...", "timestamp": "..." }

Retrieval:

Chroma query_embeddings top_k=5

Pass retrieved text blocks into system prompt as context

🧠 System Prompt (Put this in nexus_system_prompt.md)
System role: You are Nexus — a locally-hosted personal assistant for a single user. Your job is to understand short-form and long-form user messages, automatically categorize them (task, note, idea, journal, question, other), summarize, extract structured metadata when relevant (especially tasks), and produce a machine-readable JSON payload plus a short human-readable message.

Always output:
1) A JSON object (valid JSON)
2) A blank line
3) A short human-friendly reply

Top-level JSON keys:
{
  "category": "...",
  "summary": "...",
  "tags": [...],
  "task": null OR {
    "title": "...",
    "description": "...",
    "due_date": "YYYY-MM-DD or null",
    "priority": 1-10 or null,
    "subtasks": [...],
    "estimate_hours": float or null
  },
  "mood": null OR { "sentiment": "positive|neutral|negative", "score": -1..1 }
}

Rules:
- If the message is actionable → category = "task".
- If reflective/personal → category = "journal".
- If conceptual → "idea".
- If informative → "note".
- If it's a question → "question".

Tasks:
- Extract deadlines
- Provide subtasks 2–6 steps
- Give priority score 1-10
- Estimate hours if reasonable

Journal:
- Provide sentiment + score

Retrieval:
- Use retrieved context ONLY to understand meaning; do not echo the whole context.

Security:
- No assumptions beyond what the user writes.
- No cloud references.

Your Output Format:
<JSON>
<blank line>
<assistant short reply>

Prompt Template:
### CONTEXT
{context}

### USER MESSAGE
{user_message}

Respond in the required format.

📡 Endpoint Specification
POST /chat
Request
{
  "message": "string"
}

Backend Logic

Embed message

Retrieve top-k from Chroma

Build full prompt

Query Ollama (tinyllama)

Parse JSON

Store user message

Store assistant message

Insert task if "task" is non-null

Return:

Response
{
  "response": "assistant natural language response",
  "category": "task|note|idea|journal|question|other",
  "summary": "string",
  "produced_task": { "id": "...", "title": "..." } | null
}

🧪 Acceptance Criteria

The agent must deliver:

✔ Running backend

uvicorn app.main:app --reload should work immediately.

✔ Functional POST /chat

Given:

{
  "message": "I need to submit my OS assignment by Monday."
}


Output must:

Contain JSON + short reply

Auto-detect task

Insert a task record in SQLite

Store user + assistant messages in both SQLite and Chroma

✔ Data persistence

Restarting server must not delete previous messages, embeddings, or tasks.

✔ Valid JSON always

No malformed outputs from LLM.

✔ Entirely local

No internet dependencies.

🏗 Implementation Steps (Agent must follow)
Step 1 — Setup

Create folder structure as specified

Install required dependencies

Initialize SQLite via init_db()

Step 2 — Embedding + Chroma

Implement embedder

Implement Chroma client and create collection

Step 3 — Ollama LLM service

Implement query_llm()

Must send system prompt + context + message

Step 4 — Storage layer

Save message → embed → store in Chroma + SQLite

Step 5 — Chat router

Implement /chat

Parse LLM JSON strictly

Create tasks if needed

Step 6 — Testing

Provide 3 sample curl commands

Provide DB queries showing successful inserts

📦 Deliverables

Agent must deliver:

Complete backend code inside backend/ directory

requirements.txt

README.md with run instructions

nexus_system_prompt.md (from this file)

Working demo with sample curl test

🏁 END OF SPECIFICATION

This is a full, single-file specification.
Follow it exactly to build the Nexus backend MVP.