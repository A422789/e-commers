import React from 'react'
import { NavLink } from 'react-router-dom';
const Signup = () => {
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
      <h3>Sign Up</h3>
        <input type="text" placeholder='Your name' required style={{padding:'10px',border:'1px solid #ededed'}}/>
      <input type="email"placeholder='Email address' required  style={{padding:'10px',border:'1px solid #ededed'}} />
      <input type="password" placeholder='Password'required   style={{padding:'10px',border:'1px solid #ededed'}}/>
      <button  style={{padding:'10px',border:'1px solid #ededed',backgroundColor:'#d93633',color:'white'}}>Continue</button>
      <p>Already have an account? <NavLink to={'/loginsinup/login'} style={{color:'#d93633',textDecoration:'none',fontWeight:'700'}}>Login here</NavLink></p>
      <div>        <input type='checkbox'required className='me-2'/><span>By continuing,i agree to the terms of use & privacy policy</span>    
</div> 
     </form>


    </div>
    
  )
}

export default Signup
