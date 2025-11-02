import { createContext, useEffect, useState } from "react";

import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({ children }) => {

  const [data, setData] = useState([]); 
  

  const [new_collections, setNewCollections] = useState([]);
  const [popular_in_women, setPopularInWomen] = useState([]);


  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
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
    const db = getFirestore(app);

    const fetchAllData = async () => {
      try {
        setLoading(true);
        setError(null);

     
        const fetchCollection = async (collectionName) => {
          const querySnapshot = await getDocs(collection(db, collectionName));
          return querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        };

  
        const [productsData, newCollectionsData, popularWomenData] = await Promise.all([
          fetchCollection("products"),
          fetchCollection("new_collections"),
          fetchCollection("popular_in_women")
        ]);

      
        setData(productsData);
        setNewCollections(newCollectionsData);
        setPopularInWomen(popularWomenData);


        console.log("✅ Successfully fetched 'products':", productsData);
        console.log("✅ Successfully fetched 'new_collections':", newCollectionsData);
        console.log("✅ Successfully fetched 'popular_in_women':", popularWomenData);

      } catch (err) {
        console.error("❌ Error fetching data from Firestore:", err);
        setError("Failed to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchAllData();
  }, []);


  const ShopContextValue = { 
    data, 
    new_collections, 
    popular_in_women, 
    loading, 
    error 
  };

  return (
    <ShopContext.Provider value={ShopContextValue}>
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
