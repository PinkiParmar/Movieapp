import React from "react";
import './Header.css';
import {Link} from 'react-router-dom';
export default function Header(){
    return(<>
    <div className="header">
        <div className="headerLeft">
            <Link to="/home"><img className="rounded" src="img_logo.png" /></Link>
            <Link to="/popular" style={{textDecoration:'none'}}><span>Popular</span></Link>
            <Link to="/top_rated" style={{textDecoration:'none'}} ><span>Top rated</span></Link>
            <Link to="/upcoming" style={{textDecoration:'none'}} ><span>Upcoming</span></Link>
            <Link to="/logout" style={{textDecoration:'none'}} ><span>Logout</span></Link>
            <Link to="/profile" style={{textDecoration:'none'}} ><img src="img_avtar2.png" alt="Profile" className="rounded-circle"/><span>My Profile</span></Link>
            
            </div>
    </div>
    
     <form action="">
                    <div className="header">
                        <input type="text" className="header" placeholder="Search for movie"/>
                        <div className="header">
                            <span >
                                <i  style={{textDecorationColor:'olive'}}></i>
                            </span>
                        </div>
                    </div>
                </form>
           
    </>)
}