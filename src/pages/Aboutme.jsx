import { StyledAboutme } from "../components/styles/AboutmeStyled"
import Header from "../components/layout/Header"
import profileImg from '../assets/images/profile-image.png'
const Aboutme = () => {
    return (
        <StyledAboutme >
            <Header  type='about'/>
            <div className=" philosopy ">
                <div className="container row-1 row">
                    <div className="col-1">
                        <h3>My philosophy</h3>
                        <p>I'm a product designer with 3 years of experience working on incredible projects for different clients.</p>
                        <p>I grew up in the computer age and have been fascinated with technology - and all kinds of gadgets and gizmos - since I was a little kid.</p>
                        <p>My design philosophy is straightforward: Understand your project's target audience and goals, then help your users achieve their purposes by crafting intuitive, easy-to-use interfaces that are stunning. would be highlighting the major problem solved.</p>
                    </div>
                    <div className="col-1">
                        <img src={profileImg} alt="" />
                    </div>
                </div>
            </div>

            <div className="goal-skills">
                <div className="row row-2 container">
                    <div className="col-1">
                        <h3>My goals</h3>
                        <p>My main goal is to create original and valuable products that solve problems, by including attention to detail and crafting experiences that delight clients and users. I strive to create a positive environment for collaboration with team members and other stakeholders in developing user-centered products.</p>
                    </div>
                    <div className="col-2">
                        <h3>My skills</h3>
                        <p>UI Design. I create beautifully designed interfaces that are both functional and engaging.   </p>
                        <p>UX Design. I’m excellent at creating a clean, thoughtful User Experience that exceeds the customers’ expectations.</p>
                        <p>Product Design. I'm solving everyday product problems with innovative design.</p>
                        <p>User Research. I'm listening to customers and helping provide the best experience for them. </p>
                        <p>Writing. I love to create and document helpful content that provides answers to questions from budding designers</p>
                    </div>
                </div>
            </div>
            <div className="experience">
                <div className="container">
                <h2>My experience</h2>
                <div className="experience-list">
                    <div className="experience-row">
                        <div className="col-1">
                            <h3>Persist Ventures / Product Designer</h3>
                            <p>Oct 2021-Sept 2022, Los Angeles</p>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li>I Drove the end-to-end design of Socialverse, using the data gotten from user research to improve the product experience by 50%. </li>
                                <li> Designed the crypto wallet system experience with a 35% decrease in time taken to deposit and withdraw funds with the Product manager and Engineering team.</li>
                                <li>Created graphics and promotional content for social media platforms leading to an increase in application downloads by 20%.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-row">
                        <div className="col-1">
                            <h3>Fastest Booking / Product Designer</h3>
                            <p>April 2021-Oct 2021, Lagos</p>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li>I Redesigned the Fastest booking website and mobile site with saving booking time by 50% and increasing the site engagement from 100 to 250 daily unique visitors.</li>
                                <li>Designed and conducted user research leading to improvement in product experience by 20%</li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-row">
                        <div className="col-1">
                            <h3>Bokeh Photogenic / Product Designer</h3>
                            <p>Jan 2020-Nov 2020, Bengaluru</p>
                        </div>
                        <div className="col-2">
                            <ul>
                                <li>Launched the Andriod version of Phootoshoto one of India’s leading photograghy websites leading to an increase in engagement rate by 70%. My responsibilties included wireframes, user flows, sitemaps & visual design </li>
                                <li>Created graphics and promotional content for social media platforms leading to an increase in application downloads by 50%.</li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </StyledAboutme>
    )
}

export default Aboutme