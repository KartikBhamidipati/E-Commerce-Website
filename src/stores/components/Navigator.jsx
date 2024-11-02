import React from 'react'
import { Link } from 'react-router-dom'

const Navigator = () => {
  return (
    <div className='navigatorSection'>
        <ul>
            <Link className='no-underline' to='/mobile'>
                <li>Mobiles</li>
            </Link>
            <Link className='no-underline' to='/computer'>
                <li>Computers</li>
            </Link>
            <Link className='no-underline' to='/ac'>
                <li>Acs</li>
            </Link>
            <Link className='no-underline' to='/book'>
            <li>Books</li>
            </Link>
            <Link className='no-underline' to='/fridge'>
            <li>Fridges</li>
            </Link>
            <Link className='no-underline' to='/furniture'>
            <li>Furniture</li>
            </Link>
            <Link className='no-underline' to='/men'>
            <li>Men</li>
            </Link>
            <Link className='no-underline' to='/kitchen'>
            <li>Kitchen</li>
            </Link>
            <Link className='no-underline' to='/speaker'>
            <li>Speakers</li>
            </Link>
            <Link className='no-underline' to='/watch'>
            <li>Watches</li>
            </Link>
            <Link className='no-underline' to='/women'>
            <li>Women</li>
            </Link>
            <Link className='no-underline' to='/tv'>
            <li>Tvs</li>
            </Link>
        </ul>
    </div>
  )
}

export default Navigator