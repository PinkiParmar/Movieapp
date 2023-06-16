import React,{useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Register.css";
export default function Register()
{
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
    axios.post("http://localhost:3003/register", payload, {
      headers: {
      "Content-type": "application/json",
      },
      })
      .then((res) => {
        console.log(res);
        if (res.status===200){
          alert(res.data.msg);
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
    return(
        <>
         <form onSubmit={(e)=>submit(e)}>
  <div class="container">
  <button type="submit">Register Here</button>
  <div className="row">
  <div className="col-md-6 mb-4">
    <label for="first_name"><b>First Name</b></label>
    <input type="text" placeholder="Enter first name" name="first_name" onChange={(e)=>handle(e)} value={data.first_name} required/>
    </div>
    <div className="col-md-6 mb-4">
          <label for="last_name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last name" name="last_name" onChange={(e)=>handle(e)} value={data.last_name} required/>
    </div>
    
    </div>
    <label for="address"><b>Address</b></label>
    <input type="text" placeholder="Enter address" name="address" onChange={(e)=>handle(e)} value={data.address} required/>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter your email" name="email" onChange={(e)=>handle(e)} value={data.email} required/>
    <label for="city"><b>City Name</b></label>
    <input type="text" placeholder="Enter city name" name="city" onChange={(e)=>handle(e)} value={data.city} required/>
    <label for="state"><b>State</b></label>
    <input type="text" placeholder="Enter state" name="state" onChange={(e)=>handle(e)} value={data.state} required/>
    <label for="country"><b>Country Name</b></label>
    <input type="text" placeholder="Enter Country name" name="country" onChange={(e)=>handle(e)} value={data.country} required/>
    <label for="zip_code"><b>Zip Code</b></label>
    <input type="text" placeholder="Enter zip_code" name="zip_code" onChange={(e)=>handle(e)} value={data.zip_code} required/>
    <label for="mobile"><b>Mobile No.</b></label>
    <input type="text" placeholder="Enter mobile" name="mobile" onChange={(e)=>handle(e)} value={data.mobile} required/>
    <label for="password"><b>Password</b></label>
    <input type="text" placeholder="Enter password" name="password" onChange={(e)=>handle(e)} value={data.password} required/>
    <label for="password"><b>Cpassword</b></label>
    <input type="text" placeholder="confirm password" name="cpassword" required/>

    <button t0="/" type="submit">Register</button>
   
    </div>
  <div class="container" style={{backgroundColor:'#f1f1f1'}}>
    <button type="button" class="cancelbtn">Cancel</button>
  </div>
   </form>
    </>
    );
}