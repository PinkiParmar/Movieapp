import React from "react";
import './Header.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
    // const [data, setData] = useState([]);
    // const getData = async () => {
    //     var token=JSON.parse(localStorage.getItem('token'));
    //     console.log(token);
    //   const { data } = await axios.post("http://localhost:3003/movies",{headers: {
    //     "Authorization": `Bearer ${token}`, 
    //     "Content-type": "application/json",
    //  }},);

    //   console.log('movie',data);
    //   setData(data);
    // };
    // useEffect(() => {
    //   getData();
    // }, []);
    return (<>
        <div className="header">
            <div className="headerLeft">
                <Link to="/home"><img className="rounded" src="img_logo.png" /></Link>
                <Link to="/all_movies" style={{ textDecoration: 'none' }}><span>All movies</span></Link>
                <Link to="/popular" style={{ textDecoration: 'none' }}><span>Popular</span></Link>
                <Link to="/top_rated" style={{ textDecoration: 'none' }} ><span>Top rated</span></Link>
                <Link to="/upcoming" style={{ textDecoration: 'none' }} ><span>Upcoming</span></Link>
                <Link to="/logout" style={{ textDecoration: 'none' }} ><span>Logout</span></Link>
                <Link to="/profile" style={{ textDecoration: 'none' }} ><img src="img_avtar2.png" alt="Profile" className="rounded-circle" /><span>My Profile</span></Link>
            </div>
        </div>
        <form action="">
            <div className="header">
                <input type="text" name="search" className="header" placeholder="Search for movie" />
                <div className="header">
                    <span >
                        <i style={{ textDecorationColor: 'olive' }}></i>
                    </span>
                </div>
            </div>
        </form>
    </>)
}