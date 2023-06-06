import styled from "styled-components";

export const Container = styled.div`
    background-color: #171717;
    border-radius: 16px;

    & > p {
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 27px;
        line-height: 44px;
        color: #FFFFFF;
        border-bottom: 1px solid #484848;
        padding: 9px 18px;
    }
`

export const TagsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 18px;
    
    & p {
        font-family: 'Lato';
        font-weight: 700;
        font-size: 19px;
        line-height: 23px;
        letter-spacing: 0.05em;
        color: #FFFFFF;
    }
`