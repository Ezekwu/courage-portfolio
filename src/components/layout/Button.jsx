import GradientImg from '../../assets/images/hero-gradient.png'
import { StyledButton } from '../styles/ButtonStyled'
const Button = ({ content, link }) => {
    return (
        <StyledButton 
        href={link}
        target='_blank' 
        rel="noreferrer"
        style={{
            background: `url(${GradientImg}) `,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover'
        }}>{content}</StyledButton>
    )
}

export default Button