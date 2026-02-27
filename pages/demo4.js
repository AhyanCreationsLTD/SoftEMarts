/**
 * @module ThemeEngine
 * @description Save and sync user theme preferences.
 */
export const toggleTheme = () => {
    const current = localStorage.getItem('theme') || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', next);
    document.body.className = next;
    return next;
};
console.log("Demo 4: Theme Persist Logic Loaded.");
