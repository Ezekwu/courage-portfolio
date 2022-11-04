import Header from "../components/layout/Header"
import Projects from "../components/layout/Projects"
import Articles from "../components/layout/Articles"
import { projectsInfo } from "../data/projects/Projects"
import { articlesData } from "../data/articles/articles"
import { StyledHomepage } from "../components/styles/HomepageStyled"
import Accordion from "../components/layout/Accordion"
import { motion } from "framer-motion"
import { variants } from "../components/variants/variants"

const Homepage = () => {
    const headerMessage ={
        content: "Hey! I'm Courage, the one-stop person for your product design needs."
    }

    let articlesFiltred = []
    const filterArticle = () => {
        articlesFiltred = articlesData.slice(0, 3)
    }
    filterArticle()
    

    
    
    return (
        <StyledHomepage >
        <Header  content={headerMessage.content} type='homepage'/>
        <section className="summary">
            <motion.div 
            className="container summary-content"
            variants={variants.fadeUp}
            initial='hidden'
            whileInView='visible'
            >
                <h3>About me</h3>

                <p>
                    I'm a product designer with 3 years of experience working on incredible projects for different clients. I grew up in the computer age and have been fascinated with technology - and all kinds of gadgets and gizmos - since I was a little kid.
                </p> 

                <p>
                    My design philosophy is straightforward: Understand your project's target audience and goals, then help your users achieve their purposes by crafting intuitive, easy-to-use interfaces that are stunning. would be highlighting the major problem solved.
                </p>
            </motion.div>
        </section>
        <section className="projects">
            <div className="container">
                <Projects projectData={projectsInfo}/>
            </div>
        </section>

        <section className="FAQ">
            <div className="container FAQ-flex">
                <motion.div 
                className="col-1"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'>
                    <h2>
                        Questions,  answered.
                    </h2>
                </motion.div>
                <motion.div 
                className="col-2">
                    <Accordion />
                </motion.div>
            </div>
        </section>
        <section className="articles">
            <div className="container">
                <motion.h2
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'>My recent thoughts</motion.h2>
                <Articles  articles={articlesFiltred}/>
            </div>
        </section>
        
        </StyledHomepage>
    )
}

export default Homepage