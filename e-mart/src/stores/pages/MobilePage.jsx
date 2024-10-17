import React from 'react'
import { mobileData } from '../data/mobiles'
import NavBar from '../components/NavBar'
import Navigator from '../components/Navigator'
import { Link } from 'react-router-dom'
const MobilePage = () => {
  return (
    <div className="product">
    <NavBar/>
    <Navigator/>
    <div className='proSection'>
        {
           mobileData.map((item)=>{
                return(
                    <div className="proBox">
                        <Link to={`/mobile/${item.id}`}>
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

export default MobilePage