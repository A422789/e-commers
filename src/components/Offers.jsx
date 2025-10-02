
import { Container, Row, Col } from 'react-bootstrap';
import Button from '../components/Button';
const Offers = ({image,text1,text2,textP,text3,text4,btnApper}) => {
  return (
 <div 
  style={{ 
    background: 'linear-gradient(180deg, #fde1ff, #e1ffea22 60%)' ,
    width:'80%',
    textAlign:'center',
    height:'30%',
    position:'relative',
    margin:'10%'
  }}
>
       <Container>
        <Row>
            <Col lg={6} className='mt-lg-6  mt-5'>
             
            
             <h1>{text1}</h1>
             <h1>{text2}<br/>{text3}<br/>{text4}</h1>
             <p>{textP}</p>
              <Button text={'cheack Now'} color={'rgba(255, 255, 255, 1)'} background={'#eb423f'} rudios={'25px'} width={'150px'} btnApper={btnApper} />
            </Col>
             <Col lg={6} className=' order-1' >
              <img style={{height:'60%'}} src={image} alt="image"/>
            
            
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Offers
