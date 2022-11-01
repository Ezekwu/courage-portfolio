import { StyledFooter } from "../styles/FooterStyled"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { variants } from "../variants/variants"
const Footer = () => {
    return (
        <StyledFooter>
            <motion.div 
            className="container wrapper"
            variants={variants.fadeUp}
            initial='hidden'
            whileInView='visible'
            >
                <div className="col-1">
                    <h3>Courage Egbude</h3>
                    <p>2022. Built by Courage Egbude</p>
                </div>
                <div className="col-2">
                    <div className="row-1">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/projects'>Projects</Link></li>
                            <li><Link to='/aboutme'>About me</Link></li>
                            <li><Link to='/writing'>Writing</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="row-2">
                        <ul>
                            <li><a href="https://drive.google.com/file/d/1_-V4xfXPwfiCQd0w1Lz8iTznvknmbsea/view?usp=sharing" target='_blank' rel="noreferrer">Resume</a></li>
                            <li><a href="https://twitter.com/TvbiXD" target='_blank' rel="noreferrer">Twitter</a></li>
                            <li><a href="https://www.linkedin.com/in/courage-egbude-4b388b171/" target='_blank' rel="noreferrer">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </motion.div>
        </StyledFooter>
    )
}

export default Footer