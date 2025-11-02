
import './Hero.css'
import { Container, Row, Col } from 'react-bootstrap';
import hand_icon from '../assets/hand_icon.png';
import arrow from '../assets/arrow.png';
import hero_image from '../assets/hero_image.png';
import Button from '../components/Button';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContaxt';

const Hero = () => {
  const CotextValue=useContext(CartContext);

  return (
    <div className='hero'>
      <Container>
        <Row>
            <Col lg={6} className='mt-lg-6 order-lg-1 order-2'>
            {!CotextValue.isLoggedIn? <p>NEW ARRIVALS ONLY</p>:''}
             <h1  >new <img src={hand_icon} alt="image"/></h1> 
             <h1>collectins</h1>
             <h1>for everyone</h1>
              <Button text={'Latest Collection'} color={'rgba(255, 255, 255, 1)'} background={'#eb423f'} rudios={'25px'} width={'200px'} inner={<img src={arrow} style={{height:'10px'}}></img>}  />
            </Col>
             <Col lg={6} className='order-lg-2 order-1' >
              <img className='hero_img' src={hero_image} alt="image"/>
            
            
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
