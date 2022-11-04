import { StyledAboutme } from "../components/styles/AboutmeStyled"
import Header from "../components/layout/Header"
import profileImg from '../assets/images/profile-image.png'
import { motion } from "framer-motion"
import { variants } from "../components/variants/variants"
const Aboutme = () => {
    return (
        <StyledAboutme >
            <Header  type='about'/>
            <div className=" philosopy ">
                <div className="container row-1 row">
                    <div className="col-1">
                        <motion.h3
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        >My philosophy</motion.h3>
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>I'm a product designer with 3 years of experience working on incredible projects for different clients.</motion.p>
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>I grew up in the computer age and have been fascinated with technology - and all kinds of gadgets and gizmos - since I was a little kid.</motion.p>
                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>My design philosophy is straightforward: Understand your project's target audience and goals, then help your users achieve their purposes by crafting intuitive, easy-to-use interfaces that are stunning. would be highlighting the major problem solved.</motion.p>
                    </div>
                    <div className="col-2">
                        <motion.img src={profileImg}
                        alt="" 
                        loading="lazy"
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'
                        />
                    </div>
                </div>
            </div>

            <div className="goal-skills">
                <div className="row row-2 container">
                    <div className="col-1">
                        <motion.h3
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>My goals</motion.h3>

                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>My main goal is to create original and valuable products that solve problems, by including attention to detail and crafting experiences that delight clients and users. I strive to create a positive environment for collaboration with team members and other stakeholders in developing user-centered products.</motion.p>

                    </div>
                    <div className="col-2">
                        <motion.h3
                        variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>My skills</motion.h3>

                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>UI Design. I create beautifully designed interfaces that are both functional and engaging.   </motion.p>

                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>UX Design. I’m excellent at creating a clean, thoughtful User Experience that exceeds the customers’ expectations.</motion.p>

                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>Product Design. I'm solving everyday product problems with innovative design.</motion.p>

                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>User Research. I'm listening to customers and helping provide the best experience for them. </motion.p>

                        <motion.p
                        variants={variants.fadeUpDelay}
                        initial='hidden'
                        whileInView='visible'>Writing. I love to create and document helpful content that provides answers to questions from budding designers</motion.p>

                    </div>
                </div>
            </div>
            <div className="experience">
                <div className="container">
                <motion.h2
                variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>My experience</motion.h2>
                <div className="experience-list">
                    <div className="experience-row">
                        <div className="col-1">
                            <motion.h3
                            variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>Persist Ventures / Product Designer</motion.h3>
                            <motion.p
                            variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>Oct 2021-Sept 2022, Los Angeles</motion.p>
                        </div>
                        <div className="col-2">
                            <ul>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>I Drove the end-to-end design of Socialverse, using the data gotten from user research to improve the product experience by 50%. </motion.li>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'> Designed the crypto wallet system experience with a 35% decrease in time taken to deposit and withdraw funds with the Product manager and Engineering team.</motion.li>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>Created graphics and promotional content for social media platforms leading to an increase in application downloads by 20%.</motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-row">
                        <div className="col-1">
                            <motion.h3
                            variants={variants.fadeUp}
                            initial='hidden'
                            whileInView='visible'>Fastest Booking / Product Designer</motion.h3>
                            <motion.p
                            variants={variants.fadeUpDelay}
                            initial='hidden'
                            whileInView='visible'>April 2021-Oct 2021, Lagos</motion.p>
                        </div>
                        <div className="col-2">
                            <ul>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>I Redesigned the Fastest booking website and mobile site with saving booking time by 50% and increasing the site engagement from 100 to 250 daily unique visitors.</motion.li>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>Designed and conducted user research leading to improvement in product experience by 20%</motion.li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-row">
                        <div className="col-1">
                            <motion.h3
                            variants={variants.fadeUp}
                        initial='hidden'
                        whileInView='visible'>Bokeh Photogenic / Product Designer</motion.h3>
                            <motion.p
                            variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>Jan 2020-Nov 2020, Bengaluru</motion.p>
                        </div>
                        <div className="col-2">
                            <ul>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>Launched the Andriod version of Phootoshoto one of India’s leading photograghy websites leading to an increase in engagement rate by 70%. My responsibilties included wireframes, user flows, sitemaps & visual design </motion.li>
                                <motion.li
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>Created graphics and promotional content for social media platforms leading to an increase in application downloads by 50%.</motion.li>
                                
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