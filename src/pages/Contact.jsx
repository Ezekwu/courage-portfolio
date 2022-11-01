import Header from "../components/layout/Header"
import Button from "../components/layout/Button"
import { StyledContact } from "../components/styles/ContactStyled"
import { motion } from "framer-motion"
import { variants } from "../components/variants/variants"
const Contact = () => {
    return (
        <div>
            <Header  type='link' content='Let’s work together'/>
            <StyledContact>
                <div className="flex container">
                    <motion.div className="card"
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>
                        <p>I’m currently available to take on new projects, so feel free to find a spot in my calendar for a meeting where we can talk about everything related to your project</p>
                        <Button content='Book Meeting' link='https://calendly.com/courageegbude/30min'/>
                    </motion.div>
                    <div className="details">
                        <div className="row">
                            <motion.h3
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>PREFER EMAIL?</motion.h3>
                            <motion.div
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>
                            <a 
                            href="mailto:tobiegbude@gmail.com">tobiegbude@gmail.com</a>
                            </motion.div>
                        </div>
                        <div className="row">
                            <motion.h3
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>PREFER CALL?</motion.h3>
                            <motion.div
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>
                            <a 
                            href="">+2347069591813</a>
                            </motion.div>
                            
                        </div>
                    </div>
                </div>
            </StyledContact>
        </div>
    )
}

export default Contact