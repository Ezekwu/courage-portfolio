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
        h3{
            
            font-family: 'Fraunces', serif;
            font-size: 1.5rem;
        }
    }

    .projects{
        background: #242222;
        
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

    @media(max-width:850px) {

        .FAQ{
            .FAQ-flex{
                flex-direction: column;
                gap: 2rem;
                .col-1{
                    width: 100%;
                    h2{
                        font-size: 2rem;
                    }
                }
                .col-2{
                    width: 100%;
                }
            }
        }
        .articles{
            h2{
                font-size: 2rem;
            }
        }
        
    }

    @media(max-width:650px) {
        .summary{
            padding: 3rem 0;
            .summary-content{
                h3{
                    font-size: 1.3rem;
                }
            }
        }
        .FAQ{
            padding: 3rem 0;
            .FAQ-flex{
                
                .col-1{
                    h2{
                        font-size: 1.5rem;
                    }
                }
                .col-2{
                    width: 100%;
                }
            }
        }
        .articles{
            padding: 3rem 0;
            h2{
                font-size: 1.5rem;
            }
        }
        
    }

    @media(max-width:550px) {
        .summary{
            padding: 3rem 0;
            .summary-content{
                width: 100%;
                gap: 1rem;
                h3{
                    font-size: 1.2rem;
                }
            }
        }
    }
`
