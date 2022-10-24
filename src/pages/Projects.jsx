import React from 'react'
import Header from '../components/layout/Header'
import Projects from '../components/layout/Projects'
import { projectsInfo } from "../data/projects/Projects"


const Projectspage = () => {
    return (
        <div>
            <Header  content='Projects' type='link'/>
            <div className="project-page_project-wrapper">
            <Projects projectData={projectsInfo} />
            </div>
        </div>
    )
}

export default Projectspage