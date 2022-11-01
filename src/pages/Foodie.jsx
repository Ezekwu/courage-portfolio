import React from 'react'
import { StyledProjectOverview } from '../components/styles/ProjectOverviewStyled'
import Header from '../components/layout/Header'
import Button from '../components/layout/Button'

import Foodieimg from '../assets/images/Foodie/image 1(1).png'
import designProcess from '../assets/images/Foodie/Frame 16047.png'
import userPersona from '../assets/images/Foodie/User Persona.png'
import taskMapping from '../assets/images/Foodie/Task Mapping 1.png'
import userFlow from '../assets/images/Foodie/Foodie APP Userflow.png'
import empathy from '../assets/images/Foodie/7. Empathy Mapping.png'
import styleGuide from '../assets/images/Foodie/Frame 16040(1).png'
import sketches from '../assets/images/Foodie/Group 19587.png'
import majorscreens from '../assets/images/Foodie/Group 19586.png'
import screens from '../assets/images/Foodie/Screens.png'
import Projects from '../components/layout/Projects'
import { projectsInfo } from '../data/projects/Projects'
import { motion } from 'framer-motion'
import { variants } from '../components/variants/variants'
const Foodie = () => {
    let filteredProjects = []
    const projectData = () => {
        filteredProjects = projectsInfo.filter(project => {
            return project.title !== 'Foodie'
        })
    }
    projectData()
    return (
        <StyledProjectOverview>
            <Header  content='Projects' type='link'/>
            <div className="wrapper container">
                <motion.img
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={Foodieimg} alt="" />

                <motion.h2  
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                className="title title-casestudy">
                🍔 Foodie
                </motion.h2>
                <div className="row">
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Enjoy fast deliveries from nearby restaurants, get your food delivered in less than 30 minutes</motion.p>
                </div>
                <div className="border-div row">
                    <div className="col-1">
                        <motion.h3 
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>Time</motion.h3>
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>October - December 2020</motion.p>
                    </div>
                    <div className="col-2">
                        <motion.h3 
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>Platform</motion.h3>
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>Mobile Application</motion.p> 
                    </div>
                    <div className="col-3">
                        <motion.h3 
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>Role</motion.h3>
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
                    whileInView='visible'>Intro</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>Foodie is a mobile application that allows for users to order meals from their favorite restaurants and have them delivered in no time at all. Our priorities for this project where majorly quality and speed.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>My Role</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>I carried out to the end-to-end process for this project, from the research stages to the final design stage. I worked alone on this as a UX Research and UI Designer.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Problem</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>A lot of the time people are really busy and do not have the time to cook meals or go to a restaurant. As a User Experience designer, the problem here was to find a unique solution that helps these people get meals quickly and easily.</motion.p>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Goals</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>My main goal was to design an accessible and inclusive mobile app that's allows users to order meals at their own convenience.
                    </motion.p>
                    <div className="list">
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>I had four major goals for this project</motion.p>
                        <ul>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>Large selection of meals and restaurants</motion.li>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>Ensure that all meals are properly served to the best of quality</motion.li>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>Seamless ordering process for users</motion.li>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>On time delivery and tracking time to know when food arrives</motion.li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Design Process</motion.h3>
                    <motion.img
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={designProcess} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>UX Research</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>I conducted interviews asking participants what their experiences were using similar platforms that provided such services, after which I  created empathy maps to understand the users I’m designing for and their needs. A large number of users were working adults who don’t have time to cook meals. </motion.p>
                <div className="list">
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>From my research I also discovered that other factors such as obligations, interests, or challenges that make it difficult to get groceries for cooking or go to restaurants in-person.</motion.p>
                </div>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>User Persona</motion.h3>
                    <motion.img
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible' 
                    src={userPersona} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Task Mapping</motion.h3>
                    <motion.img
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={taskMapping} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>User Flow</motion.h3>
                    <motion.img 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={userFlow} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Empathy map</motion.h3>
                    <motion.img
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={empathy} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Style guide</motion.h3>
                    <motion.img 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={styleGuide} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Early Sketches</motion.h3>
                    <motion.img 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={sketches} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Major screens</motion.h3>
                    <motion.img
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={majorscreens} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Hi-fi</motion.h3>
                    <motion.img 
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    src={screens} alt="" />
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>User Testing</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>A prototype version of the application was given to users to test and complete a delivery task on the application, this was a timed test as our desired time was set to 10 mins, I noticed that 75% of users that are familiar with these platforms completed this task in less than 10 mins, while the rest completed in more than 10 mins but less than 15.
                    </motion.p>
                    <div className="list">
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>Because the application is not live yet, I was unable to test for delivery times and also response times from the restaurants.</motion.p>
                    </div>
                </div>
                <div className="row">
                    <motion.h3 
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Next steps</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'>For the next steps, the development of the application would be put in place and also additional features such as Pickup, Schedueled dScheduled</motion.p>
                </div>
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

export default Foodie