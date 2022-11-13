import { useState } from "react";
import React from 'react';

function Login() {
    const [ema, setEmail] = useState("");
    const [pass, setPass] = useState("");
   
    function submit(e){
    e.preventDefault();
    if(ema==="sbps@gmail.com" && pass==="sbps_1234#") {
        window.open("https://sbps--main.herokuapp.com/", "_self");
    }
    else alert("Wrong Credentials ")
    }
    return (
        <>
         <h1 style={{margin:"20px 0",textAlign:"center"}}>Login to access the portal</h1>
        <div className="container my-5 p-4">
            
            
            <div className='p-4 text-primary font-weight-bold' style={{boxShadow: "rgba(3, 102, 214, 0.3) 0px 0px 0px 3px"}}>

            <form >
            <div className="form-group">
                <label htmlFor="">Login Id</label>
                <input value={ema} onChange={(e)=>{setEmail(e.target.value)}} type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label htmlFor="">Password</label>
                <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="password" class="form-control" id="exampleFormControlInput1" placeholder="*************"  />
            </div>
            <div style={{textAlign:"end"}}>
            <button onClick={submit} className='btn btn-primary mt-2' style={{textAlign:"center"}}> Submit </button>
            </div>
          </form>
          </div>
        </div>
       
        </>
    );
}

export default Login;