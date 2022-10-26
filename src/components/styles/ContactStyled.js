import styled from "styled-components";

export const StyledContact = styled.main`
    background: #161616;
    padding: 3.8rem 0  10rem;
    h3{
        margin-bottom: .4rem;
    }

    

    .row{
        margin-bottom: 2.5rem;
    }
    
    .flex{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        
        .card{
            width: 48%;
            background: #242222;
            padding: 2.5rem 1.25rem  4rem; 
            border-radius: 16px;
            p{
                margin-bottom: 4rem;
            }
        }
        .details{
            padding-right: 6rem;
            a{
                text-decoration: none;
                font-size: 1.5rem;
            }
        }
    }

    
`