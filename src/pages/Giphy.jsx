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
                <img src={frame1} alt="" />
                <h2 className="title title-casestudy">
                👾 Giphy Stud
                </h2>
                <div className="row">
                    <p>Increasing the click and conversion rate of emails, with a GIFs</p>
                </div>
                <div className="border-div row">
                    <div className="col-1">
                        <h3>Time</h3>
                        <p>May-August 2022</p>
                    </div>
                    <div className="col-2">
                        <h3>Platform</h3>
                        <p>Responsive Website</p>
                    </div>
                    <div className="col-3">
                        <h3>Role</h3>
                        <p>UI Design, UX Research.</p>
                    </div>
                </div>
                <div className="row">
                    <h3>Intro</h3>
                    <p>GIFs have been used to express emotion, as well as to demonstrate things in an easy-to-understand way. They're so visual and easy to understand; GIFs are a great way to communicate complex ideas. An excellent way to deliver complex messages quickly and concisely.</p>
                </div>
                <div className="row">
                    <h3>My Role</h3>
                    <p>I carried out to the end-to-end process for this project, from the research stages to the final design stage. I worked alone on this as a UX Research and UI Designer.</p>
                </div>
                <div className="row">
                    <h3>Problem</h3>
                    <p>People love to feel and are more attached to brands and products that give off an emotion, the conventional way of marketing products have been fantastic but needs a lot of improvement in terms of understanding and considering people’s feelings</p>
                </div>
                <div className="row">
                    <h3>Goals</h3>
                    <p>With Giphystud we came up with an even better way to engage user and also drive the businesses emotion into while at  it.


                    </p>
                    <div className="list">
                        <p>For this project we had four major goals</p>
                        <ul>
                            <li>Make content more memorable</li>
                            <li>Improve user engagement and response</li>
                            <li>Show the brands culture and what they stand for</li>
                            <li>Give a more realistic approach to products</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <h3>Design Process</h3>
                    <img src={designProcess} alt="" />
                </div>
                <div className="row">
                    <h3>UX Research</h3>
                    <p>I conducted interviews asking participants asking them to state their experiences receiving marketing materials from brands, a lot of them probably couldn’t even remember the contents of such materials, user although found it easier to recall images they could have seen while going through them and felt more connected to the brand personally when GIFs were used, they were also convicted that the company were much more intentional about convicting them. This lead to increase in open and click in the majority of the users and increase in conversion rate.</p>
                </div>
                <div className="row">
                    <h3>Quantitative Research</h3>
                    <p>Based on our research, we discover that an GIF-Centered email campaign could bring about</p>
                </div>
                <img src={research} alt="" />
                <div className="row">
                    <h3>User Persona</h3>
                    <img src={user} alt="" />
                </div>
                <div className="row">
                    <h3>Empathy map</h3>
                    <img src={empathy} alt="" />
                </div>
                <div className="row">
                    <h3>Early Sketches</h3>
                    <img src={sketch} alt="" />
                </div>
                <div className="row">
                    <h3>Style guide</h3>
                    <img src={styleGuide} alt="" />
                </div>
                <div className="row">
                    <h3>Low FI</h3>
                    <img src={lowfi} alt="" />
                </div>
                <div className="row">
                    <h3>Hi-fi</h3>
                    <img src={hifi} alt="" />
                </div>
                <div className="row">
                    <h3>User Testing</h3>
                    <p>After finalizing designs on Giphystud, an email blast was sent to various partners with a return of over 200k impressions.</p>
                </div>
                <div className="row">
                    <h3>Next steps</h3>
                    <p>For next steps we hope to continually maintain this system and engage more partners, also plans of a mobile application might come in the near future</p>
                </div>
                <Button content='Visit website' link='https://giphystud.com/'/>
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

export default Giphy