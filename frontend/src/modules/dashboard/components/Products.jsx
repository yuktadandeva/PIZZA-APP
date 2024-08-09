/* eslint-disable no-unused-vars */
// import React from 'react'
import { useState } from 'react'
import { Product } from './Product'

export const Products = ({pizzas}) => {
// const [cartItem, setCartItem] = useState();
//   const handleEvent = ()=>{
     
  const mystyle={margin:"20px auto"};
//   }
  return (
    <div className='row' style={mystyle}>
      {pizzas['products'].map((pizza, id)=><Product pizza={pizza} key={pizza.id}/>)}
    </div>
  )
}
