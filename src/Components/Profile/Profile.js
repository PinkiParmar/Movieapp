import React, { useState,useEffect } from "react";
import './Profile.css';
import axios from "axios";

import {Link} from 'react-router-dom';
export default function Profile(){
    const [profileData, setProfileData] = useState(
      {
       id:"2"
      }
    );
    function getProfile(){
      const url = "http://localhost:3003/view-profile";
      const payload = {profileData};
      axios.get(url, payload, {
        headers: {
        "Content-type": "application/json",
        },
        })
        .then((res) => {
          console.log(res);
          if (res.status===200){
            setProfileData(res.data.data);
            alert("Logged in as : "+ JSON.stringify(res.data.data));
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
 <div className="card mb-4">
                    <form>
                    <div className="row">
                    <div className="col-md-4 mb-4">
                        <h2 className='text' style={{textAlign:'center',color:'red'}}> Account Details</h2>
                        <div class="imgcontainer">
                         <img src="img_avtar2.png" alt="Avatar" className="avatar1" />
                      </div>
                      </div>
                      <div className="col-md-4 mb-4">
                        <div className="row gx-3 mb-3">
                             <div className="col-md-6">
                                <label className="small mb-1 text" for="inputFirstName" style={{textAlign:'center',color:'black'}}>First name    :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <span className="small mb-1 text" for="inputFirstName">{profileData.first_name}</span>
                            </div> 
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLastName" style={{textAlign:'center',color:'black'}}>Last name:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputLastName">{profileData.last_name}</label>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputEmail" style={{textAlign:'center',color:'black'}}>email :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputEmail">{profileData.email}</label>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLocation" style={{textAlign:'center',color:'black'}}>Address :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputLocation">{profileData.address}</label>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1 text" for="inputEmailAddress" style={{textAlign:'center',color:'black'}}>City :</label>&nbsp;&nbsp;&nbsp;&nbsp;
                            <label className="small mb-1 text" for="inputEmailAddress">{profileData.city}</label>
                        </div>
                              <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone" style={{textAlign:'center',color:'black'}}>State &nbsp;&nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputPhone">{profileData.state}</label>
                            </div>
                                                   <div className="col-md-6">
                                <label className="small mb-1 text" for="inputCountry" style={{textAlign:'center',color:'black'}}>Country &nbsp;&nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputCountry">{profileData.country}</label>
                                
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputZip_code" style={{textAlign:'center',color:'black'}}>Zip Code &nbsp;&nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputZip_code">{profileData.zip_code}</label>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone" style={{textAlign:'center',color:'black'}}>Mobile &nbsp;&nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputPhone">{profileData.mobile}</label>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPassword" style={{textAlign:'center',color:'black'}}>Password &nbsp;&nbsp;:</label>&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputPassword">{profileData.password}</label>
                            </div>
                            </div>
                            </div>
                        </div>
                     <button className="btn btn-primary" type="button"><Link to="/edit-profile" style={{color:'black'}}>Edit Profile</Link></button>
                    </form>
                </div>
    </>)
}