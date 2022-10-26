import styled from "styled-components";
export const StyledProject = styled.div`
padding: 3.8rem 0;

img{
    /* height: 400px; */
    margin-bottom: .8rem;
    
}
.wrapper-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
}

.project-item{
    margin-bottom: .5rem;
    .title{
        font-family: 'Fraunces', serif;
        font-weight: 300;
        margin-bottom: .5rem;
        display: flex;
        align-items: center;
        p, span{ 
            font-size: 1.5rem;
        }
    }
    .description{
        width: 90%;
    }
}
`