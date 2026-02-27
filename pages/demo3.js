/**
 * @module CursorEffect
 * @description Advanced mouse tracking for interactive UIs.
 */
export const initCursor = (elementId) => {
    const el = document.getElementById(elementId);
    window.addEventListener('mousemove', (e) => {
        el.style.left = `${e.clientX}px`;
        el.style.top = `${e.clientY}px`;
    });
};
console.log("Demo 3: UI Cursor Engine Ready.");

