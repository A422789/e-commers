import React, { useContext, useEffect } from 'react'
import Item from './Item'

import useApi from '../CustomHooks/useAPI.jsx'
import { ShopContext } from '../Context/ShopContext.jsx'
const NewCollections = () => {
  const state=useContext(ShopContext)
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
             {state.loading&&<h1>Loadind...</h1>}
         {state.error&&!state.loading&&<h1>Error:{state.error}</h1>}
         {!state.loading&&state.new_collections&& (
          state.new_collections.map((item)=>{
                 return<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
         })
         )}
        </div>
    </div>
  )
}

export default NewCollections
