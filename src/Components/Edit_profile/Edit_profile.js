import React,{useState,useEffect} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Edit_profile.css';
export default function Edit_profile(){
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
    // const [data, setData] = useState({
      first_name:"",
      last_name:"",
      address:"",
      email:"",
      city:"",
      state:"",
      country:"",
      zip_code:"",
      mobile:"",
      password:"",
    });
  function submit(e){
    e.preventDefault(e);
    const payload = profileData;
    console.log(payload)
    axios.post("http://localhost:3003/update-profile", payload, {
      headers: {
      "Content-type": "application/json",
      },
      })
      .then((res) => {
        console.log(res);
        if (res.status===200){
          //alert(res.data.message);
          localStorage.setItem('message', JSON.stringify(res.profileData.message));
          navigate('/', { replace: true });
        } else {
          alert("Error in API request or network")
        }
      })
      .catch((err)=> {
        alert("Error in API request or network")
        console.log(err);
      });
  };

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

  const handle=(e)=>{
    const newdata={...profileData};
    console.log(e.target.value);
    newdata[e.target.name] = e.target.value;
    console.log(newdata);
    setProfileData(newdata);
    console.log(newdata);
  }
  useEffect(() =>{
    getProfile();
  }, []);
    return(<>
    <div className="card mb-4 bg-dark text-white">
                    <form onSubmit={(e)=>submit(e)}>
                    <div className="row">
                    <div className="col-md-4 mb-4">
                        <h2 className='text' style={{textAlign:'center',color:'blue'}}> Edit Profile</h2>
                        <div className="imgcontainer">
                         <img src="img_avtar2.png" alt="Avatar" className="avatar1" />
                         <h2 className='text' style={{textAlign:'center',color:'green'}}>My Profile</h2>
                      </div>
                      </div>
                      <div className="col-md-8 mb-4">
                        <div className="row gx-3 mb-3">
                             <div className="col-md-6">
                                <label className="small mb-1 text" for="inputFirstName" >First name:</label>
                                <input className="form-control"  type="text"  name="first_name" onChange={(e)=>handle(e)} value= {profileData.first_name} required />
                            </div> 
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLastName" >Last name:</label>
                                <input className="form-control"  type="text"  name="last_name" onChange={(e)=>handle(e)} value={profileData.last_name} required/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputEmail" >email:</label>
                                <input className="form-control"  type="email"  name="email" onChange={(e)=>handle(e)} value={profileData.email} required />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLocation" >Address:</label>
                                <input className="form-control"  type="text"  name="address" onChange={(e)=>handle(e)} value={profileData.address} required/>
                            </div>
                        </div>
                        </div>
                     </div>
                        <div className="mb-3">
                            <label className="small mb-1 text" for="inputEmailAddress" >City:</label>
                            <input className="form-control"  type="text"  name="city" onChange={(e)=>handle(e)} value={profileData.city} required/>
                        </div>
                              <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone" >State:</label>
                                <input className="form-control"  type="text"  name="state" onChange={(e)=>handle(e)} value={profileData.state} required/>
                            </div>
                                <div className="col-md-6">
                                <label className="small mb-1 text" for="inputCountry" >Country:</label>
                                <input className="form-control"  type="text" name="country"  onChange={(e)=>handle(e)} value={profileData.country} required />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputZip_code" >Zip Code:</label>
                                <input className="form-control"  type="number" name="zip"  onChange={(e)=>handle(e)} value={profileData.zip_code} required />&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputPhone" >Mobile:</label>
                                <input className="form-control"  type="number" name="mobile"  onChange={(e)=>handle(e)} value={profileData.mobile} required />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPassword" >Password:</label>
                                <input className="form-control"  type="password" name="password"  onChange={(e)=>handle(e)} value={profileData.password} required />
                            </div>
                        </div>
                        <span className="psw text"><Link to="/re-set-password"> Reset Password?</Link></span>
                     <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
    </>)
}