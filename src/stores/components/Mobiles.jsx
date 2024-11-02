import React from 'react'
import { mobileData } from '../data/mobiles'
import { Link } from 'react-router-dom'
const Mobiles = () => {
  return (
    <div className="itemBox">
      <h2>Mobiles</h2>
      <div className='itemSection'>
          {
            mobileData.slice(0,5).map((item)=>{
                return(
                      <Link to={`/mobile/${item.id}`}>
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

export default Mobiles