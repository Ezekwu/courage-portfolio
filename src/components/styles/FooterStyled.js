import styled from "styled-components";

export const StyledFooter = styled.footer`
background: #242222;
padding: 3.5rem 0;
a{
    text-decoration: none;
}
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
@media(max-width:850px) {
    a, p{
        font-size: 0.85rem;
    }
    .wrapper{
        .col-1{
        h3{
            font-size: 2rem;
            
        }
    }
    }
    
}

@media(max-width:650px) {
    padding: 2.5rem 0;
    .wrapper{
        flex-direction: column-reverse;
        gap: 2rem;
        justify-content: space-between;
        .col-1{
        h3{
            font-size: 1.5rem;
        }
    }
    }
}
`