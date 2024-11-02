import React from 'react'
import { computerData } from '../data/computers'
import { Link } from 'react-router-dom'


const computers = ()=>{
    return(
        <div className="itemBox">
            <h2>Computers</h2>
            <div className="itemSection">
                {
                    computerData.slice(0,5).map((item)=>{
                        return(
                            <Link to={`/computer/${item.id}`}>
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

export default computers;