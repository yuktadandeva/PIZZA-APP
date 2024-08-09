/* eslint-disable no-unused-vars */
import { useEffect } from 'react'
import { Header } from '../../../shared/components/Header'
import { useState } from 'react'
import { getApiCall } from '../../../shared/services/api-client'
import {Products} from './Products'
import { Cart } from '../../cart/Cart'


export const DashBoard = () => {
useEffect(()=>{
getPizzas();
},[]) //[] shows component is loading on screen - Mounting phase

const [loading, setLoading] = useState(true);
const [pizzas, setPizzas] = useState({});
const [error, setError] = useState();

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
    </div>
  )
}
