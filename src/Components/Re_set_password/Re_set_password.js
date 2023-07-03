import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Re_set_password.css"
export default function Re_set_password() {
    const navigate = useNavigate();
    const [home, setHome] = useState(true);
    const [data, setData] = useState({
        email:"",
      password: "",
      newPassword:"",
    });
    function submit(e) {
      e.preventDefault(e);
      const payload = data;
      console.log(payload)
      axios.post("http://localhost:3003/re-set-password", payload, {
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            navigate('/profile', { replace: true });
            // alert(res.data.msg);
          } else {
            alert("Error in API request or network")
          }
        })
        .catch((err) => {
          alert("Error in API request or network")
          console.log(err);
        });
    };                    
    const handle = (e) => {
      const newdata = { ...data };
      newdata[e.target.name] = e.target.value;
      setData(newdata);
      console.log(newdata);
    }
  return (
    <>
     <div className="card mb-4 bg-dark text-white">
      <form className="col-lg-4 mt-5 " onSubmit={(e) => submit(e)}>
      <h2 className="text" style={{textAlign:'center',color:'red'}}>Reset Password</h2>
      <div className="container">
          <label for="email" className="text" ><b>Email</b></label>
          <input type="text" placeholder="Enter email" name="email" onChange={(e) => handle(e)} required />
        </div>
        <div className="container">
          <label for="password" className="text" ><b>Old Password</b></label>
          <input type="password" placeholder="Enter old password" name="old_password" onChange={(e) => handle(e)}  required/>
        </div>
        <div className="container">
          <label for="password" className="text" ><b>New Password</b></label>
          <input type="password" placeholder="Enter new password" name="new_password" onChange={(e) => handle(e)}  required/>
        </div>
        <div className="container">
          <button type="submit" className=" btn btn-success">Submit</button>
        </div>
      </form>
      </div>
    </>
  );
}