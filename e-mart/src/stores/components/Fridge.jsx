import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from 'react-router-dom'

const Fridge = () => {
  return (
    <div className="itemBox">
        <h2>Fridges</h2>
        <div className="itemSection">
            {
                fridgeData.slice(0,5).map((item)=>{
                    return(
                        <Link to={`/fridge/${item.id}`}>
                    <div className="itemImg">
                      <img src={item.image} />
                    </div>
                  </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Fridge