import { NavLink } from "react-router-dom";
let navbar = ()=>{
return(
<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
     
       
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <a  className="nav-link active" href="/home" >Home</a>
          <a   className="nav-link active" href="/tasks" >Tasks</a>

          
        </div>
      </div>
    </div>
  </nav>
)
}

export default navbar;