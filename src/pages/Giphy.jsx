import { StyledProjectOverview } from '../components/styles/ProjectOverviewStyled'
import Header from '../components/layout/Header'
import Button from '../components/layout/Button'
import frame1 from '../assets/images/Giphy/Frame 1.png'
import designProcess  from '../assets/images/Giphy/Frame 16047(1).png'
import  research  from '../assets/images/Giphy/Frame 16050.png'
import  user  from '../assets/images/Giphy/User Persona(1).png'
import  empathy  from '../assets/images/Giphy/7. Empathy Mapping(1).png'
import  sketch  from '../assets/images/Giphy/Frame 64.png'
import  styleGuide  from '../assets/images/Giphy/Frame 16043(1).png'
import  lowfi  from '../assets/images/Giphy/Group 19619.png'
import  hifi  from '../assets/images/Giphy/Giphystud(1).png'
import Projects from '../components/layout/Projects'
import { projectsInfo } from '../data/projects/Projects'
import { motion } from 'framer-motion'
import { variants } from '../components/variants/variants'


const Giphy = () => {
    let filteredProjects = []
    const projectData = () => {
        filteredProjects = projectsInfo.filter(project => {
            return project.title !== 'Giphystud'
        })
    }
    projectData()
    return (
        <StyledProjectOverview>
            <Header  content='Projects' type='link'/>
            <div className="container wrapper">
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={frame1} alt="" />
                <motion.h2 
                variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    className="title title-casestudy">
                👾 Giphy Stud
                </motion.h2>
                <div className="row">
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Increasing the click and conversion rate of emails, with a GIFs</motion.p>
                </div>
                <div className="border-div row">
                    <div className="col-1">
                        <motion.h3 
                        variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Time</motion.h3>
                        <motion.p 
                        variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>May-August 2022</motion.p>
                    </div>
                    <div className="col-2">
                        <motion.h3 
                        variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Platform</motion.h3>
                        <motion.p 
                        variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Responsive Website</motion.p>
                    </div>
                    <div className="col-3">
                        <motion.h3 
                        variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Role</motion.h3>
                        <motion.p 
                        variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>UI Design, UX Research.</motion.p>
                    </div>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Intro</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>GIFs have been used to express emotion, as well as to demonstrate things in an easy-to-understand way. They're so visual and easy to understand; GIFs are a great way to communicate complex ideas. An excellent way to deliver complex messages quickly and concisely.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >My Role</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>I carried out to the end-to-end process for this project, from the research stages to the final design stage. I worked alone on this as a UX Research and UI Designer.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Problem</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>People love to feel and are more attached to brands and products that give off an emotion, the conventional way of marketing products have been fantastic but needs a lot of improvement in terms of understanding and considering people’s feelings</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Goals</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>With Giphystud we came up with an even better way to engage user and also drive the businesses emotion into while at  it.


                    </motion.p>
                    <div className="list">
                        <motion.p 
                        variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>For this project we had four major goals</motion.p>
                        <ul>
                            <motion.li 
                            variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Make content more memorable</motion.li>
                            <motion.li 
                            variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Improve user engagement and response</motion.li>
                            <motion.li 
                            variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Show the brands culture and what they stand for</motion.li>
                            <motion.li 
                            variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Give a more realistic approach to products</motion.li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Design Process</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={designProcess} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >UX Research</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>I conducted interviews asking participants  to state their experiences receiving marketing materials from brands, a lot of them probably couldn’t even remember the contents of such materials, user although found it easier to recall images they could have seen while going through them and felt more connected to the brand personally when GIFs were used, they were also convicted that the company were much more intentional about convicting them. This lead to increase in open and click in the majority of the users and increase in conversion rate.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Quantitative Research</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Based on our research, we discover that an GIF-Centered email campaign could bring about</motion.p>
                </div>
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    src={research} alt="" />
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >User Persona</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={user} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Empathy map</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={empathy} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Early Sketches</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={sketch} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Style guide</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={styleGuide} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Low FI</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={lowfi} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Hi-fi</motion.h3>
                    <motion.img 
                    loading="lazy"
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' src={hifi} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >User Testing</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>After finalizing designs on Giphystud, an email blast was sent to various partners with a return of over 200k impressions.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Next steps</motion.h3>
                    <motion.p 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>For next steps we hope to continually maintain this system and engage more partners, also plans of a mobile application might come in the near future</motion.p>
                </div>
                <Button  
                variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'content='Visit website' link='https://giphystud.com/'/>
                <div className="other-projects">
                        <motion.h2 
                        variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    className="project-title">
                            Other Projects
                        </motion.h2>
                        <Projects projectData={filteredProjects}/>
                </div>
            </div>
        </StyledProjectOverview>
    )
}

export default Giphy