/**
 * @module MiniRouter
 * @description SPA routing without library dependencies.
 */
export const navigateTo = (path) => {
    window.history.pushState({}, path, window.location.origin + path);
    console.log(`Mapsd to: ${path}`);
    // Custom event to trigger UI update
    window.dispatchEvent(new Event('popstate'));
};
console.log("Demo 6: SPA Router Logic Online.");

