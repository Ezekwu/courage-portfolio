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
                {type === 'link' && <div className='link-h2'>
                    <h2>{content}</h2>
                </div>
                }
                {
                    type === 'about' && <div className="about">
                        <h1 className="about-h1">Hey! I’m Courage, a product <br /> designer and writer <br /> based in Nigeria.</h1>

                        <p>Based in Africa - Avaliabe worldwide</p>

                    </div>
                }
            </div>
        </StyledHeader>
    )
}

export default Header