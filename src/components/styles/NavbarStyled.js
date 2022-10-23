import styled from "styled-components";

export const StyledNavbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 1rem;
padding-bottom: 1rem;

.logo{
    font-size: 2rem;
}
ul{
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    li{
        font-size: 1rem;
    }
}
`