import { Button } from "./Button"

export const NavBar = () => {

  const ul={listStyle:"none",display:"flex",width:"50%"}
  const a={textDecoration:"none", color:"white",margin:"10px"}
  const mystyle={marginTop:"20px", width:"70%", marginLeft:"150px", display:"flex", justifyCenter:"space-between", alignItems:"center"}
  const inp={marginBottom:"18px", display:"flex",marginLeft:"70px", height:"5vh"}

  return (
    <nav style={mystyle}>
    <ul style={ul}>
    <li><a href="" style={a}>HOME</a></li>
    <li><a href="" style={a}>CATEGORIES</a></li>
    <li><a href="" style={a}>DRINKS</a></li>
    <li><a href="" style={a}>PROFILE</a></li>
    </ul>

<div className="input" style={inp}> 
<input type="text" placeholder="PIZZASSSS"  />
<div className="button"><Button val="search"></Button></div>

</div>
   
    </nav>
  )
}
