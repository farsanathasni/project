import React from 'react'
// // src/main.jsx or src/index.js
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import RegisterPage from './Components/Auth/RegisterPage';
import LoginPage from './Components/Auth/LoginPage';
import Home from './Pages/Home';



function App() {
  return (
<>
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>} />

  <Route path="/register" element={<RegisterPage/>} />
    <Route path="/loginpage" element={<LoginPage/>} />
</Routes>
</BrowserRouter>

</>
  )
}

export default App
