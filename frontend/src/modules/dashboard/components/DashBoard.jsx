/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Header } from '../../../shared/components/Header'
import { useState } from 'react'
import { getApiCall } from '../../../shared/services/api-client'
import {Products} from './Products'
import { Cart } from '../../cart/Cart'
import { cartContext } from '../../cart/cart-context/cart-context'

export const DashBoard = () => {
useEffect(()=>{
getPizzas();
},[]) //[] shows component is loading on screen - Mounting phase

const [loading, setLoading] = useState(true);
const [pizzas, setPizzas] = useState({});
const [error, setError] = useState();
const [cart, setCart]= useState([]);

const addCart = (product)=>{
 
  const cartClone = [...cart];
  cartClone.push(product.pizza);
  setCart(cartClone);
  console.log(cartClone);
}
const removeCart = (pizza)=>{

  const cartClone = [...cart];
  const updatedCart=cartClone.filter(product => {
    return product._id !== pizza.product._id;
  })
  setCart(updatedCart)
}
useEffect(()=>{
  console.log(cart)
}, [cart])

const getPizzas = async ()=>{
  try{
   const PIZZA_ENDPOINT = import.meta.env.VITE_PIZZA_URL;
   const result = await getApiCall(PIZZA_ENDPOINT);
   setLoading(false);
   setPizzas(result);
   console.log(result);
  }catch(error){
     setError(error);
  }
}
  return (
    <div className='container'>
       <Header></Header> 
       <cartContext.Provider value={{cart:cart, addCart:addCart, removeCart: removeCart}}>
      <div className="row">
       <div className="col-9">
        <div className="row">
        {/* pizzas */}
        {loading?"...loading": <Products pizzas={pizzas}/>}
        </div>
       </div>
       <div className="col-3">
        <Cart/>
       </div>
      </div>
      </cartContext.Provider>
    </div>
  )
}
