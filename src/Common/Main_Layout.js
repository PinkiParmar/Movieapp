import React from 'react';
import Header from './Header';
import Footer from './Footer';
export default function Main_Layout({Mainpage})
{
    return (<>
   <div className="card mb-4 bg-dark text-white">
      <Header/>
        {Mainpage}
        <Footer/>  
        </div>  
    </>
    )
}