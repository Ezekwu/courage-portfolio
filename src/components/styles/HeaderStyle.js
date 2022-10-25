import styled from "styled-components";

export const StyledHeader = styled.header`
color: #fff;




//HOME PAGE HEADER
.homepage-h1{
    margin-top: 4rem;
    margin-bottom: 1rem;
    width: 55%;
    font-size: 3.3rem;
    font-weight: bold;
    font-family: 'Fraunces', serif;
    line-height: 4rem;
}

.img-container{
    display: flex;
    justify-content: flex-end;
    padding-bottom: 4rem;
    img{
    width: 130px;
    height: 130px;
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

`