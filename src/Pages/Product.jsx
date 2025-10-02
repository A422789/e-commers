import  {  useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { Container, Row, Col} from 'react-bootstrap';
import Button from '../components/Button';
import star_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { createPortal } from 'react-dom';
import { CartContext } from '../Context/CartContaxt';

const Product = () => {
    const {all_product}=useContext(ShopContext)
    const ContextValue=useContext(CartContext)
    const {productId}=useParams()
     const product=all_product?.find((e)=>e.id===Number(productId))
    
     const AddProducttoCart=()=>ContextValue.AddtoCart(product)
    console.log(product.new_price)
 
      if (!product) {
    return (
      <Container className="text-center mt-5">
        <h3>The product is Loding...</h3>
      </Container>
    );
  }
  return (
    <>
     <Container>
        <Row className='mt-lg-5'>
            <Col lg={1} className=' order-lg-1 order-2 col-12 '>
                <div className='d-flex flex-lg-column  justify-content-around gap-4 w-lg-11 w-5 mt-lg-0 mt-4' style={{
                    gap:'5%',
                    width:'100px',
                }}>
                    <img src={product.image} alt="image" style={{height:'50%',width:'70%'}}  />
                    <img src={product.image} alt="image" style={{height:'50%',width:'70%'}} />
                    <img src={product.image} alt="image"  style={{height:'50%',width:'70%'}}/>
                    <img src={product.image} alt="image"style={{height:'50%',width:'70%'}} />
                </div>
            </Col>
            <Col lg={5} className=' order-lg-1 order-1 col-12'>
              <img src={product.image} alt="image" style={{height:'100%'}} />
            
            </Col>
             <Col  lg={5} style={{
                display:'flex',
                flexDirection:'column',
                gap:'5%'
             }} className=' order-lg-1 order-2 col-12'>
              <h3>{product.name}</h3>
              <div><img src={star_icon} alt="image" style={{height:'10%'}}/>
              <img src={star_icon} alt="image" style={{height:'10%'}}/>
              <img src={star_icon} alt="image" style={{height:'10%'}}/>
              <img src={star_icon} alt="image"style={{height:'10%'}}/>
              <img src={star_dull_icon} alt="image" style={{height:'10%'}}/>
              <span>(122)</span>
              <div ><del >{product.old_price}</del><span style={{marginLeft:'5%',color:'#ff532e',fontWeight:'700'}}>{product.new_price}</span></div>
              <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi natus blanditiis facere quod nisi magnam corrupti rem, vitae temporibus ad tempore non quibusdam. Assumenda libero, quia quas placeat ea distinctio?</div>
              <h5>Select Size</h5>
              <div className="size">
                <button style={{backgroundColor:'#fafafa',height:'50px',width:'50px',margin:'10px',border:'1px solid #e8e8e8ff'}}>S</button>
                <button style={{backgroundColor:'#fafafa',height:'50px',width:'50px',margin:'10px',border:'1px solid #e8e8e8ff'}}>M</button>
                <button style={{backgroundColor:'#fafafa',height:'50px',width:'50px',margin:'10px',border:'1px solid #e8e8e8ff'}}>L</button>
                <button style={{backgroundColor:'#fafafa',height:'50px',width:'50px',margin:'10px',border:'1px solid #e8e8e8ff'}}>XL</button>
                <button style={{backgroundColor:'#fafafa',height:'50px',width:'50px',margin:'10px',border:'1px solid #e8e8e8ff'}}>XLL</button>
                </div>
              </div>
               <Button text={'ADD TO CART'} color={'white'} background={'#f33f3f'}  width={'140px'} onclick={AddProducttoCart} />
              
              <p><b>Category:</b>Lorem ipsum dolor sit amet consectetu</p>
                            <p><b>Tags:</b>Lorem ipsum</p>
            </Col>
         
        </Row>
      
      </Container>
    
    </>
  )
}

export default Product
