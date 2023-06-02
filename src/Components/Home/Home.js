import React,{useEffect,useState,Link} from 'react';
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import  './Home.css';

export default function Home(){
    
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
        <div className="Home">
            {/* {
                data.map((movie, index)=>{
                    return <img src={movie.image}></img>
                })
            } */}
        <Carousel
        showThumbs={false}
        autoplay={true}
        transitionTime={1}
        infiniteLoop={true}
        showStatus={false}>
            {
                data.map((movie, index)=>{
                    return (<>
                    <img src={movie.image} className='slider-img'/>
                    <a>{movie.movie_name}</a>
                    </>)
                })
                
                // data.map((movie, index)=>{
                //     return (<>
                //         <div className="posterImage">
                //             <img src={movie.image} className='slider-img' />
                //         </div>
                //         <div className="posterImage__title">
                //             <div>
                //                 <label className="Home" for="home page">Movie name</label>
                //                 <p className="Home">{movie.movie_name}</p></div>
                //             </div>

                //             <p className="Home">{movie.category}</p>
                //             <p className="Home">{movie.movie_type}</p>
                //             <p className="Home">{movie.director}</p>
                //             <p className="Home">{movie.start_cast}</p>
                //             <p className="Home">{movie.Rating}</p>
                    
                //     </>)
                // })
            }

            
       </Carousel> 
        {/* <Carousel>

        {
                data.map((movie, index)=>{
                    return (<>
                <div className="posterImage">
                    <img src={movie.image} />
                    </div>
                    <div className="posterImage__title">
                    <p className="legend">{movie.movie_name}</p></div>
                    <p className="legend">{movie.category}</p>
                    <p className="legend">{movie.movie_type}</p>
                    <p className="legend">{movie.director}</p>
                    <p className="legend">{movie.start_cast}</p>
                    <p className="legend">{movie.Rating}</p>
            
                
                    </>)
                })
            }
                
            </Carousel> */}
        </div>
        

        </>
    );
}