import React, { useState,useEffect } from "react";
import './Profile.css';
import axios from "axios";

import {Link} from 'react-router-dom';
export default function Profile(){
    const [profileData, setProfileData] = useState();
    function getProfile(){
      const url = "http://localhost:3003/view-profile";
      const payload = {
        id: 2
      };
      axios.post(url, payload, {
        headers: {
        "Content-type": "application/json",
        },
        })
        .then((res) => {
          console.log(res);
          if (res.status===200){
            console.log(res.data)
            setProfileData(res.data[0]);
          //  alert("Logged in as : "+ JSON.stringify(res.data));
          } else {
            alert("Error in API request or network")
          }
        })
        .catch((err)=> {
          alert("Error in API request or network")
          console.log(err);
        });
    };
    useEffect(() =>{
  getProfile();
    },[]);
    return(<>
 <div className="card mb-4 bg-dark text-white">
                    <form>
                    <div className="row">
                    <div className="col-md-4 mb-4">
                        <h2 className='text' style={{textAlign:'center',color:'red'}}> Account Details</h2>
                        <div class="imgcontainer">
                         <img src="img_avtar2.png" alt="Avatar" className="avatar1" />
                      </div>
                      </div>
                      <div className="col-md-4 mb-4">
                          {(profileData) ? (
                            <>
                        <div className="row gx-3 mb-3">
                          
                             <div className="col-md-6">
                                <label className="small mb-1 text" for="inputFirstName" >First name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="small mb-1 " for="inputFirstName" > {profileData.first_name}</span>
                            </div> 
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLastName" >Last name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputLastName">{profileData.last_name}</label>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputEmail" >email:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputEmail">{profileData.email}</label>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLocation" >Address:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputLocation">{profileData.address}</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1 text" for="inputEmailAddress" >City:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="small mb-1 " for="inputEmailAddress">{profileData.city}</label>
                        </div>
                              <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone" >State:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputPhone">{profileData.state}</label>
                            </div>
                                                   <div className="col-md-6">
                                <label className="small mb-1 text" for="inputCountry" >Country:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputCountry">{profileData.country}</label>
                                
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputZip_code" >Zip:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputZip_code">{profileData.zip_code}</label>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone" >Mobile:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputPhone">{profileData.mobile}</label>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPassword" >Password:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 " for="inputPassword">{profileData.password}</label>
                            </div>
                            </div>
                          </>
                          ) : null}
                            </div>
                        </div>
                     <button className="btn btn-primary" type="button"><Link to="/edit-profile" style={{color:'black'}}>Edit Profile</Link></button>
                    </form>
                </div>
    </>)
}