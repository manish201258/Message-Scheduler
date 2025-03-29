import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React,{ useEffect, useState } from "react";
import "./App.css";

import Signup from "./components/Authentication/Signup";
import Login from "./components/Authentication/Login";
import Home from "./components/miscellaneous/Home";
import { useAuth } from "./components/ContextApi/AuthContext";
import LandingPage from "./components/miscellaneous/LandingPage";
import ScheduleMessage from "./components/miscellaneous/ScheduleMessage";

function App() {
    const { isAuthenticated } = useAuth();
    const [authState, setAuthState] = useState(isAuthenticated);

    useEffect(() => {
        setAuthState(isAuthenticated);
    }, [isAuthenticated]);

    return (
      <Router>
      <Routes>
      <Route path='/' element={isAuthenticated?<LandingPage/>:<Navigate to='/login'/>}/> 
      <Route path='/login' element={isAuthenticated? <Navigate to='/'/>:<Login/>}/>
      <Route path='/register' element={isAuthenticated? <Navigate to='/'/>:<Signup/>}/>
      <Route path="/schedulemessage" element={<ScheduleMessage/>}/>
      </Routes>
    </Router>
    );
}

export default App;
