import Header from "../components/layout/Header"
import Projects from "../components/layout/Projects"
import Articles from "../components/layout/Articles"
import { projectsInfo } from "../data/projects/Projects"
import { articlesData } from "../data/articles/articles"
import { StyledHomepage } from "../components/styles/HomepageStyled"
import Accordion from "../components/layout/Accordion"
import { useState } from "react"

const Homepage = () => {
    const headerMessage ={
        content: "Hey! i'm courage, the one-stop person for your product design needs."
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
            <div className="container summary-content">
                <p>
                    I'm a product designer with 3 years of experience working on incredible projects for different clients. I grew up in the computer age and have been fascinated with technology - and all kinds of gadgets and gizmos - since I was a little kid.
                </p> 

                <p>
                    My design philosophy is straightforward: Understand your project's target audience and goals, then help your users achieve their purposes by crafting intuitive, easy-to-use interfaces that are stunning. would be highlighting the major problem solved.
                </p>
            </div>
        </section>
        <section className="projects">
            <div className="container">
                <Projects projectData={projectsInfo}/>
            </div>
        </section>

        <section className="FAQ">
            <div className="container FAQ-flex">
                <div className="col-1">
                    <h2>
                        Questions, <br /> answered.
                    </h2>
                </div>
                <div className="col-2">
                    <Accordion />
                </div>
            </div>
        </section>
        <section className="articles">
            <div className="container">
                <h2>My recent thoughts</h2>
                <Articles  articles={articlesFiltred}/>
            </div>
        </section>
        
        </StyledHomepage>
    )
}

export default Homepage