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
                <img src={Foodieimg} alt="" />

                <h2 className="title title-casestudy">
                🍔 Foodie
                </h2>
                <div className="row">
                    <p>Enjoy fast deliveries from nearby restaurants, get your food delivered in less than 30 minutes</p>
                </div>
                <div className="border-div row">
                    <div className="col-1">
                        <h3>Time</h3>
                        <p>October - December 2020</p>
                    </div>
                    <div className="col-2">
                        <h3>Platform</h3>
                        <p>Mobile Application</p>
                    </div>
                    <div className="col-3">
                        <h3>Role</h3>
                        <p>UI Design, UX Research.</p>
                    </div>
                </div>
                <div className="row">
                    <h3>Intro</h3>
                    <p>Foodie is a mobile application that allows for users to order meals from their favorite restaurants and have them delivered in no time at all. Our priorities for this project where majorly quality and speed.</p>
                </div>
                <div className="row">
                    <h3>My Role</h3>
                    <p>I carried out to the end-to-end process for this project, from the research stages to the final design stage. I worked alone on this as a UX Research and UI Designer.</p>
                </div>
                <div className="row">
                    <h3>Problem</h3>
                    <p>A lot of the time people are really busy and do not have the time to cook meals or go to a restaurant. As a User Experience designer, the problem here was to find a unique solution that helps these people get meals quickly and easily.</p>
                </div>
                <div className="row">
                    <h3>Goals</h3>
                    <p>My main goal was to design an accessible and inclusive mobile app that's allows users to order meals at their own convenience.
                    </p>
                    <div className="list">
                        <p>I had four major goals for this project</p>
                        <ul>
                            <li>Large selection of meals and restaurants</li>
                            <li>Ensure that all meals are properly served to the best of quality</li>
                            <li>Seamless ordering process for users</li>
                            <li>On time delivery and tracking time to know when food arrives</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h3>Design Process</h3>
                    <img src={designProcess} alt="" />
                </div>
                <div className="row">
                    <h3>UX Research</h3>
                    <p>I conducted interviews asking participants what their experiences were using similar platforms that provided such services, after which I  created empathy maps to understand the users I’m designing for and their needs. A large number of users were working adults who don’t have time to cook meals. </p>
                <div className="list">
                    <p>From my research I also discovered that other factors such as obligations, interests, or challenges that make it difficult to get groceries for cooking or go to restaurants in-person.</p>
                </div>
                </div>
                <div className="row">
                    <h3>User Persona</h3>
                    <img src={userPersona} alt="" />
                </div>
                <div className="row">
                    <h3>Task Mapping</h3>
                    <img src={taskMapping} alt="" />
                </div>
                <div className="row">
                    <h3>User Flow</h3>
                    <img src={userFlow} alt="" />
                </div>
                <div className="row">
                    <h3>Empathy map</h3>
                    <img src={empathy} alt="" />
                </div>
                <div className="row">
                    <h3>Style guide</h3>
                    <img src={styleGuide} alt="" />
                </div>
                <div className="row">
                    <h3>Early Sketches</h3>
                    <img src={sketches} alt="" />
                </div>
                <div className="row">
                    <h3>Major screens</h3>
                    <img src={majorscreens} alt="" />
                </div>
                <div className="row">
                    <h3>Hi-fi</h3>
                    <img src={screens} alt="" />
                </div>
                <div className="row">
                    <h3>User Testing</h3>
                    <p>A prototype version of the application was given to users to test and complete a delivery task on the application, this was a timed test as our desired time was set to 10 mins, I noticed that 75% of users that are familiar with these platforms completed this task in less than 10 mins, while the rest completed in more than 10 mins but less than 15.
                    </p>
                    <div className="list">
                        <p>Because the application is not live yet, I was unable to test for delivery times and also response times from the restaurants.</p>
                    </div>
                </div>
                <div className="row">
                    <h3>Next steps</h3>
                    <p>For the next steps, the development of the application would be put in place and also additional features such as Pickup, Schedueled dScheduled</p>
                </div>
                <div className="other-projects">
                        <h2 className="project-title">
                            Other Projects
                        </h2>
                        <Projects projectData={filteredProjects}/>
                </div>
                
            </div>
        </StyledProjectOverview>
    )
}

export default Foodie