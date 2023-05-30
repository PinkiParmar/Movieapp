import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Components/Home';
import Login from './Components/Login';
import Register from './Components/Register';
export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      </Routes>
    </BrowserRouter>
  
    </>
  );
}