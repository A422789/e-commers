import React, { use, useContext, useState } from 'react'
import { CartContext } from '../Context/CartContaxt'
import Footer from "../components/Footer";
import CartItem from '../components/CartItem';

const CartPage = () => {
  
    const ContextValue=useContext(CartContext)
    const cart=ContextValue.cart
    let total=0;
    let G_Total=0;
 
    
  return (
    <div>
      <h1 style={{textAlign:'center',marginTop:'20px'}}>{cart[0]?null:'Cart is empty'}</h1>
       <div>
       <table style={{width:'80%',marginLeft:'10%',marginTop:'5%'}}>
        <thead style={{borderBottom:'2px solid #d5d5d5'}}>
            <tr>
              <th className='p-4'>Products</th>
              <th className='p-4'>Title</th>
              <th className='p-4'>Price</th>
              <th className='p-4'>Qunantity</th>
              <th className='p-4'>Total</th>
              <th className='p-4'>Remove</th>
            </tr>
        </thead>
        <tbody style={{borderBottom:'2px solid #d5d5d5',padding:'10px'}} >
         {cart.map((item)=>{
          total=item.new_price*item.quantity;
          G_Total+=total;
          return <CartItem key={item.id} id={item.id} name={item.name} image={item.image} price={item.new_price} quantity={item.quantity} total={total}  />
         })}
            
           
          
           
        </tbody>
       </table>
       <div className='d-flex'>
       <div style={{width:'30%',margin:'10%'}}>
        <h2>Cart Totals</h2>
        <div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid #d5d5d5'}}><p>Subtotal</p><span>${G_Total}</span></div>
        <div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid #d5d5d5'}}><p>Shopping Fee</p><span>free</span></div>
        <div style={{display:'flex',justifyContent:'space-between',borderBottom:'2px solid #d5d5d5'}}><b>Total</b><b>${G_Total}</b></div>
       </div>
       <form style={{width:'30%',margin:'10%'}}> 
          <p>if you have a promo code,Enter it here</p>
           <input required type="email"placeholder='Your promo code'style={{
    border:'1px solid #fde1ff',
    padding:'10px',
    width:'100%',
  }} /><button type='button' style={{
    padding:'10px',
    width:'100%',
    color:'white',
    background:'black',
    marginTop:'15px'
    

  }}>Submit</button>
       </form>
       </div>
       <Footer/>
    </div>
    
    </div>
  )
}

export default CartPage
