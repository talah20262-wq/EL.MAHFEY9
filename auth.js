import { account } from "./appwrite.js";
import { ID } from "appwrite";

export const registerUser = async (email, password, name) => {
    try {
        const response = await account.create(ID.unique(), email, password, name);
        console.log("User registered:", response);
        return response;
    } catch (error) {
        console.error("Registration error:", error);
        throw error;
    }
};

export const loginUser = async (email, password) => {
    try {
        const response = await account.createEmailPasswordSession(email, password);
        console.log("User logged in:", response);
        return response;
    } catch (error) {
        console.error("Login error:", error);
        throw error;
    }
};

export const logoutUser = async () => {
    try {
        await account.deleteSession("current");
        window.location.href = "login.html";
    } catch (error) {
        console.error("Logout error:", error);
    }
};

export const getCurrentUser = async () => {
    try {
        return await account.get();
    } catch (error) {
        return null;
    }
};
