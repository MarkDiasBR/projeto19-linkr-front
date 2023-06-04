import styled from "styled-components";

export const Container = styled.div`
    background-color: #151515;
    height: 68px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 15px;
    position: relative;

    & h1 {
        color: #fff;
        font-family: 'Passion One';
        font-weight: 700;
        font-size: 46px;
        line-height: 54px;
        letter-spacing: 0.05em;
    }

    & button {
        background-color: #151515;
        border: none;
        display: flex;
        justify-content: space-between;
        gap: 10px;
        align-items: center;
        height: 62px;

        img {
            height: 50px;
            width: 50px;
            border-radius: 50%;
            object-fit: cover;
            position: center center;
        }

        svg {
            stroke-width: 20px;
            width: 20px;
            height: 20px;
            color: #fff;
        }
    }

    & div {
        position: absolute;
        right: 0px;
        top: 68px;
        color: #fff;
        background-color: #171717;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 120px;
        height: 47px;
        border-radius: 0 0 0 20px;
        font-family: 'Lato', 'sans-serif';
        font-weight: 700;
        font-size: 17px;
        letter-spacing: 0.05em;
    }
`