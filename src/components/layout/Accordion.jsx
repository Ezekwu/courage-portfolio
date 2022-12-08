import { StyledAccordion } from "../styles/AccordionStyled"
import { faqData } from "../../data/FAQ's/FAQ's"
import { useState } from "react"
import { motion } from "framer-motion"
import { variants } from "../variants/variants"
const Accordion = () => {
    const [open, setOpen] = useState(false)

    const toggleOpen = (i) => {
        if(open === i){
            return setOpen(false)
        }
        setOpen(i)
    }     
    return (
        <StyledAccordion>
            {
                faqData.map((item, i) => (
                    <motion.div 
                    className="item" 
                    key={item.title}
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>
                        <div className="title" onClick={()=> toggleOpen(i)}><h3 >{item.title}</h3> <span className={open === i && 'rotate'}>+</span></div>
                        <p className={open === i ? "content show-content" : "content"}>{item.content}</p>
                    </motion.div>
                ))
            }
            
        </StyledAccordion>
    )
}

export default Accordion