import styled from "styled-components";

/* export const Container = styled.div`
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    padding: 16px 18px 16px 0;
    gap: 0px;
    position: relative;
`

export const MainContainer = styled.div`
` */

export const Container = styled.div`
    background-color: #1e1e1e;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    /* padding: 16px 18px 16px 0; */
    gap: 0px;
`

export const MainContainer = styled.div`
    background-color: #171717;
    border-radius: 16px;
    display: flex;
    padding: 16px 18px 16px 0;
    gap: 0px;
    position: relative;
`

export const EditDeleteContainer = styled.div`
    position: absolute;
    top: 16px;
    right: 11px;
    color: #FFFFFF;

    button {
        background-color: #171717;
        border: none;
        cursor: pointer;
    }

    svg {
        color: #FFFFFF;
        height: 19px;
        width: 19px;
    }
`

export const ContainerProfileAndLikes = styled.div`
    width: 84px;    
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    & a {
        width: 50px;
        height: 50px;
    }
    
    & img {
        width: 50px;
        height: 50px;
        object-fit: cover;
        object-position: middle middle;
        border-radius: 50%;
    }

    & div {
        width: 84px;
        display: flex;
        flex-direction: column;
        align-items: center;

        p {
        font-family: 'Lato';
        font-weight: 400;
        font-size: 11px;
        color: #FFFFFF;
        }

        button {
            cursor: pointer;
            width: 50px;
            height: 28px;
            color: #FFFFFF;
            background-color: #171717;
            border: none;
        }

        svg {
            height: 26px;
            width: 26px;
        }
    }
`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > a:first-child {
        text-decoration: none;
        width: fit-content;
        font-family: 'Lato';
        font-weight: 400;
        font-size: 19px;
        line-height: 35px;
        color: #FFFFFF;
    }

    & a {
        text-decoration: none;
    }
`

export const DescriptionContainer = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #B7B7B7;

    a {
        /* font-size: 17px; */
        font-weight: 700;
        color: #FFFFFF;
        text-decoration: none;
    }
`

export const LinkContainer = styled.div`
    width: 100%;
    height: 155px;
    border: 1px solid #4D4D4D;
    border-radius: 11px;
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 20px;
`

export const ThumbContainer = styled.div`
    img {
        width: 155px;
        height: 155px;
        object-fit: cover;
        object-position: center center;
    }
`

export const LinkTitleContainer = styled.h1`
    font-family: 'Lato';
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: #CECECE;
`

export const LinkDescriptionContainer = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #9B9595;
`

export const LinkUrlContainer = styled.p`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 13px;
    color: #CECECE;
`

export const CommentsContainer = styled.div`
    background-color: #1e1e1e;
    border-radius: 0 0 16px 16px;
    padding: 0 20px;
`

export const CommentContainer = styled.div`
    padding: 13px 0;
    display: flex;
    gap: 18px;
    border-bottom: 1px solid #353535;

    img {
        width: 39px;
        height: 39px;
        object-fit: cover;
        object-position: middle middle;
        border-radius: 50%;
    }
`

export const CommentMainContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;

    h1 {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        color: #F3F3F3;

        a {
            width: fit-content;
            height: fit-content;
            text-decoration: none;
            font-family: 'Lato';
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 17px;
            color: #F3F3F3;
        }

        span {
            font-family: 'Lato';
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            line-height: 17px;
            color: #565656;
        }
    }

    p {
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: #ACACAC;

        a {
            font-weight: 700;
            text-decoration: none;
            color: #F3f3f3;
        }
    }
`

export const InputCommentContainer = styled.div`
    display: flex;
    gap: 14px;
    padding: 20px 0 25px;

    & > a {
        width: 39px;
        height: 39px;
    }

    img {
        width: 39px;
        height: 39px;
        object-fit: cover;
        object-position: middle middle;
        border-radius: 50%;
    }

    form {
        min-height: 39px;
        position: relative;
        width: 100%;
        display: flex;
        
        textarea {
            background: #252525;
            border-radius: 8px;
            border: none;
            width: 100%;
            outline: none;
            padding: 11px 39px 0px 15px;
            font-family: 'Lato';
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
            color: #f3f3f3;
            resize: none;
            height: auto;
            min-height: 39px;
            max-height: 200px;
            overflow-y: hidden;

            &::-webkit-scrollbar {
                width: 0;
            }
            
            &::placeholder {
                font-family: 'Lato';
                font-style: italic;
                font-weight: 400;
                font-size: 14px;
                line-height: 14px;
                letter-spacing: 0.05em;
                color: #575757;
            }
        }

        button {
            align-self: flex-end;
            background: #252525;
            width: 39px;
            height: 39px;
            border-radius: 0 8px 8px 0;
            border: none;
            position: absolute;
            right: 0px;

            svg {
                width: 16px;
                height: 16px;
                color: #F3F3F3;
            }
        }
    }
`