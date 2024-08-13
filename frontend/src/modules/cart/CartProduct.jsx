import React, { useContext } from 'react'
import { Button } from '../../shared/widgets/Button';
import { cartContext } from './cart-context/cart-context';
export const CartProduct = ({product}) => {
    const context = useContext(cartContext);
    const removeCart =()=>{
    context.removeCart({product})
    }
    const display = {display:"flex"};
     
    const price = {
        backgroundColor:"white",
        color:"black"
    }
    const imgDiv ={
    
        overflow:"hidden",
        height:"100px",
        width:"100px"
      
      }
      const img={
        width:"100%",
        height:"100%"
      }
  return (
    <div >
  
         <div style={imgDiv}><img style={img} src={product.image} alt="" /></div>
        <div><h5>{product.name}</h5></div>
        <div>{product.category}</div>
        <div><div style={price}><span>Rs. {product.price}</span></div><button onClick={removeCart}>-</button></div>
        
    </div>
  )
}
