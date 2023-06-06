import styled from "styled-components";

export const Container = styled.div`
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 950px;
`

export const TitleContainer = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    align-items: center;

    & p {
        color: #fff;
        font-family: 'Oswald';
        font-weight: 700;
        font-size: 43px;
    }
`

export const ContentContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
`

export const PostsContainer = styled.div`
    width: 66%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-bottom: 40px;
`
export const TrendingContainer = styled.div`
    height: fit-content;
    width: 31%;
`