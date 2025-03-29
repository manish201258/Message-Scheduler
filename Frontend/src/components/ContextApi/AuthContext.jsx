import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {     
    const [isAuthenticated, setIsAuthenticated] = useState(!!Cookies.get("token"));
    const BASE_URL = "https://message-scheduler-swoa.onrender.com";
    const signup = async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/api/signup`, userData);
            if (response.data.token) {
                Cookies.set("token", response.data.token, { expires: 7 });
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    const login = async (userData) => {
        try {
            const response = await axios.post(`${BASE_URL}/auth/api/login`, userData);
            if (response.data.token) {
                Cookies.set("token", response.data.token, { expires: 7 });
                setIsAuthenticated(true);
            }
        } catch (error) {
            console.error("Login failed:", error);
        }
    };

    const logout = () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
    };


    // MessageScheduling

    const messageSchedule = async (sender, receiver) => {
        try {
            const response = await axios.post(
                `${BASE_URL}/auth/api/scheduleMessage`,
                { sender, receiver } 
            );
            console.log("Message scheduled successfully:", response.data);
        } catch (error) {
            console.error("Error in message scheduling:");
        }
    };
    
    
    return (
        <AuthContext.Provider value={{ isAuthenticated, signup, login, logout,messageSchedule }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
