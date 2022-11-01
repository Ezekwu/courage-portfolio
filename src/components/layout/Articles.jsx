import { motion } from 'framer-motion'
import { variants } from '../variants/variants'
import { StyledArticles } from '../styles/ArticlesStyled'
const Articles = ({ articles }) => {
    return (
        <StyledArticles>
            <div className=" ">
            {
                articles.map(item => (
                    <a href={item.link} target='_blank' rel="noreferrer">
                        <motion.img 
                        src={item.image} 
                        alt="" 
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'/>
                        <motion.h4 
                        className='title'
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>{item.title}</motion.h4>
                        <motion.p className='description'
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>{item.description}</motion.p>
                        <motion.p className="date-readtime"
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>
                            <span>{item.date}</span>
                            <span>{item.readTime}</span>
                        </motion.p>
                    </a>
                ))
            }
            </div>
            
        </StyledArticles>
    )
}

export default Articles