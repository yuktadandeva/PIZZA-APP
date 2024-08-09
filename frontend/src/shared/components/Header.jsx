import { Logo } from '../widgets/Logo'
import { NavBar } from '../widgets/NavBar'

export const Header = () => {

  const mystle={backgroundColor:"black",display:"flex",color:"white", borderBottomLeftRadius:"12px", borderBottomRightRadius:"12px", boxShadow:"0px 0px 5px black"}
  const h4={marginLeft:"10px",marginTop:"25px"}
  return (
    <div style={mystle} > <Logo></Logo> <h4 style={h4}> PIZZA STORE</h4>
    
    <div><NavBar></NavBar></div></div> 
  )
}
