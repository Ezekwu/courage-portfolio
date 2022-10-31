import styled from "styled-components";

export const StyledHeader = styled.header`
color: #fff;

// padding-bottom: 5rem;


//HOME PAGE HEADER
.homepage-h1{
    margin-top: 4rem;
    margin-bottom: 1rem;
    width: 55%;
    font-size: 3.3rem;
    font-weight: bold;
    font-family: 'Fraunces', serif;
    line-height: 4rem;
    margin-bottom: 4rem;
}

.img-container{
    display: flex;
    justify-content: flex-end;
    img{
    width: 130px;
    height: 130px;
    }
}
.start-project{
    padding-bottom:4.8rem;
    a{
        background-color: white;
        color: black;
        text-decoration: none;
        visibility: hidden;
        padding: 1.2rem 5rem;
        border-radius: 50px;
    }
}

.link-h2{
    padding: 2rem 0;
    h2{
        border-bottom: 1px solid #9b9b9b;
        padding-bottom: 2rem;
        font-size: 2.5rem;
        font-weight: bold;
        font-family: 'Fraunces', serif;
    }
}

.about{
    text-align: center;

    h1{
        font-size: 3.3rem;
        font-weight: bold;
        font-family: 'Fraunces', serif;
        line-height: 4rem;
        margin: 5rem 0;
        
    }
    p{
        font-size: 1.3rem;
        padding-bottom: 6.8rem;
    }
}

@media(max-width:1052px){
    
    .homepage-h1{
        width: 70%;
        font-size: 3rem;
    }
    .about{
        h1{
            font-size: 3rem;
        }
    }
    .link-h2{
        h2{
            font-size: 2rem;
        }
    }
}

@media (max-width:850px) {
    .homepage-h1{
        width: 70%;
        font-size: 2.5rem;
        margin-top: 2rem;
    }
    .img-container{
        display: none;
    }
    .start-project{
        a{
            visibility: visible;
        }
    }
    .about{
        h1{
            font-size: 2.5rem;
        }
    }
    .link-h2{
        h2{
            font-size: 2rem;
        }
    }
}

@media(max-width:650px) {
    .homepage-h1{
        width: 70%;
        font-size: 2rem;
        margin-top: 2rem;
        line-height: 2.3rem;
    }
    .about{
        h1{
            font-size: 2rem;
            line-height: 2.3rem;
        }
        p{
            font-size: .857rem;
        }
    }
}

@media(max-width:550px) {
    .homepage-h1{
        width: 80%;
        font-size: 2rem;
        margin-top: 2rem;
        line-height: 2.3rem;
    }
    .start-project{
        a{
            padding: .8rem 3.5rem;
        }
    }
}

@media(max-width:450px) {
    .homepage-h1{
        width: 100%;
    }
}
`