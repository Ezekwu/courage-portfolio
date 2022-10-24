import styled from "styled-components";

export const StyledArticles = styled.div`


&>div{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.3rem;
    row-gap: 6.8rem;
}
a{
    text-decoration: none;
    img{
        margin-bottom: 2rem;
    }
    .title{
        font-size: 1.5rem;
        margin-bottom: .75rem;
    }
    .description{
        margin-bottom: .75rem;
    }

    .date-readtime{
        display: flex;
        gap: 1rem;
    }
}
`