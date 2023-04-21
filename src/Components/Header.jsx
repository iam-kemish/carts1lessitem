import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-info">
  <div className="container-fluid">
  <h3 className="navbar-brand" style={{cursor: "default"}}>Header</h3>

    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
         <Link className='nav-link' to="/">Home</Link>
        <Link className="nav-link" to="/cart">Cart</Link>
       
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header
