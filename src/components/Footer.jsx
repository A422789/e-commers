
import instagram_icon from '../Assets/instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'

import './Footer.css'

import logo from '../assets/logo.png';
import Navbar from 'react-bootstrap/Navbar';
const Footer = () => {
  return (
    <div className='footer'>
     <Navbar.Brand  className='head'><img src={logo} alt="image"/>SHOPPER<img/></Navbar.Brand>
       <div className='ul'>
        <p><a>Company</a></p>
         <p><a>Prodect</a></p>
          <p><a>Offices</a></p>
           <p><a>About</a></p>
            <p><a>Contact</a></p>
       </div>
       <div className='ul icon'>
        <p><a><img src={instagram_icon} alt="image" /></a></p>
         <p><img src={pintester_icon} alt="image" /></p>
          <p><img src={whatsapp_icon} alt="image" /></p>
       </div>
  
       <p>Copyright @ 2023 - All Right Reserved.</p>
    </div>
  )
}

export default Footer
