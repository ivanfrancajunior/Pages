import React, {useState, useEffect} from 'react';
import {Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate()

    const[search, setSearch] = useState('') 

    const handleSubmit =(e ) =>{
        e.preventDefault()
        if(!search) return

        navigate(`/search?q=${search}`,{ replace: true })

        setSearch('')
    }

  return (
    <div>
      <nav className='navbar' id='navbar'>
      <h2>
        <Link to="/">
           MovieTeca
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Busque um filme" onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        <button type="submit"> Buscar</button>
      </form>
      </nav>


    </div>
  )
}

export default Navbar
