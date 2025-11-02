import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import Dropdown from 'react-bootstrap/Dropdown';
import Item from "../components/Item";
import Footer from "../components/Footer";

const shopCategory = ({category,banner}) => {
  const state=useContext(ShopContext)


  return (
    <div className="shopCategory" >
      <img src={banner} alt="image" style={{
        width:'80%',
        height:'50%',
        marginLeft:'10%'
      }} />
      <div style={{display:'flex',width:'80%', marginLeft:'10%',justifyContent:'space-between',marginTop:'15px'}}>
        <p><span>Shwing 1-12</span>out of 36 products</p>
        <div className="dropDown">
           <Dropdown>
      <Dropdown.Toggle variant="white" id="dropdown-basic" style={{border:'1px solid',borderRadius:'30px',paddingLeft:'5px',paddingTop:'0px',textAlign:'center'}}>
        Sort by
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item >Action</Dropdown.Item>
        <Dropdown.Item >Another action</Dropdown.Item>
        <Dropdown.Item >Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        </div>
      </div>
      <div className='shope_parent_render' style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px',marginTop:'25px',alignItems:'center'}}> 

         {state.loading&&<h1>Loadind...</h1>}
         {state.error&&!state.loading&&<h1>Error:{state.error}</h1>}
         {!state.loading&&state.data&& (
          state.data.map((item)=>{
          if(category===item.category){
            return<Item key={item.id} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
          }else{return null}
         })
         )}
         
      </div>
      <Footer/>
    </div>
  )
}

export default shopCategory
