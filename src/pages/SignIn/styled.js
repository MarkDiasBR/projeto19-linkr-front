import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
`

export const TitleContainer = styled.div`
    background-color: #151515;
    width: 63%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;

    & h1 {
        font-weight: 700;
        font-size: 106px;
        font-family: 'Passion One', cursive;
    }

    & p {
        font-weight: 700;
        font-size: 43px;
        font-family: 'Oswald', sans-serif;
    }
`

export const FormContainer = styled.div`
    background-color: #333;
    width: 37%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 14px;

    & input {
        padding: 10px;
        border-radius: 6px;
        border: none;
        width: 429px;
        height: 65px;
    }

    & input,
    & input::placeholder {
        color: #9f9f9f;
        font-weight: 700;
        font-size: 27px;
        font-family: 'Oswald', sans-serif; 
    }

    & button {
        color: #FFF;
        font-weight: 700;
        font-size: 27px;
        font-family: 'Oswald', sans-serif; 
        background-color: #1877F2;
        border-radius: 6px;
        border: none;
        width: 429px;
        height: 65px;
    }

    & a {
        text-decoration-color: #FFF ;
    }

    & a p {
        color: #FFF;
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 20px;
        font-family: 'Lato', sans-serif;
    }
`