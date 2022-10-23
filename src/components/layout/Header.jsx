import React from 'react'
import GradientImg from '../../assets/images/hero-gradient.png'
import StartProject from '../../assets/images/start-a-project.png'
import { StyledHeader } from '../styles/HeaderStyle'
import Navbar from './Navbar'
const Header = ({content, type}) => {
    return (
        <StyledHeader  style={{
            background: `url(${GradientImg}) `,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
        }} >
            <div className="container">
                <Navbar />
                {type === 'homepage' && <h1 className='homepage-h1'>{content}</h1>}
                {type === 'homepage' &&  <div className='img-container'><img src={StartProject} alt="start a project" /></div>}
            </div>
        </StyledHeader>
    )
}

export default Header