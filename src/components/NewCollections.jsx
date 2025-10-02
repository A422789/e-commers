import React from 'react'
import Item from './Item'
import new_collections from '../assets/new_collections.js'
const NewCollections = () => {
  return (
    <div>
      <h1 style={{textAlign:'center'}}>NEW COLLECTIONS</h1>
       <hr 
  style={{
    width: '30%',      
    margin: '0 auto',  
    height: '3px',     
    backgroundColor: ' rgba(255, 151, 6, 1)', 
    border: 'none'    
  }} 
/>
<div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px',marginTop:'45px',alignItems:'center'}}>
          {new_collections.map((item)=>{
            return<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          })}
        </div>
    </div>
  )
}

export default NewCollections
