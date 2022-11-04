import { StyledProject } from "../styles/ProjectStyle"
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { variants } from "../variants/variants";

const Projects = ({projectData}) => {
    console.log(projectData);
    return (
        <StyledProject>
            <div className=" wrapper-grid">
                
                    {projectData.map((project) => (
                        <Link to={project.link}>
                            <div className="project-item">
                                <motion.img 
                                src={project.image} alt="" 
                                loading="lazy"
                                variants={variants.fadeUp}
                                initial='hidden'
                                whileInView='visible'
                                />
                                <motion.div 
                                className="title"
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'
                                ><span>{project.icon}</span> <p>{project.title}</p></motion.div>
                                <motion.p 
                                className="description"
                                variants={variants.fadeUpDelay}
                                initial='hidden'
                                whileInView='visible'>{project.description}</motion.p>
                            </div>
                        </Link>
                        
                    ))}
                
                
            </div>
            
        </StyledProject>
    )
}

export default Projects