import { createContext, useState } from "react";
import useLocalStorage from "../components/CustomHooks/useLocalStorage";


export const CartContext=createContext(null)

export const CartContextProvider=({children})=>{

    const [cart,setCart]= useLocalStorage('cart',[])
  console.log(cart)
const AddtoCart=(product)=>{
  const reslut=cart.find((e)=>e.id==product.id)
   if(reslut){
   const updatedCart= cart.map((item)=>item.id==product.id?{...item,
         quantity:item.quantity+1}:item)
         setCart(updatedCart)
   }else{return setCart( (prev) => [...prev, {...product,quantity:1}])}
}

 const removeFromCart=(ID)=>{
    const productToRemove = cart.find((item) => item.id === ID);
    if (!productToRemove) {
        return; 
    }
      if (Number(productToRemove.quantity) > 1){
        const updatedCart=cart.map((item)=>Number(item.id)==Number(ID)?{...item,quantity: Number(item.quantity)-1}:item)
        setCart(updatedCart)
     }else{
        const newCart=cart.filter((e)=>e.id!=ID)
        setCart(newCart)
     }
  
 }
let count=0
 for(let i=0;i<cart.length;i++){
     count+=(cart[i].quantity)
 
 }


 
const ContextValue={cart,AddtoCart,removeFromCart,count}
    return(<CartContext.Provider value={ContextValue}>
        {children}
    </CartContext.Provider>
    )
}
export default CartContextProvider;
