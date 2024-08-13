import React from 'react'

export const Button = (props) => {

const mystyle={padding:"10px", backgroundColor:"black", borderRadius:"8px"};
const a={textDecoration:"none",color:"white"}
  return (
    <button onClick={props.onClick} style={mystyle}><a href="#" style={a}>{props.val}</a></button>
  )
}
