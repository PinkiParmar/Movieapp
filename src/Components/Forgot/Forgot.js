import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Forgot.css"
export default function Forgot() {
    const navigate = useNavigate();
    const [home, setHome] = useState(true);
    const [data, setData] = useState({
      email: "",
    });
    function submit(e) {
      e.preventDefault(e);
      const payload = data;
      console.log(payload)
      axios.post("http://localhost:3003/forget-password", payload, {
        headers: {
  
          "Content-type": "application/json",
        },
      })
        .then((res) => {
            console.log(res)
          console.log(res.data);
          if (res.data.code === 200) {
            localStorage.setItem('token', JSON.stringify(res.data.token));
            navigate('/set-new-password', { replace: true });
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
      <form className="col-lg-4 mt-5 bg-dark text-white " onSubmit={(e) => submit(e)}>
      <h2 className="text" style={{textAlign:'center',color:'red'}}>Forgot Password</h2>
        <div className="container">
          <label for="email" className="text" onChange={(e) => handle(e)} required><b>Email:</b></label>
          <input type="text" placeholder="Enter Email" name="email"  required />
        </div>
        <div className="container" style={{ backgroundColor: '#f1f1f1' }}>
          <button type="submit" className="cancelbtn">Submit</button>
        </div>
      </form>
    </>
  );
}