export const renderHome = () => `
    <nav class="p-5 bg-gray-800 border-b border-yellow-500 flex justify-between items-center shadow-lg">
        <h1 class="text-2xl font-bold text-yellow-500 tracking-tight">SoftEMarts<span class="text-white text-xs ml-1">v1.0</span></h1>
        <div class="space-x-6">
            <button onclick="showPage('home')" class="text-yellow-500 font-semibold border-b-2 border-yellow-500">Home</button>
            <button onclick="showPage('contact')" class="text-white hover:text-yellow-500 transition">Contact</button>
        </div>
    </nav>

    <div class="bg-gray-900 py-16 text-center border-b border-gray-800">
        <h2 class="text-5xl font-extrabold text-white mb-4">Premium <span class="text-yellow-500">JS Assets</span></h2>
        <p class="text-gray-400 max-w-2xl mx-auto italic">High-performance modular scripts, UI logic, and developer utilities for the JavaScript ecosystem.</p>
    </div>

    <div class="container mx-auto p-10">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            ${[
                {id: 1, title: "Secure Auth Logic", desc: "JWT-based authentication and session handler."},
                {id: 2, title: "Data Filter Engine", desc: "Complex JSON object searching and filtering logic."},
                {id: 3, title: "UI Cursor Kit", desc: "Interactive mouse tracking for advanced UIs."},
                {id: 4, title: "Theme Manager", desc: "Persistent dark/light mode state management."},
                {id: 5, title: "State Store Pro", desc: "Lightweight reactive state management system."},
                {id: 6, title: "SPA Router Core", desc: "Clean URL routing logic without dependencies."}
            ].map(asset => `
                <div class="p-6 bg-gray-800 rounded-xl border border-gray-700 hover:border-yellow-500 hover:shadow-[0_0_20px_rgba(234,179,8,0.2)] transition-all duration-300 group">
                    <div class="flex justify-between items-start mb-4">
                        <div class="bg-yellow-500 text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase">Module</div>
                        <span class="text-gray-600 text-xs font-mono">0.0.${asset.id}</span>
                    </div>
                    <h3 class="text-xl font-bold mb-2 group-hover:text-yellow-500 transition">${asset.title}</h3>
                    <p class="text-gray-400 mb-6 text-sm leading-relaxed">${asset.desc}</p>
                    
                    <button onclick="window.open('./pages/demo${asset.id}.js', '_blank')" 
                            class="w-full text-center text-yellow-500 border border-yellow-500 px-4 py-2 rounded-lg font-bold hover:bg-yellow-500 hover:text-black transition-colors">
                        View Source Code
                    </button>
                </div>
            `).join('')}
        </div>
    </div>

    <div class="text-center py-10 border-t border-gray-800">
        <p class="text-gray-500 text-sm">Targeted at JavaScript Developers & Open Source Contributors.</p>
    </div>
`;
