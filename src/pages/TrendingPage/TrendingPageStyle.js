import styled from "styled-components";

export const TrendingTags = styled.div`
    margin-top: 22px;
    margin-left: 16px;
        a{
        color: #FFFFFF;
        text-decoration: none;
        &:link, &:visited {
            color: none;
            text-decoration: none;
            cursor: none;
        }

        &:link:active, &:visited:active {
            color: none;
        }
}
`;

export const TrendingTitle = styled.div`
    font-family: 'Oswald';
    font-style: normal;
    font-weight: 700;
    font-size: 27px;
    line-height: 40px;
    color: #FFFFFF;
    margin-top: 9px;
    padding-left: 16px;
    padding-bottom: 12px;
    border-bottom: 1px solid #484848;
`;

export const TrendingTag = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    letter-spacing: 0.05em;
    color: #FFFFFF;
    margin-bottom: 7px;
    cursor: pointer;
`;

export const TrendingContainer = styled.div`
    width: 301px;
    height: 406px;
    background: #171717;
    /*background: red;*/
    border-radius: 16px;
    margin-top: 170px;
`;

export const TimeLineTitle = styled.h1`
    color: white;
    font-size: 49px;
    font-family: 'Oswald', sans-serif;
    margin-bottom: 43px;
    align-self: flex-start;
`;

export const Loading = styled.h1`
    color: white;
    font-size: 49px;
    font-family: 'Oswald', sans-serif;
    text-align: center;
    margin-top: 100px;
`;

export const TimeLineContainer = styled.div`
    width: 611px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /*margin: auto;*/
    margin-top: 78px;
    margin-bottom: 29px;
    margin-right: 25px;
`;

export const TrendingPageContainer = styled.div`
    display: flex;
    justify-content: center;
`;