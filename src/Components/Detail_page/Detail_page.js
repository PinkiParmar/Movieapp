import React, {useEffect, useState} from "react"
import axios from 'axios';
import { useParams } from "react-router-dom";
export default function Detail_page(){
    const [data, setMovie] = useState()
    var { id } = useParams();
    const getData = async () => {
        const payload = {
            id: id
        };
        console.log(payload);
        const { data } = await axios.post("http://localhost:3003/detail", payload);
        console.log(data);
        setMovie(data);
    };
    useEffect(() => {
        getData()
    }, [])
   return(<>
   
    <div className="card mb-4 bg-dark text-white">
    <div className="row">
  <div className="col-md-6 mb-4">
        <div className="container-fluid pt-5 container ">
            <div className="row px-xl-5 pb-3 container">
                <div className="col-lg-3 col-md-6 col-sm-12 pb-1 container">
                    <div className="mb-4 container ">
                    {
                       data.map((movie, index)=>{
                            return<img src={movie.image} className='slider'/> 
                        })
                    } 
                    </div>
                </div>
            </div>
          
        </div>
        </div>
        <div className="col-md-6 mb-4">
        <div className="col-md-6 mb-4">
        <div className="container-fluid pt-5 container ">
            <div >
                <div >
                    <div >
        <div>
        <div className="row gx-3 mb-3">
                          
                          <div className="col-md-6">
                             <label className="small mb-1 text" for="inputFirstName" >Movie name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="col-md-6">
                    {
                       data.map((movie, index)=>{
                            return  <p className="Home">{movie.movie_name}</p>
      
                        })
                    } 
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="row gx-3 mb-3">
                          
                          <div className="col-md-6">
                             <label className="small mb-1 text" for="inputFirstName" >category:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="col-md-6">
          
                    {
                       data.map((movie, index)=>{
                            return  <p className="Home">{movie.category}</p>
      
                        })
                    } 
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="row gx-3 mb-3">
                          
                          <div className="col-md-6">
                             <label className="small mb-1 text" for="inputFirstName" >Director name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="col-md-6">
                    {
                       data.map((movie, index)=>{
                            return  <p className="Home">{movie.director}</p>
      
                        })
                    } 
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="row gx-3 mb-3">
                          
                          <div className="col-md-6">
                             <label className="small mb-1 text" for="inputFirstName" >Star Cast:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="col-md-6">
                    {
                       data.map((movie, index)=>{
                            return  <p className="Home">{movie.star_cast}</p>
      
                        })
                    } 
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="row gx-3 mb-3">
                          
                          <div className="col-md-6">
                             <label className="small mb-1 text" for="inputFirstName" >Type:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="col-md-6">
          
                    {
                       data.map((movie, index)=>{
                            return  <p className="Home">{movie.movie_type}</p>
      
                        })
                    } 
                    </div>
                    </div>
                    </div>
                    <div>
                    <div className="row gx-3 mb-3">
                          
                          <div className="col-md-6">
                             <label className="small mb-1 text" for="inputFirstName" >Rating:</label>&nbsp;&nbsp;&nbsp;&nbsp;
          </div>
          <div className="col-md-6">
          
                    {
                       data.map((movie, index)=>{
                            return  <p className="Home">{movie.rating}</p>
      
                        })
                    } 
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                
    
        </div> 
        
       
      
        
    
    
       
       

        </div>
        
   </>);

}