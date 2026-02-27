import { renderHome } from './pages/home.js';
import { renderContact } from './pages/contact.js';

window.showPage = (page) => {
    const app = document.getElementById('app');
    if (page === 'home') app.innerHTML = renderHome();
    else if (page === 'contact') app.innerHTML = renderContact();
};

// Initial Load
showPage('home');
