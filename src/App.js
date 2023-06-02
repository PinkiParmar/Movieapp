import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login';
import Register from './Components/Register';
import Popular from './Components/Popular';
import Top_rated from './Components/Top_rated';
import Upcoming from './Components/Upcoming';
import Profile from './Components/Profile';
import Header from './Common/Header';
import Footer from './Common/Footer';
import MainLayout from './Common/Main_Layout';
import Logout from './Components/Logout';

export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<MainLayout Mainpage={<Home/>}/>}/>
      
      <Route path="/header" element={<MainLayout Mainpage={<Home/>}/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/popular" element={<MainLayout Mainpage={<Popular/>}/>}></Route>
      <Route path="/top_rated" element={<MainLayout Mainpage={<Top_rated/>}/>}></Route>
      <Route path="/upcoming" element={<MainLayout Mainpage={<Upcoming/>}/>}></Route>
      <Route path="/profile" element={<MainLayout Mainpage={<Profile/>}/>}></Route>
      <Route path="/footer" element={<Footer/>}></Route>
      <Route path="/logout" element={<Logout/>}></Route>

      </Routes>
    </BrowserRouter>
  
    </>
  );
}