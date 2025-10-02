import { createContext} from "react"
import all_product from"../assets/all_product"
export  const ShopContext= createContext(null);
  const ShopContextValue={all_product}
export const ShopContextProvider=({children})=>{
   return(
    <>
     <ShopContext.Provider value={ShopContextValue}>
        {children}
     </ShopContext.Provider>
   
    </>
   )
}
export default ShopContextProvider;
