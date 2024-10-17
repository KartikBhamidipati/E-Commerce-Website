import React from 'react'
import NavBar from '../components/NavBar'
import Navigator from '../components/Navigator'
import {watchData} from '../data/watch'
import { Link } from 'react-router-dom'

const Watchpage = () => {
  return (
    <div className="product">
    <NavBar/>
    <Navigator/>
    <div className='proSection'>
        {
           watchData.map((item)=>{
                return(
                    <div className="proBox">
                        <Link to={`/watch/${item.id}`}>
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

export default Watchpage