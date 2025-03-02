import React, { useState } from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
import './bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import SetAvatar from './Pages/Avatar/setAvatar';



const App = () => {
  const [theme, setTheme] = useState('light');
  return (

    <div className={theme === "dark" ? "App dark" : "App"}>
      <button onClick={() => {
        if (theme === 'light') {
          setTheme('dark');
        }
        else {
          setTheme('light');
        }
      }}>theme</button>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/setAvatar" element={<SetAvatar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
};

export default App