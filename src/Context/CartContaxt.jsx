import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../components/CustomHooks/useLocalStorage";


import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore, doc, onSnapshot, updateDoc, deleteField } from "firebase/firestore"; 

export const CartContext = createContext(null);

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

export const CartContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setAuthLoading(false);
      console.log("Auth state changed. Current user:", user ? user.uid : null);
    });
    return () => unsubscribe();
  }, []);


  const [localCart, setLocalCart] = useLocalStorage('cart', []);
  const [firestoreCart, setFirestoreCart] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setCartLoading(true);
      const userDocRef = doc(db, "users", currentUser.uid);
      const unsubscribe = onSnapshot(userDocRef, (docSnap) => {
        if (docSnap.exists() && docSnap.data().cart) {
          const cartObject = docSnap.data().cart;
          const cartArray = Object.keys(cartObject).map(key => ({
            id: key,
            ...cartObject[key]
          }));
          setFirestoreCart(cartArray);
        } else {
          setFirestoreCart([]);
        }
        setCartLoading(false);
      });
      return () => unsubscribe();
    } else {
      setFirestoreCart([]);
    }
  }, [currentUser]);

  useEffect(() => {
    const mergeCarts = async () => {
      if (currentUser && localCart.length > 0 && !authLoading) {
        console.log("Attempting to merge carts...");
        setCartLoading(true);
        const userDocRef = doc(db, "users", currentUser.uid);
  
        const { getDoc } = await import("firebase/firestore");
        const docSnap = await getDoc(userDocRef);
        const currentFirestoreCart = docSnap.exists() ? docSnap.data().cart || {} : {};

        const mergedCart = { ...currentFirestoreCart };

        localCart.forEach(localItem => {
          if (mergedCart[localItem.id]) {
            mergedCart[localItem.id].quantity += localItem.quantity;
          } else {
            mergedCart[localItem.id] = { 
              name: localItem.name, 
              image: localItem.image, 
              new_price: localItem.new_price, 
              quantity: localItem.quantity 
            };
          }
        });

        await updateDoc(userDocRef, { cart: mergedCart });
        setLocalCart([]); 
        setCartLoading(false);
        console.log("Carts merged successfully.");
      }
    };
    mergeCarts();
  }, [currentUser, authLoading]); 
  
  const AddtoCart = async (product) => {
    if (!product || !product.id) return; 
    setCartLoading(true);

    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      const currentItem = firestoreCart.find(item => item.id === product.id);
      const newQuantity = (currentItem?.quantity || 0) + 1;
      await updateDoc(userDocRef, {
        [`cart.${product.id}`]: {
          name: product.name,
          image: product.image,
          new_price: product.new_price,
          quantity: newQuantity
        }
      });
    } else {
      const existingProduct = localCart.find((e) => e.id === product.id);
      if (existingProduct) {
        const updatedCart = localCart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
        setLocalCart(updatedCart);
      } else {
        setLocalCart((prev) => [...prev, { ...product, quantity: 1 }]);
      }
    }
    setCartLoading(false);
  };

  const removeFromCart = async (productId) => {
    if (!productId) return;
    setCartLoading(true);

    if (currentUser) {
      const userDocRef = doc(db, "users", currentUser.uid);
      const currentItem = firestoreCart.find(item => item.id === productId);
      if (currentItem && currentItem.quantity > 1) {
        await updateDoc(userDocRef, {
          [`cart.${productId}.quantity`]: currentItem.quantity - 1
        });
      } else {
        await updateDoc(userDocRef, {
          [`cart.${productId}`]: deleteField()
        });
      }
    } else {
      const productToRemove = localCart.find((item) => item.id === productId);
      if (productToRemove && productToRemove.quantity > 1) {
        const updatedCart = localCart.map((item) => item.id === productId ? { ...item, quantity: item.quantity - 1 } : item);
        setLocalCart(updatedCart);
      } else {
        const newCart = localCart.filter((e) => e.id !== productId);
        setLocalCart(newCart);
      }
    }
    setCartLoading(false);
  };

  const cart = currentUser ? firestoreCart : localCart;
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  const isLoggedIn = !!currentUser;

  const ContextValue = {
    cart,
    AddtoCart,
    removeFromCart,
    count,
    currentUser,
    authLoading,
    isLoggedIn,
    cartLoading
  };

  return (
    <CartContext.Provider value={ContextValue}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
