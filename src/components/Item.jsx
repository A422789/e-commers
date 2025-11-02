import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'
const Item = ({image,name,new_price,old_price,id}) => {
   
  return (
   
    <div className='item'style={{minWidth:'20%'}}>
       <Link to={`/product/${id}`}><img  src={image} alt="image" style={{width:'100%',height:'100%'}}  /></Link>
      <p>{name}</p>
      <div className='item-prices'>
        <p>{new_price}</p>
        <p><del>{old_price}</del></p>
      </div>
    </div>
  )
}

export default Item
