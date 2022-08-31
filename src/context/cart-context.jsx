import React, { createContext, useReducer, useState } from "react";
import cartReducer from "./cart-reducer";

export const CartContext = createContext();

// we create an initial state to pass to useReducer hook
const initialState = { cartItems: [], itemCount: 0, totalCount: 0 };


const CartContextProvider = ({ children }) => {
    //console.log("Running ..")
    // dispatch will be available from the useReducer
    const [state, dispatch] = useReducer(cartReducer, initialState);
    //action taker
    const addProduct = (product) => dispatch({ type: "ADD_ITEM", payload: product })
    
    const contextValue = { ...state,addProduct };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}
export default CartContextProvider;