import { StyledProject } from "../styles/ProjectStyle"
const Projects = ({projectData}) => {
    console.log(projectData);
    return (
        <StyledProject>
            <div className="container wrapper-grid">
                {projectData.map((project) => (
                    <div className="project-item">
                        <img src={project.image} alt="" />
                        <div className="title"><span>{project.icon}</span> <p>{project.title}</p></div>
                        <p className="description">{project.description}</p>
                    </div>
                ))}
            </div>
            
        </StyledProject>
    )
}

export default Projects