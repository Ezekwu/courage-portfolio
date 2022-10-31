import { useState } from 'react'
import { Link } from 'react-router-dom'
import { StyledNavbar } from '../styles/NavbarStyled'
import { variants } from '../variants/variants'
import { motion } from 'framer-motion'

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(prevState => !prevState)
    }

    const closeMenu = () => {
        setShowMenu(false)
    }
    return (
        <motion.div
        variants={variants.fadeDown}
        initial='hidden'
        animate='visible'>
            <StyledNavbar
        
        >
            <div className="logo">
                CE
            </div>
            <div className="nav-links">
                <ul className='desktop-nav'>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/projects'>Projects</Link></li>
                    <li> <Link to='/aboutme'>About me</Link></li>
                    <li><Link to='/writing'>Writing</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
                <ul className={showMenu ? 'mobile-nav show-menu' : 'mobile-nav'}>
                    <div>
                        <li onClick={closeMenu}><Link to='/'>Home</Link></li>
                        <li onClick={closeMenu}><Link to='/projects'>Projects</Link></li>
                        <li onClick={closeMenu}> <Link to='/aboutme'>About me</Link></li>
                        <li onClick={closeMenu}><Link to='/writing'>Writing</Link></li>
                        <li onClick={closeMenu}><Link to='/contact'>Contact</Link></li>
                    </div>
                </ul>
            </div>
            <div className="hamburger-menu" onClick={toggleMenu}>
                {!showMenu && <i class="fa-solid fa-bars"></i> }
                {showMenu && <i class="fa-solid fa-xmark"></i>}
            </div>

        </StyledNavbar>
        </motion.div>
        
    )
}

export default Navbar