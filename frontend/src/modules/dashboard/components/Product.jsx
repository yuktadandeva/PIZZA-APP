// import React from 'react'
import { Button } from "../../../shared/widgets/Button";
export const Product = ({pizza}) => {

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
    <Button val="ADD TO CART"></Button>
  </div>
</div>

  )
}
