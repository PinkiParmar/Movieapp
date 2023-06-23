import React,{useState,useEffect} from "react";
import './Header.css';
import axios from "axios";
//import {FaSearch} from 'react-fa-search';
import { Link } from 'react-router-dom';

export default function Header() {
    const [APIData, setAPIData] = useState([])
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:3003/search-name`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }
   
    return (<>
        <div className="header">
            <div className="headerLeft">
                <Link to="/home"><img className="rounded" src="img_logo.png" /></Link>
                <Link to="/all_movies" style={{ textDecoration: 'none' }} ><span style={{textAlign:'center',color:'black'}}>All movies</span></Link>
                <Link to="/popular" style={{ textDecoration: 'none' }}><span style={{textAlign:'center',color:'black'}}>Popular</span></Link>
                <Link to="/top_rated" style={{ textDecoration: 'none' }} ><span style={{textAlign:'center',color:'black'}}>Top rated</span></Link>
                <Link to="/upcoming" style={{ textDecoration: 'none' }} ><span style={{textAlign:'center',color:'black'}}>Upcoming</span></Link>
                <Link to="/logout" style={{ textDecoration: 'none' }} ><span style={{textAlign:'center',color:'black'}}>Logout</span></Link>
                <Link to="/profile" style={{ textDecoration: 'none' }} ><span style={{textAlign:'center',color:'black'}}>My Profile</span><img src="img_avtar2.png" alt="Profile" className="rounded-circle" /></Link>
            </div>
        </div>
        <form action="">
            <div className="header">
                {/* <FaSearch id="FaSearch"/> */}
                <input type="text" name="search" className="header" placeholder="Search for movie" onChange={(e) => searchItems(e.target.value)} />
                <div className="header">
                    <span >
                        <i style={{ textDecorationColor: 'olive' }}></i>
                    </span>
                    <div className="container-fluid pt-5 container">
            <div className="row px-xl-5 pb-3 container">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1 container">
                    <div className="mb-4 container ">
                    {
                        APIData.map((movie, index)=>{
                            return <img src={APIData.image} className='slider'/>
                        })
                    } 
                    </div>
                </div>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="mb-4">
                    {
                        APIData.map((movie, index)=>{
                            return (<>
                                <p className="Home">{APIData.movie_name}</p>
                            </>)
                        })
                    } 
                    </div>
                </div>
            </div>
        </div>
                </div>
            </div>
        </form>
       
    </>)
}