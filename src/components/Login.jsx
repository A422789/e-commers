import React from 'react'
import { NavLink } from 'react-router-dom';
const Login = () => {
  return (
    <div style={{
          background:'#f9e2fe',
          width:'100vw',
          minHeight:'90vh',
          display:'flex',
          justifyContent:'center',
          alignItems:'center'
        }}>
         <form action="" style={{background:'white',height:'70vh',padding:'30px',display:"flex",flexDirection:'column',justifyContent:'space-around',margin:'20px'}}>
          <h3>Login </h3>
          <input type="email"placeholder='Email address' required  style={{padding:'10px',border:'1px solid #ededed'}} />
          <input type="password" placeholder='Password'required   style={{padding:'10px',border:'1px solid #ededed'}}/>
          <button  style={{padding:'10px',border:'1px solid #ededed',backgroundColor:'#d93633',color:'white'}}>Continue</button>
          <p>Creat an account? <NavLink to={'/loginsinup/signup'} style={{color:'#d93633',textDecoration:'none',fontWeight:'700'}}>Click here</NavLink></p>
          <div>        <input type='checkbox'required className='me-2'/><span>By continuing,i agree to the terms of use & privacy policy</span>    
    </div> 
         </form>
    
    
        </div>
  )
}

export default Login
