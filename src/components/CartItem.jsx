import React from 'react'
import RemoveIcon from '../assets/trash_2312162.png'
import { CartContext } from '../Context/CartContaxt';
import { useContext } from 'react'
const CartItem = ({id,name,image,price,quantity,total}) => {
  
const ContextValue=useContext(CartContext)

    const removeFromCart=()=>ContextValue.removeFromCart(id)
  return (
  <tr style={{borderBottom:'1px solid #d5d5d5'}}>
          <td className='p-4'><img src={image} alt="image"/></td>
          <td className='p-4' style={{height:'40px'}}>{name}</td>
          <td className='p-4'>${price}</td>
          <td className='p-4'><div>{quantity}</div></td>
          <td className='p-4'>${total}</td>
          <td className='p-4'><img src={RemoveIcon} alt="image" style={{height:'20px'}} className='btn-remove-item-cart' onClick={removeFromCart}/></td>
        </tr>
  )
}

export default CartItem
