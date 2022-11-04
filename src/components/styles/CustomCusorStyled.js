import styled from "styled-components";
export const StyledCustomCursor = styled.div`
z-index: 1000;
border-radius: 50%;
width: 20px;
height: 20px;
border: 2px solid white;
pointer-events: none;
overflow: hidden;
transform: translate3d(0,0,0);
position: fixed;

@media(max-width: 850px) {
    display: none;
}
`