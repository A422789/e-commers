import { NavLink, useNavigate } from 'react-router-dom'; 
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/logo.png';
import cart from '../assets/cart_icon.png';
import './MyNavbar.css';
import Button from '../components/Button';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContaxt';

import { getAuth, signOut } from 'firebase/auth';

const MyNavbar = () => {
  
  const { count, isLoggedIn, authLoading } = useContext(CartContext);
  const navigate = useNavigate(); 

 
  const handleLogout = async () => {
    const auth = getAuth();
    try {
      await signOut(auth);
      console.log("User signed out successfully.");
      navigate('/loginsinup/login'); 
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand className='head'><img src={logo} alt="image" />SHOPPER<img /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav ms-lg-auto">
              <Nav.Link as={NavLink} to={'/shop'} className={({ isActive }) => isActive ? 'ActivLink active' : 'link'}>Shop</Nav.Link>
              <Nav.Link as={NavLink} to={'/men'} className={({ isActive }) => isActive ? 'ActivLink active' : 'link'}>Men</Nav.Link>
              <Nav.Link as={NavLink} to={'/women'} className={({ isActive }) => isActive ? 'ActivLink active' : 'link'}>Women</Nav.Link>
              <Nav.Link as={NavLink} to={'/kids'} className={({ isActive }) => isActive ? 'ActivLink active' : 'link'}>Kids</Nav.Link>
            </Nav>
            <div className='btnAndcart ms-lg-auto mt-3 mt-lg-0'>
              
         
              {!authLoading && ( 
                isLoggedIn ? (
                 
                  <Button 
                    text={'Logout'} 
                    onClick={handleLogout}
                    color={'rgba(132, 129, 129, 1)'} 
                    background={'#ffffffff'} 
                    rudios={'15px'} 
                    width={'140px'} 
                    className={'me-5'}
                  />
                ) : (
                 
                  <NavLink to={'/loginsinup/login'}>
                    <Button 
                      text={'Login'} 
                      color={'rgba(132, 129, 129, 1)'} 
                      background={'#ffffffff'} 
                      rudios={'15px'} 
                      width={'140px'} 
                      className={'me-5'}
                    />
                  </NavLink>
                )
              )}
              
              <Nav.Link as={NavLink} to={'/cartpage'}>
                <div style={{ position: 'relative' }}>
                  <img src={cart} alt="image" style={{ height: '35px' }} />
                  <div className='cart-counter'>{count}</div>
                </div>
              </Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
