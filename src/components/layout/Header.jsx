import React from 'react'
import GradientImg from '../../assets/images/hero-gradient.png'
import StartProject from '../../assets/images/start-a-project.png'
import { StyledHeader } from '../styles/HeaderStyle'
import Navbar from './Navbar'
import { motion } from 'framer-motion'
import { variants } from '../variants/variants'
const Header = ({content, type}) => {
    
    return (
        <StyledHeader  style={{
            background: `url(${GradientImg}) `,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
        }} >
            <div className="container">
                <Navbar />
                {type === 'homepage' && <motion.div 
                className='homepage-h1'
                variants={variants.fadeUpDelay}
                initial='hidden'
                animate='visible'
                
                >{content}</motion.div>}

                {type === 'homepage' &&  <div className='img-container'> <a href="https://calendly.com/courageegbude/30min" target='_blank' rel="noreferrer"><motion.img 
                initial={{rotate: 0}}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 4 }}
                src={StartProject} 
                alt="start a project" /></a></div>}

                {type === 'homepage' && <div className='start-project'><a href='https://calendly.com/courageegbude/30min' target='_blank' rel="noreferrer"> Start a project</a> </div>}
                {type === 'link' && <div className='link-h2'
                >
                    <motion.h2
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    animate='visible'>{content}</motion.h2>
                </div>
                }
                {
                    type === 'about' && <motion.div className="about"
                    variants={variants.fadeUpDelay}
                        initial='hidden'
                        animate='visible'>
                        <h1 className="about-h1"
                        >Hey! I’m Courage, a product <br /> designer and writer <br /> based in Nigeria.</h1>

                        <p>Based in Africa - Avaliabe worldwide</p>

                    </motion.div>
                }
            </div>
        </StyledHeader>
    )
}

export default Header