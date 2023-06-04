import styled from "styled-components";

export const LinkPhoto = styled.img`
    width: 155px;
    height: 155px;
    object-fit: cover; 
    border-radius: 0px 12px 13px 0px;
`;

export const Post = styled.div`
    display: flex;
    width: 611px;
    height: 276px;
    background: #171717;
    border-radius: 16px;
    /*margin-top: 29px;*/
    margin-bottom: 16px;
`;

export const LinkUrl = styled.h3`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
    margin-top: 15px;
`;

export const LinkSummary = styled.h2`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
`;

export const LinkTitle = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
    margin-bottom: 5px;
`;

export const LinkData = styled.div`
    margin-left: 20px;
    margin-top: 24px;
    margin-bottom: 23px;
    margin-right: 27px;
`;


export const LinkContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 503px;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    margin-top: 10px;
    background: none;
`;

export const PostSubtitle = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;
    margin-top: 10px;
`;

export const PostTitle = styled.h1`
    margin-top: 19px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #FFFFFF;
`;

export const PostsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const UserPhoto = styled.img`
    width: 50px;
    height: 50px;
    object-fit: cover; 
    border-radius: 50%;
    margin-top: 16px;
    margin-left: 18px;
    margin-right: 18px;
`;

export const PostData = styled.div`
    display: flex;
    flex-direction: column;
`;