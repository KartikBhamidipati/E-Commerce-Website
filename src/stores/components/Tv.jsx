import React from 'react'
import {tvData} from '../data/tv'
import { Link } from 'react-router-dom'
const Tv = () => {
  return (
    <div className="itemBox">
        <h2>Tvs</h2>
        <div className="itemSection">
            {
                tvData.slice(0,5).map((item)=>{
                    return (
                        <Link to={`/tv/${item.id}`}>
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

export default Tv