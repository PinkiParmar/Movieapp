import React from 'react';
import './Login.css';

export default function Register(){
    return(
        <>
    
         <form>
       
  
  <div class="container">
  <button type="submit">Register Here</button>
  <div className="row">
  <div className="col-md-6 mb-4">
    <label for="first_name"><b>First Name</b></label>
    <input type="text" placeholder="Enter first name" name="first_name" required/>
    </div>
    <div className="col-md-6 mb-4">
          <label for="last_name"><b>Last Name</b></label>
    <input type="text" placeholder="Enter Last name" name="last_name" required/>
    </div>
    </div>
    <label for="address"><b>Address</b></label>
    <input type="text" placeholder="Enter address" name="address" required/>
    <label for="email"><b>Email</b></label>
    <input type="text" placeholder="Enter your email" name="email" required/>
    <label for="city"><b>City Name</b></label>
    <input type="text" placeholder="Enter city name" name="city" required/>
    <label for="state"><b>State</b></label>
    <input type="text" placeholder="Enter state" name="state" required/>
    <label for="country"><b>Country Name</b></label>
    <input type="text" placeholder="Enter Country name" name="country" required/>
    <label for="zip_code"><b>Zip Code</b></label>
    <input type="text" placeholder="Enter zip_code" name="zip_code" required/>
    <label for="mobile"><b>Mobile No.</b></label>
    <input type="text" placeholder="Enter mobile" name="mobile" required/>
    <label for="password"><b>Password</b></label>
    <input type="text" placeholder="Enter password" name="password" required/>
    <button type="submit">Register</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"/> Remember me
    </label>
    </div>
  

  <div class="container" style={{backgroundColor:'#f1f1f1'}}>
    <button type="button" class="cancelbtn">Cancel</button>
   
  </div>
  
   </form>
   

 

    </>
    );
}