# NEXUS: Local AI Assistant & Knowledge Manager

**Nexus** is a locally hosted, privacy-focused AI assistant and personal knowledge management system. It integrates a powerful LLM (Large Language Model) with a structured database of tasks, notes, and journal entries. The core philosophy is **context-aware assistance**: the AI knows your data and uses it to provide relevant answers and visualizations.

---

## 🛠 Tech Stack

### Backend (Python)
*   **FastAPI**: High-performance async web framework for the API.
*   **SQLModel (SQLAlchemy + Pydantic)**: ORM for interacting with the **SQLite** database.
*   **ChromaDB**: Vector database for RAG (Retrieval Augmented Generation), enabling semantic search.
*   **Ollama**: Local interface for running LLMs (Phi-3.5, Llama 3.2) without cloud dependencies.
*   **SentenceTransformers (`all-MiniLM-L6-v2`)**: Generates local embeddings for text to power the semantic linking and RAG.

### Frontend (JavaScript/React)
*   **Vite + React**: Modern, fast build tool and UI library.
*   **Tailwind CSS**: Utility-first CSS framework for styling (Custom "Nexus" Orange/Amber/Slate theme).
*   **Lucide React**: Iconography.
*   **React Force Graph 3D (Three.js)**: Renders the interactive 3D Mind Map.
*   **Axios**: HTTP client for API communication.

---

## 🚀 Key Features

### 1. Context-Aware Chat
*   **Local Intelligence**: Runs typically on `Phi-3.5` (3.8B) or `Llama 3.2` (3B) via Ollama.
*   **RAG Pipeline**:
    1.  User query is embedded.
    2.  Relevant Notes, Journal Entries, and completed Tasks are retrieved from ChromaDB.
    3.  This "context" is injected into the system prompt, allowing the AI to answer questions about *your* life (e.g., "What did I do last week?", "Summarize my notes on Physics").
*   **Actionable**: The AI can recognize intent to create tasks, notes, or journal entries and save them directly to the database.

### 2. Task Management
*   **CRUD Operations**: Create, Read, Update (Status), Delete tasks.
*   **Priority System**: 5-level priority scale.
    *   **Visuals**: High priority tasks are color-coded (Red/Orange badges).
    *   **Mind Map Influence**: Higher priority tasks appear as **larger nodes** in the 3D view.
*   **Filtering**: Filter by Todo, In Progress, or Done.

### 3. Personal Knowledge Base (Notes)
*   **Rich Text Support**: Store detailed notes with titles and tags.
*   **Semantic Search**: Notes are automatically indexed in ChromaDB for AI retrieval.
*   **Tagging**: Organize content with comma-separated tags.

### 4. Emotional Journaling
*   **Mood Tracking**: Record entries with a mood (Happy, Neutral, Sad).
*   **Timeline View**: Visual timeline of your thoughts.
*   **AI Reflection**: The AI has access to these entries to help you reflect on your week or improved mood patterns.

### 5. 3D Interactive Mind Map
A stunning, "living" visualization of your second brain.
*   **Nodes**: Every Task, Note, and Journal Entry is a floating orb in 3D space.
    *   **Tasks (Orange)**: Size scales with Priority.
    *   **Notes (Yellow)**: Standard size.
    *   **Journal (Pink)**: Distinct color for personal thoughts.
*   **Semantic Linking**: Connections (white lines) are drawn automatically based on **Cosine Similarity** of the content embeddings. If a Note and a Task share a similar topic, they will physically gravitate towards each other in the generic space.
*   **Aesthetics**:
    *   **Node Visuals**: Glossy, glowing spheres with 3D text labels floating underneath.
    *   **Environment**: Dynamic, slowly rotating "Crystal" octahedrons in the background.
    *   **Background**: A slowly shifting deep-space gradient (Slate to Deep Orange).
*   **Interactivity**: Click a node to fly the camera to it and open a detailed sidebar.

---

## ⚙️ How It Works (Architecture)

1.  **Data Entry**: You create a Note via the UI.
2.  **Storage**:
    *   **Structured**: The note is saved to `nexus.db` (SQLite) via SQLModel.
    *   **Vector**: The content is embedded using `SentenceTransformer` and saved to `chroma_data` (ChromaDB).
3.  **Visualization (The Graph)**:
    *   The `/api/graph` endpoint fetches all items.
    *   It calculates the similarity matrix between all items using their cached embeddings.
    *   Relationships > 0.4 similarity create a Link.
    *   The Frontend renders this using a Force-Directed layout engine, creating a cluster of related ideas.
4.  **Retrieval (The Chat)**:
    *   You ask: "What was that idea about space?"
    *   Backend embeds the query.
    *   ChromaDB finds the "space" note.
    *   LLM receives: `Context: {Note: Space Idea...} User: What was that idea about space?`
    *   LLM answers accurately based on your data.

---

## 📂 Project Structure

```
toa/
├── backend/
│   ├── app/
│   │   ├── routers/        # API Endpoints (chat, tasks, notes, journal, graph)
│   │   ├── services/       # Core Logic (LLM, RAG, Storage)
│   │   ├── core/           # Config & Logging
│   │   └── models.py       # Database Schemas (SQLModel)
│   ├── nexus.db            # SQLite Database
│   └── chroma_data/        # Vector Database
└── frontend/
    ├── src/
    │   ├── components/     # React Views (MindMapView, TaskList, etc.)
    │   └── assets/         # CSS & Static files
    ├── tailwind.config.js  # Styling Config (Nexus Theme)
    └── package.json        # Frontend Dependencies
```
