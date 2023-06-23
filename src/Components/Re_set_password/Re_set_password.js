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
      <form className="col-lg-4 mt-5 " onSubmit={(e) => submit(e)}>
      <h2 className="text" style={{textAlign:'center',color:'red'}}>Set New Password</h2>
      <div className="container">
          <label for="email" className="text" onChange={(e) => handle(e)} required><b>Email</b></label>
          <input type="text" className="text" placeholder="Enter email" name="email"  required />
        </div>
        <div className="container">
          <label for="password" className="text" onChange={(e) => handle(e)} required><b>Old Password</b></label>
          <input type="text" className="text" placeholder="Enter old password" name="password"  required />
        </div>
        <div className="container">
          <label for="password" className="text" onChange={(e) => handle(e)} required><b>New Password</b></label>
          <input type="text" className="text" placeholder="Enter new password" name="new-password"  required />
        </div>
       
        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="submit" className="cancelbtn">Submit</button>
        </div>
      </form>
    </>
  );
}