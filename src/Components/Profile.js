import React,{Link} from 'react';
import './Profile.css';
export default function Profile(){
    return(
        <>
        

  <div className="card">
  <img src="img_avtar2.png" alt="John" style={{width:'100%'}}/>
  <h1>John Doe</h1>
  <p className="title">My profile</p>
  <div className="col-md-8">
     <div className="card mb-3">
     <div className="col-sm-3">
    <h6 className="profile">First Name</h6>
     </div>
    <div className="profile">
    Kenneth 
    </div>
    </div>
    </div>
    <div className="col-md-8">
     <div className="card mb-3">
     <div className="col-sm-3">
    <h6 className="profile">Last Name</h6>
     </div>
    <div className="profile">
     Valdez
    </div>
    </div>
    </div>
    </div>
                  
        </>
    );
}