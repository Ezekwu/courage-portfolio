import { StyledProjectOverview } from "../components/styles/ProjectOverviewStyled"
import Header from "../components/layout/Header"
import graph from '../assets/images/socialverse/623207ea24d807b5c3630491_graph2-min 1.png'
import brandGuide from '../assets/images/socialverse/Brand Guide 1 1.png'
import frame1 from '../assets/images/socialverse/Frame 16034.png'
import frame2 from '../assets/images/socialverse/Frame 16038.png'
import socialVerse1 from '../assets/images/socialverse/Scoial Verse.png'
import socialVerse2 from '../assets/images/socialverse/Social verse Model 1.png'
import socialVerse3 from '../assets/images/socialverse/Socialverse.png'
import socialVerse4 from '../assets/images/socialverse/Socialverse(1).png'
import Button from "../components/layout/Button"
import Projects from "../components/layout/Projects"
import { projectsInfo } from "../data/projects/Projects"
const Socialverse = () => {
    let filteredProjects = []
    const projectData = () => {
        filteredProjects = projectsInfo.filter(project => {
            return project.title !== 'Socialverse'
        })
    }
    projectData()
    return (
        <StyledProjectOverview>
            <Header  content='Projects' type='link'/>
            <div className="container wrapper">
                <div className="design-flex">
                    <div>App Design</div>
                    <div>Brand Design</div>
                </div>
                
                    <h2 className="title">🌍 Socialverse</h2>
                
                <img src={socialVerse1} alt="" />
                    <div className="row">
                        <h3>Intro</h3>
                        <p>SocialVerse is the place to watch vlogs, documentaries, and podcasts in the native mobile format. Connect with creators, increase your attention span, and earn crypto tokens along the way. With an embedded crypto wallet we give you access to the new web3 frontier.</p>
                    </div>
                    <div className="row">
                        <h3>Timeline</h3>
                        <p>Nov 2021-July 2022</p>
                    </div>
                    <div className="row">
                        <h3>Role</h3>
                        <p>UI Design, Branding, Prototyping.Product. I worked with the lead designer, product manager and engineers</p>
                    </div>
                    <img src={brandGuide} alt="" />
                    <div className="row">
                        <h3>Problem Statement </h3>
                        <p>Today Social Media users and creators are disconnected from the ability to earn and have ownership from their input to the platform and instead are treated as another income stream. On top of that user data is collected, hidden from the user, and sold to further mine profits.</p>
                    </div>
                    <div className="row">
                        <h3>Goals</h3>
                        <p>From a consumer side the algorithm that the user is fed content from is behind a walled garden, with the user being unable to make changes to it which develops a toxic relationship between the platform and the user. We have hopes for ourselves to make changes and there is a lack of consumers having control over the algorithms that feed us content. Instead the algorithm focuses on what enrages the user and keeps them most engaged on the platform, rather than what is most healthy and best for them to live a positive, happy, and healthy life.</p>
                        <div className="list">
                            <p> We had 3 major goals for this project </p>
                            <ul>
                                <li>Give users control over the type of content they want to rather than an algorithm that is toxic.</li>
                                <li>Users and creators have the ability to earn and have ownership over their input to the platform</li>
                                <li>Create a community of web 3 enthusiats that are driving a change in the decentralized world</li>
                            </ul>
                        </div> 
                    </div>
                    <img src={graph} alt="" />

                    <div className="row">
                        <h3>Research</h3>
                        <p>A lot of the research was carried out by the UX Research team that collaborated with the various social media influencers to understand their needs and meet their expectations after proper research was carried out this data was then sent to the design team to convert into solutions.
                        </p>
                        <div className="list">
                            <p>To create a system that works, we needed to understand how the web 3.0 and blockchain would thrive in the social media world, we also reach out to top influencers from web 2.0 platforms listening to their complaints and suggests, also onboarding a few to the project to work directly with us.</p>
                            <ul>
                                <li> How can users earn and create on content that they love</li>
                                <li>What recent trends have led users to fall out with current web 2 platforms</li>
                                <li>Identify ways to provide clear content without toxic algorithms</li>
                            </ul>
                        </div>
                    </div>
                    <img src={socialVerse2} alt="" />
                    <div className="row">
                        <h3>Solution</h3>
                        <p>From the insight gotten, we decided to focus on a network approach to develop a decentralized system that is accessible to members and relevant stakeholders, Build a community and Establish Frameworks for creating experiences, and giving control back to the users.</p>

                        <div className="list">
                            <p>It became clear that there was a missing spot for long format vertical videos in the market as creators had to film separate content for a platform, and drive all their own traffic to great content they made.</p>
                        </div>
                    </div>
                    <img src={frame1} alt="" />
                    <img src={frame2} alt="" />
                    <div className="row">
                        <h3>Implementation</h3>
                        <p>The visual design was centered around creating a delightful experience for Socialverse users. The High-fidelity screens also established a realistic experience to encourage useful stakeholder feedback and interactive usability tests.</p>
                    </div>
                    <img src={socialVerse3} alt="" />
                    <div className="row last-child">
                        <h3>Conclusion</h3>
                        <p>After interviewing over 50 creators with a combined following of over 350 million followers (that’s more people than there are in the U.S.) The positive feedback was overwhelming and feedback for new features invaluable. Original the idea was based on web2, however it became clear that web3 would solve a lot of the problems currently had on the existing platforms. Using the data gotten from user research to improve the product experience by 50% </p>
                        <div className="list">
                            <p>Some of the next steps to be taken would including an internal wallet into the application and creating a custom token for the application users as a form of digital currency within the application.</p>
                        </div>
                    </div>
                    <Button content='Download application' link='https://www.socialverseapp.com/'/>
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

export default Socialverse




