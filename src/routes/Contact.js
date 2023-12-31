import React, { useState } from 'react';
import "./Contact.css";




 const Contact = () => {
  
  const[allinputs,setallinputs]=useState(
    {text:"",
    password:"",
    email:"",
    }
    
    )


    const handlechange = (event) => {
   
      setallinputs(() => ({
        ...allinputs,
        [event.target.name]: event.target.value,
      }))}


const handleform = (e)=>{
e.preventDefault()
localStorage.setItem("formaaa", JSON.stringify(allinputs));
}

  return (
    <>
   <div className="light"></div>
   <div className="light-two"></div>
<div className="all-padge">
     

       
 <div className="signupSection">
   <div className="info">
  
    <i className="icon ion-ios-ionic-outline" aria-hidden="true"></i>
 
  </div> 
  <form onSubmit={handleform} action="#" method="POST" className="signupForm" name="signupform">
    
  <div className='all-icon'>

    <div id="house">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
            <h2 className="text-light"> Cairo - Egypt</h2>
          </div>
<br></br>

          <div id="phone">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-phone"
              viewBox="0 0 16 16"
            >
              <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z" />
              <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
            <h2 className="text-white"> +201029632345</h2>
          </div>
          <br></br>
          <div id="mail">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-envelope-paper"
              viewBox="0 0 16 16"
            >
              <path d="M4 0a2 2 0 0 0-2 2v1.133l-.941.502A2 2 0 0 0 0 5.4V14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V5.4a2 2 0 0 0-1.059-1.765L14 3.133V2a2 2 0 0 0-2-2H4Zm10 4.267.47.25A1 1 0 0 1 15 5.4v.817l-1 .6v-2.55Zm-1 3.15-3.75 2.25L8 8.917l-1.25.75L3 7.417V2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v5.417Zm-11-.6-1-.6V5.4a1 1 0 0 1 .53-.882L2 4.267v2.55Zm13 .566v5.734l-4.778-2.867L15 7.383Zm-.035 6.88A1 1 0 0 1 14 15H2a1 1 0 0 1-.965-.738L8 10.083l6.965 4.18ZM1 13.116V7.383l4.778 2.867L1 13.117Z" />
            </svg>
            <h2 className="text-white">
              mohammed.hassan.01029632345@gmail.com
            </h2>
          </div>
          <br></br>

<div id="linked-facebook">

          <a href="https://www.facebook.com/hamada.hassan.1460" rel='noreferrer' target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mohammed-hassan-8159a6263/"
            target="_blank"
            rel="noreferrer" 
          >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="40"
            fill="currentColor"
            className="bi bi-linkedin"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
          </svg>

          </a>
          </div>


    </div>
    <div className='all-input'>
    <h2>Sign Up</h2>
    <ul className="noBullet">
      <li>
        <label htmlFor="username"></label>
        <input onChange={handlechange} type="text" className="inputFields" id="username" name="text" placeholder="Username" value={allinputs.text} required/>
      </li>
      <li>
        <label htmlFor="password"></label>
        <input  onChange={handlechange} type="password" className="inputFields" id="password" name="password" placeholder="Password" value={allinputs.password}  required/>
      </li>
      <li>
        <label htmlFor="email"></label>
        <input  onChange={handlechange} type="email" className="inputFields" id="email" name="email" placeholder="Email" value={allinputs.email} required/>
      </li>
      <li id="center-btn">
        <input onClick={handleform} type="submit" id="join-btn" name="join" alt="Join" value="Join"/>
      </li>
    </ul>
    </div>




  </form>
</div> 

</div>
    </>
  )
}
export default Contact;