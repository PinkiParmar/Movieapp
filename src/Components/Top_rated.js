import React, {useEffect, useState} from "react"
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
//import {MDBCarousel, MDBCarouselItem,} from 'mdb-react-ui-kit';
  
import "./Top_rated.css";

export default function Top_rated(){

    const [data, setData] = useState([]);
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3003/movies");
      console.log('movie',data);
      setData(data);
    };
    useEffect(() => {
      getData();
    }, []);

    
    return(
        <>
        {/* <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='movie.image'
        alt='...'
        
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
        alt='...'
      >
        <h5>Second slide label</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
        alt='...'
      >
        <h5>Third slide label</h5>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
      </MDBCarouselItem>
    </MDBCarousel> */}
     <Carousel>
     {
                data.map((movie, index)=>{
                    return (<>
                    <img src={movie.image} className='slider-img' />
                    <a>{movie.movie_name}</a>
                    </>)
                })
                
                
            }
    </Carousel>

        </>
    );



}


