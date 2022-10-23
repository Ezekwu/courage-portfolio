import styled from "styled-components";
export const StyledAccordion = styled.div`
border-top: 1px solid white;
padding-top: 1.5rem;

.item{
    border-bottom: 1px solid white;
    padding-bottom: 1.5rem;
    margin-bottom: 1.5rem;
    
    .title{
        margin-bottom: 0.75rem;
        display: flex;
        cursor: pointer;
        justify-content: space-between;
        align-items: center;
        h3, span{
            font-size: 1.5rem;
        }
        span{
            transition: all .7s cubic-bezier(0,1,0,1);
        }
        .rotate{
            transform: rotate(45deg);
            transition: all .2s cubic-bezier(1,0,1,0);
        }
    }
    .content{
        max-height: 0;
        overflow: hidden;
        transition: all .5s cubic-bezier(0,1,0,1);
    }

    .show-content{
        max-height: 9999px;
        transition: all .5s cubic-bezier(1,0,1,0);
    }
}

`