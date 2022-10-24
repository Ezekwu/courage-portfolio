import styled from "styled-components";

export const StyledFooter = styled.footer`
background: #242222;
padding: 3.5rem 0;
.wrapper{
    display: flex;
    justify-content: space-between;

    .col-1{
        h3{
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }
    }

    .col-2{
        padding-right: 5rem;
        display: flex;
        gap: 6rem;
        ul{
            list-style-type: none;

            li{
                margin-bottom: 0.3rem;
            }
        }
    }
}
`