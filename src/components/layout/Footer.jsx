import { StyledFooter } from "../styles/FooterStyled"
const Footer = () => {
    return (
        <StyledFooter>
            <div className="container wrapper">
                <div className="col-1">
                    <h3>Courage Egbude</h3>
                    <p>2022. Built by Courage Egbude</p>
                </div>
                <div className="col-2">
                    <div className="row-1">
                        <ul>
                            <li>Home</li>
                            <li>Projects</li>
                            <li>About me</li>
                            <li>Writing</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className="row-2">
                        <ul>
                            <li>Resume</li>
                            <li>Twitter</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                </div>
            </div>
        </StyledFooter>
    )
}

export default Footer