import React from 'react';
import Header from './Header';
import Footer from './Footer';
export default function Main_Layout({Mainpage})
{
    return (<>
      <Header/>
        {Mainpage}
        <Footer/>    
    </>
    )
}