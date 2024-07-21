/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'

import QRCode from "react-qr-code";
import './App.css'


function App() {
  const[input,setInput]=useState({"name":"","amount":"","cardNumber":""})
  const[url,setUrl]=useState("")
  let[show,setShow]=useState(true)
 


  function handler(e){
    setInput({...input,[e.target.name]:e.target.value})
  

  }

 async function submiited(e){
    e.preventDefault()
    
    let response= await fetch("http://api.ikaanshgroup.com/recharge",{

    method:"POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(input),
      referrerPolicy: "unsafe-url"
    })


    let result=await response.text();
    setUrl(result)
    setShow(false)
   
  }
  return (
    <>
  
  {show?<div className='login-box'>
      <form onSubmit={submiited}>
        <h2>
          <img src='./imges/payment.jpg' />
        </h2>
        <div className='input-box'>
        
          <input type='text' placeholder='username' id='name' name='name' value={input.name} required onChange={handler}/>
         
        </div>
        <div className='input-box'>
        
          <input type='number' placeholder='amount' id='amount' name='amount' value={input.amount} required onChange={handler}/>
        
        </div>
        <div className='input-box'>
          
          <input type='number' placeholder='cad-number' id='CardNumber' name='cardNumber' value={input.cardNumber} required onChange={handler}/>
        
        </div>
        <button type='submit'>submit</button>
      </form>

    
    </div>:
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <QRCode value={url}></QRCode>}


    </>
    
  )
}

export default App
