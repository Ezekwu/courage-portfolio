import styled from "styled-components";

export const StyledProjectOverview = styled.div`
background: #161616;
img{
    min-width: 100%;
    margin-bottom: 1.5rem;
}

.wrapper{
    padding-top:3.8rem;   
    padding-bottom:3.8rem;
}

.design-flex{
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom:2.5rem;
    font-size: 1.5rem;
    div{
        padding: .375rem 1.875rem;
        background: #242222;

    }
}
.title{
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Fraunces', serif;
        margin-bottom: 2.5rem;
    
}
.title-casestudy{
    margin-bottom: 1.5rem;
}
.row{
    margin-bottom: 3rem;
    h3{
        margin-bottom: .5rem;
        font-size: 1.5rem;
        font-family: 'Fraunces', serif;
    }

    .list{
        margin-top: 2rem;
        p{
            margin-bottom: 1rem;
        }
        ul{
            padding-left: 2rem;
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
.last-child{
    margin-bottom: 4rem;
}

.other-projects{
    margin-top: 5rem;
    .project-title{
        font-size: 2rem;
        font-weight: bold;
        font-family: 'Fraunces', serif;
        
    }
}
.big-img{
    width: 557px;
}
.border-div{
    border-top: 1px solid #9b9b9b;
    border-bottom: 1px solid #9b9b9b;
    display: flex;
    justify-content: space-between;
    padding-right: 6rem;
    padding-top: 1rem;
    padding-bottom: 1rem;

    
}

@media(max-width:850px) {
    .border-div{
        border: none;
        padding: 0;
        flex-direction: column;
        gap: 3rem;
    }
}
`