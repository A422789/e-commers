import React from 'react'
import Hero from '../components/Hero'
import data_product from '../assets/data'
import Item from '../components/Item'
import Offers from '../components/Offers'

import NewCollections from '../components/NewCollections'
import exclusive_image from '../assets/exclusive_image.png';
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
const Shop = () => {
  return (
    <>
      <Hero/>
      <div className='popular' style={{minHeight:'90px' ,width:'100vw'}}>
        <h1 style={{textAlign:'center'}}>POPULAR IN WOMEN</h1>
       <hr 
  style={{
    width: '30%',      
    margin: '0 auto',  
    height: '3px',     
    backgroundColor: ' rgba(255, 151, 6, 1)', 
    border: 'none'    
  }} 
/>
        <div className='shope_parent_render' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px',marginTop:'25px',alignItems:'center'}}>
          {data_product.map((item)=>{
            return<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
  <Offers image={exclusive_image} text1={'Exclustive'} text2={'offers For You'} textP={'ONLY ON BEST SELLERS PRODUCTS'} btnApper={true}/>
  <NewCollections/>
  
      <div 
  style={{ 
    background: 'linear-gradient(180deg, #fde1ff, #e1ffea22 60%)' ,
    width:'80%',
    textAlign:'center',
    minHeightheight:'40%',
    position:'relative',
    margin:'10%',
    paddingTop:'30px'
  }}
>
   <h1 className='mb-3'>Get Exclusive Offers On Your Email</h1>
  <p className='mb-3'> Subscribe to our newsletter and stay updated</p>
  <input type="email"placeholder='Your Email ID'style={{
    border:'1px solid #fde1ff',
    padding:'10px',
    width:'60%',
    borderRadius:'20px',

  }} /><button type='button' style={{
  
    padding:'10px',
    width:'35%',
    borderRadius:'20px',
    color:'white',
    background:'black',
    position:'relative',
    left:'-40px'

  }}>Subscribe</button></div> 
 
      </div>
      <Footer/>
      <Outlet/>
    </> 
  )
}

export default Shop
