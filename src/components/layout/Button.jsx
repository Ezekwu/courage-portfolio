import GradientImg from '../../assets/images/hero-gradient.png'
import { StyledButton } from '../styles/ButtonStyled'
const Button = ({ content }) => {
    return (
        <StyledButton 
        href=""
        style={{
            background: `url(${GradientImg}) `,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
        }}>{content}</StyledButton>
    )
}

export default Button