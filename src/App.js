import React from 'react';
import { BrowserRouter,Routes, Route} from "react-router-dom";
import Home from './Components/Home/Home';
import Register from './Components/Register/Register';
import Popular from './Components/Popular/Popular';
import Top_rated from './Components/Top_rated/Top_rated';
import Upcoming from './Components/Upcoming/Upcoming';
import Profile from './Components/Profile/Profile';
import Footer from './Common/Footer';
import MainLayout from './Common/Main_Layout';
import All_movies from './Components/All_movies/All_movies';
import Login from './Components/Login/Login';
import Forgot from './Components/Forgot/Forgot';
import Set_new_password from './Components/Set_new_password/Set_new_password';
import Edit_profile from './Components/Edit_profile/Edit_profile';
import Re_set_password from './Components/Re_set_password/Re_set_password';
import "bootstrap/dist/css/bootstrap.min.css";
// import MovieDetail from './Components/MovieDetail/MovieDetail';
import Detail_page from './Components/Detail_page/Detail_page';
export default function App(){
  return(
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<MainLayout Mainpage={<Home/>}/>}/>
      <Route path="/all_movies" element={<MainLayout Mainpage={<All_movies/>}/>}/>
      <Route path="/header" element={<MainLayout Mainpage={<Home/>}/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      <Route path="/forgot" element={<Forgot/>}></Route>
      <Route path="/set-new-password" element={<Set_new_password/>}></Route>
      <Route path="/register" element={<Register/>}></Route>
      <Route path="/popular" element={<MainLayout Mainpage={<Popular/>}/>}></Route>
      <Route path="/top_rated" element={<MainLayout Mainpage={<Top_rated/>}/>}></Route>
      <Route path="/upcoming" element={<MainLayout Mainpage={<Upcoming/>}/>}></Route>
      <Route path="/profile" element={<MainLayout Mainpage={<Profile/>}/>}></Route>
      <Route path="/edit-profile"  element={<MainLayout Mainpage={<Edit_profile/>}/>}></Route>
      <Route path="/re-set-password"  element={<MainLayout Mainpage={<Re_set_password/>}/>}></Route>
      <Route path="/footer" element={<Footer/>}></Route>
      <Route path="/detail_page/:id" element={<MainLayout Mainpage={<Detail_page/>}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}