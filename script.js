const products = [
    {
        id: 1,
        title: "E-commerce UI Kit",
        category: "Graphics",
        price: "$19",
        sales: 124,
        description: "Professional Figma UI kit for modern online stores.",
        image: "https://via.placeholder.com/400x250/3b82f6/ffffff?text=UI+Kit"
    },
    {
        id: 2,
        title: "Admin Dashboard Script",
        category: "Scripts",
        price: "$49",
        sales: 89,
        description: "Full-featured Node.js dashboard with dark mode support.",
        image: "https://via.placeholder.com/400x250/10b981/ffffff?text=Admin+Panel"
    },
    // নতুন প্রোডাক্ট এখানে যোগ করতে পারবেন
];

function displayProducts(filteredData) {
    const container = document.getElementById('product-container');
    container.innerHTML = '';

    filteredData.forEach(product => {
        container.innerHTML += `
            <div class="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden product-card">
                <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
                <div class="p-6">
                    <div class="flex justify-between items-start mb-2">
                        <span class="text-xs font-bold uppercase text-blue-500 bg-blue-50 px-2 py-1 rounded">${product.category}</span>
                        <span class="text-sm text-gray-500"><i class="fa-solid fa-cart-shopping"></i> ${product.sales} Sales</span>
                    </div>
                    <h3 class="text-xl font-bold text-gray-800 mb-2">${product.title}</h3>
                    <p class="text-gray-600 text-sm mb-4 line-clamp-2">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <span class="text-2xl font-bold text-gray-900">${product.price}</span>
                        <button class="bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 transition">View Details</button>
                    </div>
                </div>
            </div>
        `;
    });
}

function filterProducts(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filtered = products.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// Initial Load
displayProducts(products);
