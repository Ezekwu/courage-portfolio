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

    @media(max-width:950px) {
        .flex{
            flex-direction: column;
            gap: 3rem;
        
        .card{
            width: 70%;
            
            p{
                margin-bottom: 4rem;
            }
        }
        .details{
            padding-right: 0rem;
            a{
                font-size: 1.5rem;
            }
        }
    }
    }

    @media(max-width:850px) {
        padding: 3rem 0 4rem;

        .flex{
            .details{
            a{
                font-size: 1.3rem;
            }
        }
        }
        
    }
    @media(max-width:550px) {
        .flex{
            .card{
                width:100%;
                p{
                    margin-bottom: 2rem;
                }
            }
        }
        
    }
`