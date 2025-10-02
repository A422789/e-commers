
import './App.css'

import MyNavbar from './components/MyNavbar'

import LoginSinup from './Pages/LoginSinup';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import ShopContextProvider, { ShopContext } from "./Context/ShopContext"
import { NavLink, Route,Routes } from 'react-router-dom';
import men_banner from './assets/banner_mens.png'
import women_banner from './assets/banner_women.png'
import kid_banner from './assets/banner_kids.png'
import Login from './components/Login';
import Signup from './components/Signup';
import Product from './Pages/Product';
import CartContextProvider from './Context/CartContaxt';
import CartPage from './components/CartPage';

function App() {
  

  return (
    <>
    <ShopContextProvider>
      <CartContextProvider>
        
    <MyNavbar/>
    <Routes>
      <Route path='/shop' element={<Shop/>}/>
      <Route index element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category={'men'}/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category={'women'}/>}/>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category={'kid'}/>}/>
      <Route path='/cartpage' element={<CartPage/>}></Route>
        <Route path='/loginsinup' element={<LoginSinup/>}>
        <Route index element={<Login/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='signup' element={<Signup/>}></Route>
        </Route>
       <Route path='/product/:productId' element={<Product />} />
      </Routes>
      </CartContextProvider>
      </ShopContextProvider>
    </>

    
  )
}

export default App
