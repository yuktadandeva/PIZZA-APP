// import React from 'react'
import { useContext } from "react";
import { Button } from "../../../shared/widgets/Button";
import { cartContext } from "../../cart/cart-context/cart-context";

export const Product = ({pizza}) => {
  const context = useContext(cartContext);

  const addCart = ()=>{
    context.addCart({pizza});
  }

  const mystyle = {width: "16rem", margin:"10px", boxShadow:"0px 0px 5px black",padding:"0px",overflow:"hidden", border:"none"};
  const imgDiv ={width:"100%", margin:"0px",backgroundColor:"black", padding:"0px",height:"35vh"}
  const img ={padding:'15px', width:"100%"}

  return (
        <div className="card" style={mystyle}>
          <div className="img" style={imgDiv}> 
            <img src={pizza.image} style={img}  alt="..."/>
            </div>
 
  <div className="card-body">
    <h5 className="card-title">{pizza.name}</h5>
    <p className="card-text">{pizza.desc}</p>
    <p className="card-text">{pizza.price}</p>
    <Button val="ADD TO CART" onClick = {addCart}></Button>
  </div>
</div>

  )
}
