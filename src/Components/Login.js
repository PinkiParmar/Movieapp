import React from 'react';
import './Login.css';

export default function Login(){
    return(
        <>
    
         <form className="container col-lg-4 mt-5">
       
  <div class="imgcontainer">
    <img src="img_avtar2.png" alt="Avatar" class="avatar"/>
  </div>
  <div class="container">
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" required/>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required/>

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