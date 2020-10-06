import React from 'react'
const NavBar = ({ txt, type }) => (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <h1 className="navbar-brand h1">{txt}</h1>

        <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type={type} placeholder={type}/>
      
    </form>
    </nav>
)
export default NavBar