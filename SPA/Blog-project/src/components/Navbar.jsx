import React from 'react'
import {Link} from 'react-router-dom'

import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
            <h2> <Link to={'/'}> Blog </Link></h2>
            <ul>
                <li><Link to={'/'}> Home </Link></li>
                <li ><Link to={'/edit'}> Gerenciar </Link></li>
                <li className='new-btn'><Link to={'/new'}> Novo Post </Link></li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar