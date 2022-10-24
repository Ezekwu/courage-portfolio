import styled from "styled-components";

export const StyledHomepage =  styled.div`
    
    .summary{
        background: #161616;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6.25rem 0;
    }
    .summary-content{
        width: 80%;
        max-width: 1000px;
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    .projects{
        background: #242222;
        padding: 3.8rem 0;
    }

    .FAQ{
        background: #161616;
        padding: 3.8rem 0;
        
        .FAQ-flex{
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            .col-1{
                h2{
                    font-family: 'Fraunces', serif;
                    font-weight: bold;
                    font-size: 2.5rem;
                }
            }
            .col-2{
                width: 60%;
            }
        }
        
    }
    .articles{
        background: #161616;
        padding: 3.8rem 0;
        h2{
            font-family: 'Fraunces', serif;
            font-weight: bold;
            font-size: 2.5rem;
            margin-bottom: 2rem;
            }
    }
`
