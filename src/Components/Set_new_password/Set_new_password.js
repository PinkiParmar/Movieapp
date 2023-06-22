import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Set_new_password.css"
export default function Set_new_password() {
    const navigate = useNavigate();
    const [home, setHome] = useState(true);
    const [data, setData] = useState({
        token:"",
      password: "",
    });
    function submit(e) {
      e.preventDefault(e);
      const payload = data;
      console.log(payload)
      axios.post("http://localhost:3003/set-new-password", payload, {
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.code === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            navigate('/', { replace: true });
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
          <label for="token" className="text" onChange={(e) => handle(e)} required><b>token</b></label>
          <input type="text" placeholder="Enter token" name="token"  required />
        </div>
        <div className="container">
          <label for="password" className="text" onChange={(e) => handle(e)} required><b>Password</b></label>
          <input type="text" placeholder="Enter new password" name="password"  required />
        </div>
        <div className="container">
          <label for="password" className="text"><b>Cpassword</b></label>
          <input type="text" placeholder="confirm password" name="email"  required />
        </div>
        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="submit" className="cancelbtn">Submit</button>
        </div>
      </form>
    </>
  );
}