import Elondrop1 from '../assets/images/Decentrelon/Elondrop 8.png'
import Elondrop2 from '../assets/images/Decentrelon/Elondrop 12.png'
import Elondrop3 from '../assets/images/Decentrelon/Frame 16040.png'
import frame1 from '../assets/images/Decentrelon/Frame 16038(1).png'
import frame2 from '../assets/images/Decentrelon/Frame 16039 1.png'
import projectExodus1 from '../assets/images/Decentrelon/Project Exodus Infographic_page-0001 1.png'
import projectExodus2 from '../assets/images/Decentrelon/Project Exodus Infographic_page-0001 2.png'
import { StyledProjectOverview } from '../components/styles/ProjectOverviewStyled'
import Header from '../components/layout/Header'
import Button from '../components/layout/Button'
import Projects from '../components/layout/Projects'
import { projectsInfo } from "../data/projects/Projects"


const Decentrelon = () => {
    let filteredProjects = []
    const projectData = () => {
        filteredProjects = projectsInfo.filter(project => {
            return project.title !== 'Freebird'
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
                <h2 className="title">🐦 Freebird</h2>
                <img src={Elondrop1} alt="" />
                <div className="row">
                    <h3>Intro</h3>
                    <p>Freebird is conducting Operation Freebird. A plan to onboard Twitter users into a web3 version of it, to ensure transparency and proper governing of users data.</p>
                </div>
                <div className="row">
                    <h3>Timeline</h3>
                    <p>Nov 2021-July 2022</p>
                </div>
                <div className="row">
                    <h3>Role</h3>
                    <p>UI Design, Branding, Prototyping.Product. I worked with the lead designer, product manager and engineers</p>
                </div>
                <div className="row">
                    <h3>Problem Statement</h3>
                    <p>Twitter is a centralized platform, ultimately beholden to its shareholders and incentivized to maximize profit rather than creating the most for its users, it's built to be toxic and drain people.</p>
                </div>
                <div className="row">
                    <h3>Goals</h3>
                    <p>Declentrelon is a movement for the hundreds of millions of people that use Twitter and have never been rewarded for making it what it is. We’re giving voices to the masses to decentralize Twitter and turn it into the protocol it was always meant to be.</p>
                    <div className="list">
                        <p>We had 3 major goals for this project</p>
                        <ul>
                            <li>Give users control over their future and share of the voting rights and type of content they want to rather than an algorithm that is toxic.</li>
                            <li>Create the largest airdrop in history to onboard more users to crypto.</li>
                            <li>At launch, the FREEBIRD app where users claim will also include a fully functioning crypto wallet, allowing users to buy, sell, send, swap, and receive cryptocurrency.</li>
                        </ul>
                    </div>
                </div>
                <img src={Elondrop3} alt="" className='big-img' />
                <div className="row">
                    <h3>Research</h3>
                    <p>A lot of the research was carried out by the UX Research team that collaborated with the Stakeholders to meet their expectations after proper research was carried out this data was then sent to the design team to convert into solutions. </p>
                    <div className="list">
                        <p>To create a system that works, we needed to understand how the blockchain would help implement a process that allow for ease in transaction and claiming airdrops, also we needed to know exactly how to onboard new users with little or no knowledge of the blockchain.</p>
                    </div>
                </div>
                <img src={projectExodus1} alt="" className='big-img' />
                <img src={projectExodus2} alt="" className='big-img' />

                <div className="row">
                    <h3>Solution</h3>
                    <p>From the insight gotten, we decided to focus on a step-by-step on boarding system so users do not get overwhelmed, by allowing users register for the airdrop and them creating a roadmap that educates them to learn about the application beforing moving forward to download the application. We also engaged onboarded users who registered for the airdrop by answering questions and providing updates via Telegram and Discord, this helped to make sure that they were not kept in the dark regarding our process, ensuring trust and transparency</p>
                </div>
                <img src={frame1} alt="" className='big-img' />
                <img src={frame2} alt="" className='big-img' />


                <div className="row">
                    <h3>Implementation</h3>
                    <p>The visual design was centered around creating a delightful experience for Freebird users. The High-fidelity screens also established an easy-to-use platform and an onboarding experience for users not familiar with buzz words in tech to encourage useful feedback and interactive usability tests. </p>
                </div>
                <img src={Elondrop2} alt="" className='big-img' />
                <div className="row">
                    <h3>Conclusion</h3>
                    <p>After interviewing over 50 creators with a combined following of over 350 million followers (that’s more people than there are in the U.S.) The positive feedback was overwhelming and feedback for new features invaluable. Original the idea was based on web2, however it became clear that web3 would solve a lot of the problems currently had on the existing platforms. Using the data gotten from user research to improve the product experience by 50% Some of the next steps to be taken would including an internal wallet into the application and creating a custom token for the application users as a form of digital currency within the application.</p>
                </div>
                <Button content='Visit website' link='https://decentrelon.com/'/>
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

export default Decentrelon