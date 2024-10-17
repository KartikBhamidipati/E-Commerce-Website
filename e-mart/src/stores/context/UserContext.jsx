import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";


const userContext = createContext()

export const CartProvider = ({children})=>
{
    const [cartItems,setCartItems] = useState([]);

    const addToCart = (item)=>{
        setCartItems([...cartItems, item]);
    }

    const removeFromCart = (item)=>{
        setCartItems(cartItems.filter((apple)=>apple!==item))
    }

    return(
        <userContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </userContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(userContext)
}
