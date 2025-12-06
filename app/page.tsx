import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-orange-950/30 to-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-orange-900/30">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">N</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">NEXUS</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-gray-300 hover:text-orange-400 transition-colors">Features</a>
              <a href="#tech" className="text-gray-300 hover:text-orange-400 transition-colors">Technology</a>
              <a href="#how" className="text-gray-300 hover:text-orange-400 transition-colors">How It Works</a>
              <Link 
                href="https://github.com/rehan-hdr/toa" 
                target="_blank"
                className="px-6 py-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-orange-600/20"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="container mx-auto px-6 pt-28 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left: Hero Text */}
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full backdrop-blur-sm">
              <span className="text-orange-400 text-sm font-medium">🤖 100% Local • Privacy-First • Open Source</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Your Personal AI
              <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-yellow-500 bg-clip-text text-transparent">
                Assistant
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              NEXUS is a local AI assistant powered by Phi-3.5 via Ollama that helps you organize tasks, capture notes, and journal your thoughts. 
              Everything runs on your machine—<span className="text-orange-400 font-semibold">no cloud, no tracking, complete privacy</span>.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
                <p className="text-gray-400">React frontend with FastAPI backend</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
                <p className="text-gray-400">ChromaDB for vector search, SQLite for structured data</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                </div>
                <p className="text-gray-400">100% local—runs entirely offline on your machine</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link 
                href="https://github.com/rehan-hdr/toa" 
                target="_blank"
                className="px-8 py-4 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-lg font-semibold rounded-xl transition-all shadow-lg shadow-orange-600/30 hover:shadow-orange-600/50 hover:scale-105"
              >
                Get Started →
              </Link>
              <a
                href="#how"
                className="px-8 py-4 bg-slate-800/50 hover:bg-slate-800 text-white text-lg font-semibold rounded-xl transition-all border-2 border-slate-700 hover:border-orange-500"
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: AI Assistant Illustration */}
          <div className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-full blur-3xl"></div>
              
              {/* Main robot container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-8 border border-slate-700 shadow-2xl">
                {/* Robot Head */}
                <div className="bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl p-6 border border-slate-600 relative">
                  {/* Eyes */}
                  <div className="flex justify-center gap-8 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
                      <div className="w-10 h-10 bg-slate-900 rounded-lg"></div>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-amber-500 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse" style={{animationDelay: '0.5s'}}>
                      <div className="w-10 h-10 bg-slate-900 rounded-lg"></div>
                    </div>
                  </div>
                  
                  {/* Antenna */}
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-2 h-8 bg-gradient-to-t from-slate-600 to-orange-500 rounded-full"></div>
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full shadow-lg shadow-orange-500/50 animate-bounce"></div>
                </div>

                {/* Thinking indicator */}
                <div className="mt-6 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <span className="text-gray-400 text-sm">Processing your thoughts...</span>
                  </div>
                </div>

                {/* Control panel */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-8 bg-slate-700/50 rounded-lg border border-slate-600"></div>
                  <div className="h-8 bg-slate-700/50 rounded-lg border border-slate-600"></div>
                  <div className="h-8 bg-orange-500/20 rounded-lg border border-orange-500/50"></div>
                </div>
              </div>

              {/* Floating particles */}
              <div className="absolute top-10 right-10 w-2 h-2 bg-orange-400 rounded-full animate-ping"></div>
              <div className="absolute bottom-20 left-10 w-2 h-2 bg-amber-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/2 right-0 w-2 h-2 bg-orange-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">Three Ways to Capture Everything</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Whether you're planning, learning, or reflecting—NEXUS organizes your thoughts into the right format automatically.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Tasks */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">📋 Tasks</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Create, update, and track tasks with a 5-level priority system. Tasks integrate with the mind map, where higher priority tasks appear as larger nodes.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>5-level priority system</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Filter by status (Todo/In Progress/Done)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Priority affects node size in mind map</span>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">📝 Notes</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Store detailed notes with titles and tags. Notes are automatically indexed in ChromaDB for semantic search and appear as yellow nodes in your mind map.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Rich text with tagging</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Semantic search via ChromaDB</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>SQLite storage + vector embeddings</span>
                </div>
              </div>
            </div>

            {/* Journal */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">📖 Journal</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Record journal entries with mood tracking (happy, neutral, sad). Timeline view helps you visualize patterns and the AI can reflect on your entries.
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Mood tracking (happy/neutral/sad)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Timeline view of entries</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
                  <span>Pink nodes in mind map</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Context-Aware Intelligence Section */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-slate-900/30 via-orange-950/10 to-slate-900/30">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                <span className="text-orange-400 text-sm font-medium">🧠 Context-Aware Intelligence</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Remembers What Matters
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                NEXUS uses RAG (Retrieval-Augmented Generation) with sentence-transformers (all-MiniLM-L6-v2) to generate embeddings. When you ask a question, it retrieves relevant entries from ChromaDB to provide contextual answers.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Semantic Search</h4>
                    <p className="text-gray-400">Ask "What did I plan for the project?" and retrieve relevant messages from weeks ago based on meaning, not just keywords.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Vector Embeddings</h4>
                    <p className="text-gray-400">Messages are converted to embeddings and stored in ChromaDB, allowing NEXUS to find related content across your history.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Persistent Storage</h4>
                    <p className="text-gray-400">Everything is saved locally in SQLite and ChromaDB. Your data never leaves your machine and persists across sessions.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl">
                <div className="space-y-4">
                  <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-orange-500">
                    <div className="text-xs text-gray-500 mb-2">3 weeks ago</div>
                    <div className="text-gray-300">"Working on the marketing campaign for Q1..."</div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-4 border-l-4 border-orange-500">
                    <div className="text-xs text-gray-500 mb-2">1 week ago</div>
                    <div className="text-gray-300">"Need to finalize the campaign budget..."</div>
                  </div>
                  <div className="bg-orange-500/10 rounded-lg p-4 border-l-4 border-orange-500 border-2">
                    <div className="text-xs text-orange-400 mb-2 font-semibold">You just asked:</div>
                    <div className="text-white">"What's the status of the Q1 campaign?"</div>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-400 pt-2">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                    </div>
                    <span>Retrieving relevant context...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mind Map & Visualization Section */}
      <section className="container mx-auto px-6 py-20 bg-gradient-to-b from-transparent via-orange-950/10 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent"></div>
                <div className="relative">
                  {/* Mind map visualization */}
                  <div className="flex items-center justify-center min-h-[400px]">
                    <svg viewBox="0 0 400 400" className="w-full h-full">
                      {/* Connection lines */}
                      <line x1="200" y1="200" x2="100" y2="100" stroke="#f97316" strokeWidth="2" opacity="0.3" />
                      <line x1="200" y1="200" x2="300" y2="100" stroke="#f97316" strokeWidth="2" opacity="0.3" />
                      <line x1="200" y1="200" x2="100" y2="300" stroke="#f97316" strokeWidth="2" opacity="0.3" />
                      <line x1="200" y1="200" x2="300" y2="300" stroke="#f97316" strokeWidth="2" opacity="0.3" />
                      <line x1="100" y1="100" x2="300" y2="100" stroke="#f97316" strokeWidth="1.5" opacity="0.2" strokeDasharray="4,4" />
                      
                      {/* Center node */}
                      <circle cx="200" cy="200" r="30" fill="#f97316" opacity="0.2" />
                      <circle cx="200" cy="200" r="20" fill="#f97316" />
                      <text x="200" y="207" textAnchor="middle" fill="white" fontSize="20">💡</text>
                      
                      {/* Task nodes */}
                      <circle cx="100" cy="100" r="25" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                      <text x="100" y="107" textAnchor="middle" fill="white" fontSize="18">📋</text>
                      
                      <circle cx="300" cy="100" r="25" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                      <text x="300" y="107" textAnchor="middle" fill="white" fontSize="18">📝</text>
                      
                      <circle cx="100" cy="300" r="25" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
                      <text x="100" y="307" textAnchor="middle" fill="white" fontSize="18">📖</text>
                      
                      <circle cx="300" cy="300" r="22" fill="#0f172a" stroke="#ec4899" strokeWidth="2" />
                      <text x="300" y="307" textAnchor="middle" fill="white" fontSize="18">📖</text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-block px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-full mb-6">
                <span className="text-orange-400 text-sm font-medium">🗺️ Visual Knowledge Graph</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                3D Interactive Mind Map
              </h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                An interactive 3D visualization powered by React Force Graph 3D (Three.js). Tasks, notes, and journals appear as floating nodes with semantic connections drawn based on cosine similarity of embeddings.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Semantic Linking</h4>
                    <p className="text-gray-400">Connections are drawn automatically when cosine similarity exceeds 0.4. Related ideas physically cluster together in 3D space.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Node Types & Colors</h4>
                    <p className="text-gray-400">Tasks appear as orange nodes (larger when higher priority), Notes as yellow, and Journals as pink. Each type is visually distinct.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center mt-1">
                    <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg mb-2">Interactive Exploration</h4>
                    <p className="text-gray-400">Glossy spheres with 3D text labels, dynamic crystal backgrounds, and a deep-space gradient. Click nodes to fly the camera and view details.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-6 py-24">
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          Everything You Need
        </h2>
        <p className="text-gray-400 text-center text-lg mb-20 max-w-3xl mx-auto">
          Powerful features that make NEXUS your ultimate local AI companion.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Conversational Interface */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Natural Conversation</h3>
            <p className="text-gray-400 leading-relaxed">
              Chat naturally with your AI assistant. Ask questions about your data, create entries through dialogue, and get contextual answers based on your entire history.
            </p>
          </div>

          {/* Priority System */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Smart Priority System</h3>
            <p className="text-gray-400 leading-relaxed">
              5-level priority for tasks with visual indicators. High-priority items are color-coded red/orange and appear as larger nodes in the 3D mind map for instant recognition.
            </p>
          </div>

          {/* Mood Tracking */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Emotional Journaling</h3>
            <p className="text-gray-400 leading-relaxed">
              Track your mood with each journal entry (happy, neutral, sad). Timeline view helps you visualize patterns, and the AI can reflect on your week or emotional trends.
            </p>
          </div>

          {/* Semantic Search */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Meaning-Based Search</h3>
            <p className="text-gray-400 leading-relaxed">
              Search by meaning, not just keywords. Find "space ideas" and retrieve notes about astronomy, sci-fi concepts, or NASA—all through vector embeddings and cosine similarity.
            </p>
          </div>

          {/* Force-Directed Layout */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Living Knowledge Graph</h3>
            <p className="text-gray-400 leading-relaxed">
              Your mind map uses force-directed physics. Related nodes gravitate together, forming natural clusters of ideas. Watch your second brain organize itself in real-time.
            </p>
          </div>

          {/* Zero-Cloud */}
          <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 hover:border-orange-500/50 hover:shadow-lg hover:shadow-orange-500/10 transition-all group">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <svg className="w-6 h-6 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">Air-Gapped Privacy</h3>
            <p className="text-gray-400 leading-relaxed">
              Completely offline operation. No API keys, no cloud services, no data collection. Your thoughts stay on your hardware, encrypted and inaccessible to anyone but you.
            </p>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech" className="container mx-auto px-6 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-orange-950/10 via-slate-900/50 to-transparent"></div>
        <div className="relative">
          <h2 className="text-5xl font-bold text-white text-center mb-6">
            Built With Modern Stack
          </h2>
          <p className="text-gray-400 text-center text-lg mb-20 max-w-3xl mx-auto">
            Open-source technologies optimized for local execution. No external dependencies, no internet required.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-500/50 hover:scale-105 transition-all">
              <div className="text-4xl mb-4">⚛️</div>
              <h4 className="text-white font-bold text-lg mb-2">React</h4>
              <p className="text-sm text-gray-400">Frontend (Vite)</p>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-500/50 hover:scale-105 transition-all">
              <div className="text-4xl mb-4">⚡</div>
              <h4 className="text-white font-bold text-lg mb-2">FastAPI</h4>
              <p className="text-sm text-gray-400">Backend</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-500/50 hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🤖</div>
              <h4 className="text-white font-bold text-lg mb-2">Phi-3.5</h4>
              <p className="text-sm text-gray-400">via Ollama</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-500/50 hover:scale-105 transition-all">
              <div className="text-4xl mb-4">🎯</div>
              <h4 className="text-white font-bold text-lg mb-2">ChromaDB</h4>
              <p className="text-sm text-gray-400">Vector Store</p>
            </div>
            
            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-8 text-center hover:border-orange-500/50 hover:scale-105 transition-all">
              <div className="text-4xl mb-4">💾</div>
              <h4 className="text-white font-bold text-lg mb-2">SQLite</h4>
              <p className="text-sm text-gray-400">Database</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="container mx-auto px-6 py-24 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent">
        <h2 className="text-5xl font-bold text-white text-center mb-6">
          How It Works
        </h2>
        <p className="text-gray-400 text-center text-lg mb-20 max-w-3xl mx-auto">
          A seamless four-step process that turns your natural language input into structured, searchable, actionable data.
        </p>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              1
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">Send a Message</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Type anything in natural language: "I need to submit my assignment by Monday," "Remember to buy groceries," or "Journal: Had a productive day today." NEXUS understands context and intent without rigid formats or commands.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              2
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">Intelligent Processing</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Your message is embedded using sentence-transformers (all-MiniLM-L6-v2). ChromaDB retrieves relevant entries. Phi-3.5 receives your query with context and generates a response.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              3
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">Storage & Organization</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                When the AI recognizes intent to create a task, note, or journal entry, it can save it directly to SQLite. The entry is also embedded and stored in ChromaDB for semantic retrieval.
              </p>
            </div>
          </div>

          <div className="flex gap-6 items-start group">
            <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
              4
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-white mb-3">Persistent Local Storage</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                Tasks, notes, and journal entries are saved to SQLite via SQLModel. Embeddings are stored in ChromaDB. Everything persists across sessions and remains on your machine—100% private.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-24 pb-32">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-900/30 via-amber-900/30 to-orange-900/30 rounded-3xl border border-orange-500/30 p-16 text-center shadow-2xl shadow-orange-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-orange-500/5 via-transparent to-transparent"></div>
          <div className="relative">
            <h2 className="text-5xl font-bold text-white mb-6">
              Ready to Own Your Data?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              NEXUS is completely open source and free forever. No subscriptions, no limits, no compromises. 
              Download the code, run it on your machine, and experience truly private AI assistance that respects your autonomy.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                href="https://github.com/rehan-hdr/toa" 
                target="_blank"
                className="px-10 py-5 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-lg font-bold rounded-xl transition-all shadow-lg shadow-orange-500/30 hover:scale-105"
              >
                Get Started on GitHub
              </Link>
              <Link 
                href="https://github.com/rehan-hdr/toa" 
                target="_blank"
                className="px-10 py-5 bg-transparent hover:bg-white/10 text-white text-lg font-bold rounded-xl transition-all border-2 border-orange-400 hover:border-orange-300"
              >
                Star on GitHub ⭐
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-900 bg-slate-950/80 py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">N</span>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-amber-500 bg-clip-text text-transparent">NEXUS</span>
              </div>
              <p className="text-gray-400 text-sm">Your private, local-first AI assistant</p>
            </div>
            
            <div className="flex gap-8 text-sm">
              <a href="#features" className="text-gray-400 hover:text-orange-400 transition-colors">Features</a>
              <a href="#tech" className="text-gray-400 hover:text-orange-400 transition-colors">Technology</a>
              <a href="#how" className="text-gray-400 hover:text-orange-400 transition-colors">How It Works</a>
              <Link href="https://github.com/rehan-hdr/toa" target="_blank" className="text-gray-400 hover:text-orange-400 transition-colors">GitHub</Link>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-900 text-center text-gray-500 text-sm">
            <p>© 2025 NEXUS • Built with privacy in mind • 100% Open Source • No tracking, no telemetry, no compromises</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
