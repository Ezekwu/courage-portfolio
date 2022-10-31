import { StyledCustomCursor } from "../styles/CustomCusorStyled"
import { useRef, useEffect } from "react"
const CustomCusor = () => {
    const cursorRef = useRef(0)
    useEffect(()=>{
        document.addEventListener('mousemove', (e) => {
            const {clientX, clientY} = e
            const mouseX = clientX - cursorRef.current.clientWidth / 2
            const mouseY = clientY - cursorRef.current.clientHeight /2
            cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0 )`

        })
    }, [])
    return (
        <StyledCustomCursor ref={cursorRef}>

        </StyledCustomCursor>
    )
}

export default CustomCusor