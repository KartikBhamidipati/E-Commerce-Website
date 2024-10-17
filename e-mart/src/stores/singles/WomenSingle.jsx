import React from 'react'
import { useParams } from 'react-router-dom'
import { womanData } from '../data/woman'
import { useCart } from '../context/UserContext'
import NavBar from '../components/NavBar'
import Navigator from '../components/Navigator'

const WomenSingle = () => {
    const {id} = useParams()
    const product = womanData.find((item)=>item.id === id)
  
    const {cartItems,addToCart} = useCart()
  
    return (
      <>
      <NavBar/>
      <Navigator/>
      <div className="ind-page">
        <div className="ind-img">
          <img src={product.image}/>
        </div>
        <div className="ind-details">
          <div className="ind-model">
           <h3>{product.model}</h3>
          </div>
          <div className="ind-price">
            <h4>{product.price}</h4>
          </div>
          <div className="ind-desc">
            <p>{product.description}</p>
          </div>
          <div className="ind-cart">
            <button onClick={()=>addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      </div>
      </>
    )
}

export default WomenSingle