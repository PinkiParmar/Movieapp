import React, { useState } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import "./Login.css"
export default function Login(){
  const [home, setHome] = useState(true);
  const [data, setData] = useState({
    email:"",
    password:"",
  });
function submit(e){
  e.preventDefault(e);
  const payload = data;
  console.log(payload)
  axios.post("http://localhost:3003/login", payload, {
    headers: {
    "Content-type": "application/json",
    },
    })
    .then((res) => {
      console.log(res.data);
      localStorage.setItem('token', JSON.stringify(res.token));
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
         <form className="col-lg-4 mt-5 " onSubmit={(e)=>submit(e)}>
<div class="imgcontainer">
    <img src="img_avtar2.png" alt="Avatar" class="avatar"/>
  </div>
  <div class="container">
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" onChange={(e)=>handle(e)}   required/>
    <label for="password"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="password" onChange={(e)=>handle(e)}  required/>
    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
    </div>
  <div class="container" style={{backgroundColor:'#f1f1f1'}}>
    <button type="button" class="cancelbtn">Cancel</button>
    <span class="psw">Forgot <a href="#">password?</a></span>
  </div>
   </form>
    </>
    );
}