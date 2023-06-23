import React,{useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Edit_profile.css';
export default function Edit_profile(){
    const navigate = useNavigate();
    const [data, setData] = useState({
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
    const payload = data;
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
          localStorage.setItem('message', JSON.stringify(res.data.message));
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
  const handle=(e)=>{
    const newdata={...data};
    newdata[e.target.name] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }
    return(<>
 <div className="card mb-4">
               
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
                                <label className="small mb-1 text" for="inputFirstName" style={{textAlign:'center',color:'black'}}>First name:</label>
                                <input className="form-control"  type="text" placeholder="Enter your first name" onChange={(e)=>handle(e)} value={data.first_name} required />
                            </div> 
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLastName" style={{textAlign:'center',color:'black'}}>Last name:</label>
                                <input className="form-control"  type="text" placeholder="Enter your last name" onChange={(e)=>handle(e)} value={data.last_name} required/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputEmail" style={{textAlign:'center',color:'black'}}>email:</label>
                                <input className="form-control"  type="email" placeholder="Enter your email address" onChange={(e)=>handle(e)} value={data.email} required />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLocation" style={{textAlign:'center',color:'black'}}>Address:</label>
                                <input className="form-control"  type="text" placeholder="Enter your location" onChange={(e)=>handle(e)} value={data.address} required/>
                            </div>
                        </div>
                        </div>
                     </div>
                        <div className="mb-3">
                            <label className="small mb-1 text" for="inputEmailAddress" style={{textAlign:'center',color:'black'}}>City:</label>
                            <input className="form-control"  type="text" placeholder="Enter city name" onChange={(e)=>handle(e)} value={data.city} required/>
                        </div>
                        
                              <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone" style={{textAlign:'center',color:'black'}}>State:</label>
                                <input className="form-control"  type="text" placeholder="Enter state name" onChange={(e)=>handle(e)} value={data.state} required/>
                            </div>
                                                   <div className="col-md-6">
                                <label className="small mb-1 text" for="inputCountry" style={{textAlign:'center',color:'black'}}>Country:</label>
                                <input className="form-control"  type="text" name="country" placeholder="Enter country name " onChange={(e)=>handle(e)} value={data.country} required />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputZip_code" style={{textAlign:'center',color:'black'}}>Zip Code:</label>
                                <input className="form-control"  type="number" name="zip_code" placeholder="Enter zip code " onChange={(e)=>handle(e)} value={data.zip_code} required />&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputPhone" style={{textAlign:'center',color:'black'}}>Mobile:</label>
                                <input className="form-control"  type="number" name="mobile" placeholder="Enter mobile number " onChange={(e)=>handle(e)} value={data.mobile} required />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPassword" style={{textAlign:'center',color:'black'}}>Password:</label>
                                <input className="form-control"  type="password" name="password" placeholder="Enter your password" onChange={(e)=>handle(e)} value={data.password} required />
                            </div>
                        </div>
                        <span className="psw text"><Link to="/re-set-password"> Reset Password?</Link></span>
                     <button className="btn btn-primary" type="button">Save changes</button>
                    
                    </form>
                </div>
            
        
    </>)
}