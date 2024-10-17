import React from 'react'
import { useCart } from '../context/UserContext'
const UserCart = () => {
    const {cartItems, removeFromCart} = useCart()
  return (
    <>
    <div className="itemBox">
        {
            (cartItems.length >0)?
                (
                    cartItems.map((item)=>{
                    return(
                        <div className="cartItem">
                            <div className="cartImg">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="cartDetails">
                                <div className="cartCompany">
                                    <h3>{item.company}</h3>
                                </div>
                                <div className="cartModel">
                                    <h4>{(item.product==="Book")?item.title:item.model}</h4>
                                </div>
                                <div className="cartPrice">
                                    <h4>{item.price}</h4>
                                </div>
                                <div className="remove">
                                    <button onClick={()=>removeFromCart(item)}>Remove</button>
                                </div>
                            </div>
                        </div>
                    )
                    })
                ): <h3 className='center'>Your Cart is Empty</h3>
        }
    </div>
    </>
  )
}

export default UserCart