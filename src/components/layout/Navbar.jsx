import React from 'react'
import { StyledNavbar } from '../styles/NavbarStyled'
const Navbar = () => {
    return (
        <StyledNavbar>
            <div className="logo">
                CE
            </div>
            <div className="nav-links">
                <ul>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>About me</li>
                    <li>Writing</li>
                    <li>Contact</li>
                </ul>
            </div>
        </StyledNavbar>
    )
}

export default Navbar