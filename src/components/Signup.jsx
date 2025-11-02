import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useActionState, useEffect } from 'react'; // 1. استيراد Hooks الصحيحة

// استيراد أدوات Firebase
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

// ====================================================================
// دالة الأكشن (تبقى كما هي)
// ====================================================================
async function signupAction(previousState, formData) {
  const name = formData.get('name');
  const email = formData.get('email');
  const password = formData.get('password');

  if (!name || !email || !password) {
    return { success: false, message: "Please fill in all fields." };
  }
  if (password.length < 6) {
    return { success: false, message: "Password must be at least 6 characters long." };
  }

  try {
    const firebaseConfig = {
      apiKey: "AIzaSyAiQyYfZNuLTGo8HhcIw3qvAkHpFAPfbLE",
      authDomain: "e-commers-b539d.firebaseapp.com",
      projectId: "e-commers-b539d",
      storageBucket: "e-commers-b539d.appspot.com",
      messagingSenderId: "572649721174",
      appId: "1:572649721174:web:c6c9bf99d16675be3d9af7",
      measurementId: "G-BKRT20Y24E"
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const db = getFirestore(app);

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      name: name,
      email: email,
      role: 'user',
      cart: {}
    });

    return { success: true, message: "Account created successfully! Redirecting to login..." };

  } catch (error) {
    let errorMessage = "Failed to create account. Please try again.";
    if (error.code === 'auth/email-already-in-use') {
      errorMessage = "This email address is already in use.";
    }
    return { success: false, message: errorMessage };
  }
}

// ====================================================================
// المكون الرئيسي
// ====================================================================
const Signup = () => {
  const navigate = useNavigate();

  // 2. استخدام useActionState بالطريقة الصحيحة مع القيمة الثالثة
  const [state, formAction, isPending] = useActionState(signupAction, { success: false, message: null });

  useEffect(() => {
    if (state.success) {
      const timer = setTimeout(() => {
        navigate('/loginsinup/login');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [state.success, navigate]);

  return (
    <div style={{
      background: '#f9e2fe',
      width: '100vw',
      minHeight: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      {/* 3. استخدام 'action' في الفورم */}
      <form action={formAction} style={{ background: 'white', height: 'auto', minHeight: '70vh', padding: '30px', display: "flex", flexDirection: 'column', justifyContent: 'space-around', margin: '20px', gap: '20px' }}>
        <h3>Sign Up</h3>
        
        <input type="text" name="name" placeholder='Your name' required style={{ padding: '10px', border: '1px solid #ededed' }} />
        <input type="email" name="email" placeholder='Email address' required style={{ padding: '10px', border: '1px solid #ededed' }} />
        <input type="password" name="password" placeholder='Password' required style={{ padding: '10px', border: '1px solid #ededed' }} />
        
        {/* 4. الزر الذي يتحكم فيه 'isPending' مباشرة */}
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
          {isPending ? 'Creating Account...' : 'Continue'}
        </button>

        {state.message && (
          <p style={{ color: state.success ? 'green' : 'red', textAlign: 'center' }}>
            {state.message}
          </p>
        )}

        <p>Already have an account? <NavLink to={'/loginsinup/login'} style={{ color: '#d93633', textDecoration: 'none', fontWeight: '700' }}>Login here</NavLink></p>
        <div>
          <input type='checkbox' required className='me-2' />
          <span>By continuing, I agree to the terms of use & privacy policy</span>
        </div>
      </form>
    </div>
  );
}

export default Signup;
