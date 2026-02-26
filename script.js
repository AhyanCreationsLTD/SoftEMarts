// Product Data Array
const assets = [
    {
        id: 1,
        name: "Ultimate E-com Template",
        type: "Template",
        price: "$24",
        sales: 540,
        img: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 2,
        name: "NodeJS Auth System",
        type: "Script",
        price: "$15",
        sales: 312,
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
    },
    {
        id: 3,
        name: "Dashboard UI Kit",
        type: "Template",
        price: "$39",
        sales: 890,
        img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&w=400&q=80"
    }
];

const container = document.getElementById('product-container');

function render(data) {
    container.innerHTML = data.map(item => `
        <div class="product-card bg-white rounded-2xl overflow-hidden">
            <img src="${item.img}" alt="${item.name}" class="w-full h-52 object-cover">
            <div class="p-6">
                <div class="flex justify-between items-center mb-3">
                    <span class="text-[10px] font-bold tracking-widest uppercase bg-blue-50 text-blue-600 px-2 py-1 rounded">${item.type}</span>
                    <span class="text-xs text-slate-400"><i class="fa-solid fa-fire text-orange-400"></i> ${item.sales} sold</span>
                </div>
                <h3 class="text-lg font-bold mb-4">${item.name}</h3>
                <div class="flex items-center justify-between border-t pt-4">
                    <span class="text-xl font-black">${item.price}</span>
                    <button class="text-blue-600 font-bold hover:underline">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function filterProducts(type) {
    if (type === 'All') return render(assets);
    const filtered = assets.filter(item => item.type === type);
    render(filtered);
}

// Initial Load with minor delay for smooth effect
window.onload = () => render(assets);
