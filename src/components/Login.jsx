import React, { useActionState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAiQyYfZNuLTGo8HhcIw3qvAkHpFAPfbLE",
    authDomain: "e-commers-b539d.firebaseapp.com",
    projectId: "e-commers-b539d",
    storageBucket: "e-commers-b539d.appspot.com",
    messagingSenderId: "572649721174",
    appId: "1:572649721174:web:c6c9bf99d16675be3d9af7",
    measurementId: "G-BKRT20Y24E"
};


const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);


async function loginAction(previousState, formData) {
  const email = formData.get('email');
  const password = formData.get('password');

  if (!email || !password) {
    return { success: false, message: "Please enter both email and password.", role: null };
  }

  try {

    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

  
    const userDocRef = doc(db, "users", user.uid);
    const userDocSnap = await getDoc(userDocRef);

    if (userDocSnap.exists()) {
      const userData = userDocSnap.data();
      const userRole = userData.role || 'user'; 


      return { success: true, message: "Login successful! Redirecting...", role: userRole };
    } else {
     
      return { success: false, message: "User data not found.", role: null };
    }

  } catch (error) {
    let errorMessage = "Login failed. Please check your credentials.";
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
      errorMessage = "Invalid email or password.";
    }
    return { success: false, message: errorMessage, role: null };
  }
}


const Login = () => {
  const navigate = useNavigate();
  const [state, formAction, isPending] = useActionState(loginAction, { success: false, message: null, role: null });


  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
      
        if (state.role === 'admin') {
       
          window.location.href = 'https://a422789.github.io/AdminPanal/';
        } else {
         
          navigate('/' );
        }
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [state.success, state.role, navigate]);

  return (
    <div style={{
      background: '#f9e2fe',
      width: '100vw',
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <form action={formAction} style={{ background: 'white', height: 'auto', minHeight: '70vh', padding: '30px', display: "flex", flexDirection: 'column', justifyContent: 'space-around', margin: '20px', gap: '20px' }}>
        <h3>Login</h3>
        
        <input type="email" name="email" placeholder='Email address' required style={{ padding: '10px', border: '1px solid #ededed' }} />
        <input type="password" name="password" placeholder='Password' required style={{ padding: '10px', border: '1px solid #ededed' }} />
        
        <button 
          type="submit" 
          disabled={isPending}
          style={{
            padding: '10px',
            border: '1px solid #ededed',
            backgroundColor: isPending ? '#ccc' : '#d93633',
            color: 'white',
            cursor: isPending ? 'not-allowed' : 'pointer'
          }}
        >
          {isPending ? 'Logging In...' : 'Continue'}
        </button>

        {state.message && (
          <p style={{ color: state.success ? 'green' : 'red', textAlign: 'center' }}>
            {state.message}
          </p>
        )}

        <p>Create an account? <NavLink to={'/loginsinup/signup'} style={{ color: '#d93633', textDecoration: 'none', fontWeight: '700' }}>Click here</NavLink></p>
        <div>
          <input type='checkbox' required className='me-2' />
          <span>By continuing, I agree to the terms of use & privacy policy</span>
        </div>
      </form>
    </div>
  );
}

export default Login;
