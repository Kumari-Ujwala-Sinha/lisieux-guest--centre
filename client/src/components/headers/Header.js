import React, {useContext, useState} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import { NavLink } from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from 'axios'

function Header() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin
    
    const [menu, setMenu] = useState(false)

    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                 <li><Link to="/product">Product</Link></li>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/admin/create_homeslide">Create Homeslide</Link></li>
                <li><Link to="/admin/homeslide">Homeslide</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            {/* <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'lisieux Admin' : 'lisieux guest centre'}</Link>
                </h1>
            </div> */}

            <ul style={styleMenu}>
                

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><NavLink
                        exact
                        to="/login"
                        activeClassName=""
                        activeStyle={{
                        fontWeight: "bold",
                        color: "#ffa726",
                        }}
                    >Login ✥ Register</NavLink></li>
                }

                <li className="nav__item" onClick={() => setMenu(!menu)}>
                    <img src={Close} alt="" width="30" className="menu" />
                </li>

            </ul>

           
            
        </header>
    )
}

export default Header
