import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import {v4 as uuidv4 } from 'uuid';


const userContext = createContext()

export const CartProvider = ({children})=>
{
    const [cartItems,setCartItems] = useState([]);

    const addToCart = (item)=>{
        const newItem = {
            num : uuidv4(),
            ...item,
        }
        setCartItems([...cartItems, newItem]);
    }

    const removeFromCart = (item)=>{
        setCartItems(cartItems.filter((apple)=>apple.num!==item.num))
    }

    return(
        <userContext.Provider value={{cartItems, addToCart, removeFromCart}}>
            {children}
        </userContext.Provider>
    )
}

export const useCart = ()=>{
    return useContext(userContext);
}
