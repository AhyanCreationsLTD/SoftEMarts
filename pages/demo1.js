/**
 * @module AuthManager
 * @description Handle user authentication and session tokens.
 */
export const login = (username, password) => {
    const mockUser = "admin";
    const mockPass = "js_org_2026";
    if (username === mockUser && password === mockPass) {
        return { status: 200, token: "jwt_softemarts_token_abc123" };
    }
    return { status: 401, message: "Invalid Credentials" };
};
console.log("Demo 1: Auth Manager Loaded.");
