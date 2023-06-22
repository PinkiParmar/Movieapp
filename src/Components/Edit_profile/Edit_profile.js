import React from 'react';
import './Edit_profile.css';
import {Link} from 'react-router-dom';
export default function Edit_profile(){
    return(<>
 <div className="card mb-4">
               
                    <form>
                        <h2 className='text' style={{textAlign:'center',color:'red'}}> Account Details</h2>
                        <div class="imgcontainer">
                         <img src="img_avtar2.png" alt="Avatar" class="avatar" />
                      </div>
                        <div className="row gx-3 mb-3">
                             <div className="col-md-6">
                                <label className="small mb-1 text" for="inputFirstName">First name:</label>
                                <input className="form-control"  type="text" placeholder="Enter your first name" />
                            </div> 
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLastName">Last name:</label>
                                <input className="form-control"  type="text" placeholder="Enter your last name"/>
                            </div>
                        </div>
                        <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputEmail">email:</label>
                                <input className="form-control"  type="email" placeholder="Enter your email address"/>
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputLocation">Address:</label>
                                <input className="form-control"  type="text" placeholder="Enter your location"/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="small mb-1 text" for="inputEmailAddress">City:</label>
                            <input className="form-control"  type="text" placeholder="Enter city name" />
                        </div>
                              <div className="row gx-3 mb-3">
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPhone">State:</label>
                                <input className="form-control"  type="text" placeholder="Enter state name" />
                            </div>
                                                   <div className="col-md-6">
                                <label className="small mb-1 text" for="inputCountry">Country:</label>
                                <input className="form-control"  type="text" name="country" placeholder="Enter country name " />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputZip_code">Zip Code:</label>
                                <input className="form-control"  type="number" name="zip_code" placeholder="Enter zip code " />&nbsp;&nbsp;&nbsp;&nbsp;
                                <label className="small mb-1 text" for="inputPhone">Mobile:</label>
                                <input className="form-control"  type="number" name="mobile" placeholder="Enter mobile number " />
                            </div>
                            <div className="col-md-6">
                                <label className="small mb-1 text" for="inputPassword">Password:</label>
                                <input className="form-control"  type="password" name="password" placeholder="Enter your password" />
                            </div>
                        </div>
                        <span className="psw text"><Link to="/re-set-password"> Reset Password?</Link></span>
                     <button className="btn btn-primary" type="button">Save changes</button>
                    </form>
                </div>
            
        
    </>)
}