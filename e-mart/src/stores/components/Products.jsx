import React from 'react'
import Mobiles from './Mobiles'
import Computers from './Computers'
import Fridge from '../components/Fridge'
import Ac from '../components/Ac'
import Tv from '../components/Tv'

const Products = () => {
  return (
    <div>
      <Mobiles/>
      <Computers/>
      <Fridge/>
      <Ac/>
      <Tv/>
    </div>
  )
}

export default Products