import React from 'react'
import Navbar from './navbar'
import {Link} from 'react-router-dom'
const Header = () => {

    return(
        <div id="header">
                <Link to="/" className="logo">
                    <img src="./asset/images/logo.jpg" alt="" />
                </Link>
               <Navbar/>
            </div>
    )
 

}

export default Header