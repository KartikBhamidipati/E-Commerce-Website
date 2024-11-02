import React from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../context/UserContext'
const NavBar = () => {
    const {cartItems} = useCart();
  return (
    <div className="navSection">
        <div className="title">
            <Link to='/' className='no-underline'>
                <h2>E-Mart</h2>
            </Link>
        </div>
        <div className="search">
            <input type="text" placeholder='Search...' />
        </div>
        <div className="user">
            <Link to='/cart' className='no-underline'>
            <div className="cart">
                <h5>Cart</h5>
                <span>{'  '+cartItems.length}</span>
            </div>
            </Link>
            <div className="user-detail">
                Login/Register
            </div>
        </div>
    </div>
  )
}

export default NavBar