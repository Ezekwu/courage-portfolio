import styled from "styled-components";

export const StyledAboutme = styled.div`
& > div{
    padding: 4rem 0;
}
.row{
    display: flex;
    align-items: flex-start;
}
h3{
    font-size: 1.5rem;
    margin-bottom: 1rem;
    font-family: 'Fraunces', serif;
}

.philosopy{
    background: #161616;
    p{
    margin-bottom: 1.5rem;
    }
    .row-1{
        gap: 7rem;
        .col-1{
            width: 55%;
        }
        .col-2{
            width: 50%;
        }
    }
}

.goal-skills{
    background: #242222;
    p{
        margin-bottom: 1.5rem;
    }
    .row-2{
        gap: 1.375rem;
        .col-1{
            width: 50%;
        }
        .col-2{
            width: 50%;
        }
    }
}
.experience{
    background: #161616;
    h2{
            margin-bottom: 5rem;
            font-size: 2rem;
            font-family: 'Fraunces', serif;
        }
    .experience-row{
        display: flex;
        align-items: flex-start;
        margin-bottom: 5rem;
        gap: 5rem;
        
        h3{
            margin-bottom: .5rem;
        }
        .col-1{
            width: 40%;
        }
        .col-2{
            width: 60%;
            
            li{
                margin-bottom: 1.5rem;
                list-style-type: square;
                padding-left: .6rem;
            }
            li::marker{
                
                font-size: .55rem;
            }
        }
    }
}
@media(max-width:850px) {
    & > div{
        padding: 3rem 0;
    }
    
    .philosopy{
        .row-1{
        flex-direction: column;
        gap: 3rem;
        .col-1{
            width: 100%;
        }
        .col-2{
            img{
                width: 100%;
            }
            
            width:100%
            
        }
    }
    }
    .goal-skills{
        .row-2{
            flex-direction: column;
        .col-1{
            width: 100%;
        }
        .col-2{
            width: 100%;
        }
    }
    }

    .experience{
        
    h2{
            margin-bottom: 3rem;
        }
    .experience-row{
        flex-direction: column;
        margin-bottom: 3rem;
        gap: 2rem;
        
        h3{
            margin-bottom: .5rem;
        }
        .col-1{
            width: 100%;
        }
        .col-2{
            width: 100%;
            
            ul{
                padding-left: 2rem;
                li{
                margin-bottom: 1.5rem;
                list-style-type: square;
                padding-left: .6rem;
            }
            }
            
            li::marker{
                
                font-size: .55rem;
            }
        }
    }
}
}

`