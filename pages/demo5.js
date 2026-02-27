/**
 * @module StateStore
 * @description Lightweight state management for Vanilla JS.
 */
let state = {};
export const setState = (key, value) => {
    state[key] = value;
    console.log(`State Updated: ${key} =`, state[key]);
};
export const getState = (key) => state[key];
console.log("Demo 5: State Store Initialized.");

