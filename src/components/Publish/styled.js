import styled from "styled-components";

export const Container = styled.div`
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 16px;
    display: flex;
    padding: 16px 18px;
    gap: 18px;

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
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 7px;

    & p {
        font-family: 'Lato';
        font-weight: 300;
        font-size: 20px;
        line-height: 35px;
        color: #707070;
    }

    & input {
        padding: 5px 13px;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 15px;
        height: 30px;
        background-color:  #EFEFEF;
        border-radius: 5px;
        border: none;
        outline: none;
    }

    & input::placeholder {
        color: #949494;
    }

    & textarea {
        padding: 5px 13px;
        font-family: 'Lato';
        font-weight: 300;
        font-size: 15px;
        line-height: 18px;
        height: 66px;
        background-color:  #EFEFEF;
        border-radius: 5px;
        border: none;
        resize: none;
        outline: none;
    }

    & textarea::placeholder {
        color: #949494;
    }

    & button {
        align-self: flex-end;
        width: 100px;
        height: 30px;
        background: #1877F2;
        border: none;
        border-radius: 5px;
        font-family: 'Lato';
        font-weight: 700;
        font-size: 14px;
        color: #FFFFFF;
    }
`