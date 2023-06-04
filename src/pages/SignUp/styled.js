import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 30px;
        background-color: #333;
    }
`

export const TitleContainer = styled.div`
    background-color: #151515;
    width: 63%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        padding-top: 10px;
        align-items: flex-start;
        width: 100vw;
        height: 240px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
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
        line-height: 117px;
        letter-spacing: 0.05em;
    }

    & p {
        font-weight: 700;
        font-size: 43px;
        font-family: 'Oswald', sans-serif;
        line-height: 64px;
    }

    @media (max-width: 768px) {
        & h1 {
            font-size: 76px;
            line-height: 84px;
            align-self: center;
        }

        & p {
            font-size: 23px;
            line-height: 34px;
            align-self: center;
        }
    }
`

export const FormContainer = styled.div`
    background-color: #333;
    width: 37%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100vw;
        align-items: flex-start;
    }
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
        color: #000;
        font-weight: 700;
        font-size: 27px;
        font-family: 'Oswald', sans-serif; 
        transition: all 0.1s ease-in-out;
    }

    & input::placeholder {
        color: #9f9f9f;
    }

    & button {
        color: #FFF;
        font-weight: 700;
        font-size: 27px;
        font-family: 'Oswald', sans-serif; 
        /* background-color: ${props=>props.buttonColor}; */
        background-color: blue;
        transition: all 0.1s ease-in-out;
        border-radius: 6px;
        border: none;
        width: 429px;
        height: 65px;
    }

    &:invalid > button  {
        background-color: #BDDDF9;
        transition: all 0.1s ease-in-out;
    }

    & > button:disabled {
        background-color: #062B5C;
        transition: all 0.1s ease-in-out;
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
    
    & div {
        position: relative;
    }

    & div button {
        position: absolute;
        background-color: transparent;
        color: #000;
        right: 0px;
        width: 50px;
    }

    & div button.invisible {
        display: none;
    }

    & div button svg {
        pointer-events: none;
    }

    & div input {
        padding-right: 50px;
    }

    @media (max-width: 1300px) {
        & input {
            width: 33vw;
        }

        & button {
            width: 33vw;
        }

        @media (max-width: 768px) {
            width: 100%;
            gap: 10px;

            & input,
            & div,
            & button {
                width: 90%;
            }

            & div input {
                width: 100%;
            
            }
        }
    }
`