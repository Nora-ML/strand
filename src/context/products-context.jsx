import React, { createContext, useState } from "react";
import SHOP_DATA from "../shop/index";

// create a product context and export 
// i'll use this context in any component that requires the product list
export const ProductsContext = createContext();


// create a products context PROVIDER
const ProductsContextProvider = ({ children }) => {
    // initialize the products using useState
    const [products] = useState(SHOP_DATA);
    
    return (
        <ProductsContext.Provider value={{ products }}>
            {children}
        </ProductsContext.Provider>
    )
}
export default ProductsContextProvider;