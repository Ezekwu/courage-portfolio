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
import { variants } from '../components/variants/variants'
import { motion } from 'framer-motion'


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
                <motion.div 
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                className="design-flex">
                    <div>App Design</div>
                    <div>Brand Design</div>
                </motion.div>
                <motion.h2 
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                className="title">🐦 Freebird</motion.h2>
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={Elondrop1} alt="" />
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Intro</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >Freebird is conducting Operation Freebird. A plan to onboard Twitter users into a web3 version of it, to ensure transparency and proper governing of users data.</motion.p>
                </div>
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Timeline</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >Nov 2021-July 2022</motion.p>
                </div>
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Role</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >UI Design, Branding, Prototyping.Product. I worked with the lead designer, product manager and engineers</motion.p>
                </div>
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Problem Statement</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >Twitter is a centralized platform, ultimately beholden to its shareholders and incentivized to maximize profit rather than creating the most for its users, it's built to be toxic and drain people.</motion.p>
                </div>
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Goals</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >Declentrelon is a movement for the hundreds of millions of people that use Twitter and have never been rewarded for making it what it is. We’re giving voices to the masses to decentralize Twitter and turn it into the protocol it was always meant to be.</motion.p>
                    <div className="list">
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'
                        >We had 3 major goals for this project</motion.p>
                        <ul>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'
                            >Give users control over their future and share of the voting rights and type of content they want to rather than an algorithm that is toxic.</motion.li>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'
                            >Create the largest airdrop in history to onboard more users to crypto.</motion.li>
                            <motion.li
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'
                            >At launch, the FREEBIRD app where users claim will also include a fully functioning crypto wallet, allowing users to buy, sell, send, swap, and receive cryptocurrency.</motion.li>
                        </ul>
                    </div>
                </div>
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={Elondrop3} alt="" className='big-img' />
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Research</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >A lot of the research was carried out by the UX Research team that collaborated with the Stakeholders to meet their expectations after proper research was carried out this data was then sent to the design team to convert into solutions. </motion.p>
                    <div className="list">
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'
                        >To create a system that works, we needed to understand how the blockchain would help implement a process that allow for ease in transaction and claiming airdrops, also we needed to know exactly how to onboard new users with little or no knowledge of the blockchain.</motion.p>
                    </div>
                </div>
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={projectExodus1} alt="" className='big-img' />
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={projectExodus2} alt="" className='big-img' />

                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'>Solution</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >From the insight gotten, we decided to focus on a step-by-step on boarding system so users do not get overwhelmed, by allowing users register for the airdrop and them creating a roadmap that educates them to learn about the application beforing moving forward to download the application. We also engaged onboarded users who registered for the airdrop by answering questions and providing updates via Telegram and Discord, this helped to make sure that they were not kept in the dark regarding our process, ensuring trust and transparency</motion.p>
                </div>
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={frame1} alt="" className='big-img' />
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={frame2} alt="" className='big-img' />


                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Implementation</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >The visual design was centered around creating a delightful experience for Freebird users. The High-fidelity screens also established an easy-to-use platform and an onboarding experience for users not familiar with buzz words in tech to encourage useful feedback and interactive usability tests. </motion.p>
                </div>
                <motion.img 
                loading="lazy"
                variants={variants.fadeUp}
                initial='hidden'
                whileInView='visible'
                src={Elondrop2} alt="" className='big-img' />
                <div className="row">
                    <motion.h3
                    variants={variants.fadeUp}
                    initial='hidden'
                    whileInView='visible'
                    >Conclusion</motion.h3>
                    <motion.p
                    variants={variants.fadeUpDelay}
                    initial='hidden'
                    whileInView='visible'
                    >After interviewing over 50 creators with a combined following of over 350 million followers (that’s more people than there are in the U.S.) The positive feedback was overwhelming and feedback for new features invaluable. Original the idea was based on web2, however it became clear that web3 would solve a lot of the problems currently had on the existing platforms. Using the data gotten from user research to improve the product experience by 50% Some of the next steps to be taken would including an internal wallet into the application and creating a custom token for the application users as a form of digital currency within the application.</motion.p>
                </div>
                <Button content='Visit website' link='https://decentrelon.com/'/>
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

export default Decentrelon