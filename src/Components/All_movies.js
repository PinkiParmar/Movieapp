import React, {useEffect, useState} from "react"
import axios from "axios";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import "./All_movies.css"
import { Link } from "react-router-dom"


 export default function All_movies(){
    
    const [data, setData] = useState([]);
    const getData = async () => {
      const { data } = await axios.get("http://localhost:3003/movies");
      console.log('movie',data);
      setData(data);
    };
    useEffect(() => {
      getData();
    }, []);

   return(<>
        <div className="container-fluid pt-5 container">
            <div className="row px-xl-5 pb-3 container">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1 container">
                    <div className="mb-4 container ">
                    {
                        data.map((movie, index)=>{
                            return <img src={movie.image} className='slider'/>
                        })
                    } 
                    </div>
                </div>
            </div>
            <div className="row px-xl-5 pb-3">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
                    <div className="mb-4">
                    {
                        data.map((movie, index)=>{
                            return (<>
                                <p className="Home">{movie.movie_name}</p>
                            </>)
                        })
                    } 
                    </div>
                </div>
            </div>
        </div>
   </>);

}


