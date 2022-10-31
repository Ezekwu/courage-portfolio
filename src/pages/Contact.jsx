import Header from "../components/layout/Header"
import Button from "../components/layout/Button"
import { StyledContact } from "../components/styles/ContactStyled"
const Contact = () => {
    return (
        <div>
            <Header  type='link' content='Let’s work together'/>
            <StyledContact>
                <div className="flex container">
                    <div className="card">
                        <p>I’m currently available to take on new projects, so feel free to find a spot in my calendar for a meeting where we can talk about everything related to your project</p>
                        <Button content='Book Meeting' link='https://calendly.com/courageegbude/30min'/>
                    </div>
                    <div className="details">
                        <div className="row">
                            <h3>PREFER EMAIL?</h3>
                            <a href="mailto:tobiegbude@gmail.com">tobiegbude@gmail.com</a>
                        </div>
                        <div className="row">
                            <h3>PREFER CALL?</h3>
                            <a href="">+2347069591813</a>
                            
                        </div>
                    </div>
                </div>
            </StyledContact>
        </div>
    )
}

export default Contact