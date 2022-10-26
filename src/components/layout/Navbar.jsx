import React from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar } from '../styles/NavbarStyled'
const Navbar = () => {
    return (
        <StyledNavbar>
            <div className="logo">
                CE
            </div>
            <div className="nav-links">
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li> <Link to='/aboutme'>About me</Link></li>
                    <li><Link to='/writing'>Writing</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar