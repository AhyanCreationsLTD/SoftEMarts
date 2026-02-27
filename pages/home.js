export const renderHome = () => `
    <nav class="p-5 bg-gray-800 border-b border-yellow-500 flex justify-between">
        <h1 class="text-xl font-bold text-yellow-500">SoftEMarts</h1>
        <div class="space-x-4">
            <button onclick="showPage('home')" class="text-white">Home</button>
            <button onclick="showPage('contact')" class="text-white">Contact</button>
        </div>
    </nav>
    <div class="container mx-auto p-10">
        <h2 class="text-4xl font-bold mb-8">Premium JS Assets</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            ${[1, 2, 3, 4, 5, 6].map(i => `
                <div class="p-6 bg-gray-800 rounded-lg border border-gray-700">
                    <h3 class="text-xl font-bold mb-2">JS Asset #00${i}</h3>
                    <p class="text-gray-400 mb-4 text-sm">High-performance script with modular logic.</p>
                    <button onclick="window.open('./demo${i}.js', '_blank')" class="text-yellow-500 border border-yellow-500 px-4 py-1 rounded">View Source Code</button>
                </div>
            `).join('')}
        </div>
    </div>
`;
