import styled from "styled-components";

export const StyledNavbar = styled.nav`
display: flex;
justify-content: space-between;
align-items: center;
padding-top: 1rem;
padding-bottom: 1rem;
a{
    text-decoration:none;
    
}

.logo a{
    font-size: 2rem;
    z-index: 2;
}
.mobile-nav {
    text-align: center;
    display: none;
    list-style-type: none;
    position: fixed;
    background: #0A0A0A;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    li{
        
        
        a{
            font-size: 2rem;
            font-family: 'Fraunces', serif !important;
            font-weight: bold;
        }
    }
}
.desktop-nav{
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 1.3rem;
    li{
        font-size: 1rem;
    }
}
.hamburger-menu{
    display: none;
    z-index: 2;
    cursor: pointer;
    i{
        font-size: 1.5rem;
    }
}

@media(max-width:850px){
    .hamburger-menu{
        display: block;
    }
    .desktop-nav{
        display: none;
    }
    .mobile-nav {
    display: flex;
    align-items: center;
    justify-content: center;
    transform: translateX(-100%);
    transition: all .2s ease-in-out;
    li{
        margin-bottom: 2rem;
    }
}
.show-menu{
    transform: translateX(0%);
    transition: all .2s ease-in-out;

}
}
`