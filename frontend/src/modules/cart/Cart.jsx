import React, { useContext } from 'react'
import { cartContext } from './cart-context/cart-context';
import { CartProduct } from './CartProduct';

export const Cart = () => {
 const context = useContext(cartContext)

const myStyle={backgroundColor:"black",
  color:"white",
    borderRadius:"12px",
    width:"100%",
    // height:"60vh",
    padding: "10px",
    marginTop:"30px",
    boxShadow:"0px 0px 5px black"
};

  return(
    <div style={myStyle}>
        <h3>CART</h3>
        <hr/>
        {context.cart.map((product,index)=><CartProduct index={index} product={product}/>)}

    </div>
  )
}
