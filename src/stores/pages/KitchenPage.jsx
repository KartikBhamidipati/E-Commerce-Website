import React from 'react'
import {kitchenData} from '../data/kitchen'
import NavBar from '../components/NavBar'
import Navigator from '../components/Navigator'
import { Link } from 'react-router-dom'

const KitchenPage = () => {
  return (
    <div className="product">
    <NavBar/>
    <Navigator/>
    <div className='proSection'>
        {
           kitchenData.map((item)=>{
                return(
                    <div className="proBox">
                        <Link to={`/kitchen/${item.id}`}>
                        <div className="proImg">
                            <img src={item.image}/>
                        </div>
                        <div className="proName">
                            <h3>{item.company+' '+item.model}</h3>
                        </div>
                        </Link>
                    </div>
                )
            })
        }
    </div>
    </div>
  )
}

export default KitchenPage