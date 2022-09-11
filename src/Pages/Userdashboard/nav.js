import {BrowserRouter,Route,Routes,Link} from 'react-router-dom'
import './dashboard.css'
import { useNavigate } from 'react-router-dom'

const Navi=()=>
{
    const navigate=useNavigate()
    const logoutMethod=()=>{
      localStorage.removeItem('accesstoken')
      navigate('/')
    }
    return(
        <div>
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                <Link class="navbar-brand top" to='/'>Job Portal</Link>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <Link class="nav-link active" to='/userdashboard'>Home</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/application'>Application</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/wishlist'>Wishlist</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" to='/profile'>Profile</Link>
                        </li>
                        <li class="nav-item">
                        <i className='fa fa-sign-out ' style={{textDecoration: 'none', color:"white", margin:"2rem"}} onClick={logoutMethod} >Logout</i>
                        </li>
                    </ul>
                </div>
                </div>
                </nav> 
        </div>
    )
}
export default Navi