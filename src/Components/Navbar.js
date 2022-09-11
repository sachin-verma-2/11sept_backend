import "../CSS/Navbar.css"
import {Link } from "react-router-dom"
function Navbar(){
    return(
        <div>
            <nav>
             <h2 className="head">Find Job </h2>
             <div className="right">
             <h2 className="nav-login"><Link className="link-nav" to="/login">Login</Link></h2>
             <h2 className="nav-login"><Link className="link-nav"to="/signup">Sign Up</Link></h2>
             </div>
            </nav>
        </div>
    )
}
export default Navbar