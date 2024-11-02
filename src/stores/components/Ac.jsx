import React from 'react'
import { acData } from '../data/ac'
import { Link } from 'react-router-dom'

const Ac = () => {
  return (
    <div className="itemBox">
        <h2>Acs</h2>    
        <div className="itemSection">
            {
                acData.slice(0,5).map((item)=>{
                    return(
                        <Link to={`/ac/${item.id}`}>
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

export default Ac