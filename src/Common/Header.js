import React, { useState, useEffect } from "react";
import './Header.css';
import axios from "axios";
//import {FaSearch} from 'react-fa-search';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Header() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/', { replace: true });
    // handleShow(false);
  }
  // const [APIData, setAPIData] = useState([])
  // const [filteredResults, setFilteredResults] = useState([]);
  // const [searchInput, setSearchInput] = useState('');
  // useEffect(() => {
  //   const URL="";

  //   if(RadioName=checked)
  //   {
      
  //   }
  //   axios.get(`http://localhost:3003/search-name`)
  //     .then((response) => {
  //       setAPIData(response.data);
  //     })
  // }, [])
  // const searchItems = (searchValue) => {
  //   setSearchInput(searchValue)
  //   if (searchInput !== '') {
  //     const filteredData = APIData.filter((item) => {
  //       return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
  //     })
  //     setFilteredResults(filteredData)
  //   }
  //   else {
  //     setFilteredResults(APIData)
  //   }
  // }
  const [movieData, setMovieData] = useState();
  function submit(e){
    console.log('10001')
    const url='';
    const RadioName='';
    const RadioStarCast='';
    const RadioCategory='';
    const checked='true';
    e.preventDefault(e);
    const payload = movieData;
    console.log(payload)
    if (RadioName==checked){
      //API call
      url="http://localhost:3003/search-name"
    }
    else if(RadioStarCast==checked){
      //API call
      url="http://localhost:3003/search-star-cast"
    }
    else if(RadioCategory==checked){
      //API call
      url="http://localhost:3003/search-category"
    }
    axios.post(url, payload, {
      headers: {
      "Content-type": "application/json",
      },
      })
      .then((res) => {
        console.log(res);
        if (res.status===200){
          //alert(res.data.message);
          localStorage.setItem('message', JSON.stringify(res.data));
        } else {
          alert("Error in API request or network")
        }
      })
      .catch((err)=> {
        alert("Error in API request or network")
        console.log(err);
      });
  };
  const handle = (e) => {
    const newdata = { ...movieData};
    newdata[e.target.name] = e.target.value;
    setMovieData(newdata);
    console.log(newdata);
  }
  return (<>
    <div className="card mb-4 bg-dark text-white">
      <div className="logout ">
        {/* <Button variant="primary" onClick={handleShow}>
        Log out
      </Button> */}
        <Modal show={show} onHide={handleClose} className="logout_modal">
          <Modal.Header closeButton>
            <Modal.Title>Log out</Modal.Title>
          </Modal.Header>
          <Modal.Body>are you sure, you want to exit!</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={logout}>
              Log out
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
      <div className="header bg-dark text-white">
        <div className="headerLeft">
          <Link to="/home"><img className="rounded" src="img_logo.png" /></Link>
          <Link to="/all_movies" style={{ textDecoration: 'none' }} ><span >All movies</span></Link>
          <Link to="/popular" style={{ textDecoration: 'none' }}><span >Popular</span></Link>
          <Link to="/top_rated" style={{ textDecoration: 'none' }} ><span >Top rated</span></Link>
          <Link to="/upcoming" style={{ textDecoration: 'none' }} ><span >Upcoming</span></Link>
          <Link to="/profile" style={{ textDecoration: 'none' }} ><span >My Profile</span><img src="img_avtar2.png" alt="Profile" className="rounded-circle" /></Link>
          <Link  ><button className="btn btn-default text-white" onClick={handleShow}><h4 >logout</h4></button></Link>
        </div>
      </div>

      {/* <form action="">
        <div >
           <FaSearch id="FaSearch"/> 
          <input type="text" name="search" placeholder="Search for movie" onChange={(e) => searchItems(e.target.value)} />
          <div className="header">
            <span >
              <i style={{ textDecorationColor: 'olive' }}></i>
            </span>
            <div >
              <div >
                {
                  APIData.map((movie, index) => {
                    return <img src={APIData.image} className='slider' />
                  })
                }
              </div>
              <div>
                {
                  APIData.map((movie, index) => {
                    return (<>
                      <p className="Home">{APIData.movie_name}</p>
                    </>)
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div>
          <label>
            <input type="radio" name="abc" value="option1" />
            Search Movie by name
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" name="abc" value="option2" />
            Search Movie by star cast
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" name="abc" value="option3" />
            Search movie by category
          </label>
        </div>
      </form> */}
       <form onSubmit={(e)=>submit(e)}>
        <div >
          {/* <FaSearch id="FaSearch"/>*/} 
          {
                        data.map((movieData, index)=>{
                            let url = `/detail_page/${movieData.id}`
                            return<a href={url}>
          <input type="text" name="search" placeholder="Search for movie" onChange={(e)=>handle(e)} value={movieData}/>
          </a> 
                        })
                    } 
          <div className="header">
            <span >
              <i style={{ textDecorationColor: 'olive' }}></i>
            </span>
            <div >
            </div>
          </div>
        </div>
        <div>
          <label>
            <input type="radio" name="abc" value="RadioName" />
            Search Movie by name
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" name="abc" value="RadioStarCast" />
            Search Movie by star cast
          </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <label>
            <input type="radio" name="abc" value="RadioCategory" />
            Search movie by category
          </label>
        </div>
      </form> 
    </div>
  </>)
}
