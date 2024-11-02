import React from 'react'
import {booksData} from '../data/books'
import NavBar from '../components/NavBar'
import Navigator from '../components/Navigator'
import { Link } from 'react-router-dom'

const BookPage = () => {
  return (
    <div className="product">
    <NavBar/>
    <Navigator/>
    <div className='proSection'>
        {
           booksData.map((item)=>{
                return(
                    <div className="proBox">
                        <Link to={`/book/${item.id}`}>
                        <div className="proImg">
                            <img src={item.image}/>
                        </div>
                        <div className="proName">
                            <h3>{item.title}</h3>
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

export default BookPage