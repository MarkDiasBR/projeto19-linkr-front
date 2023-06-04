import styled from "styled-components";

export const PublishContainer = styled.div`
    width: 611px;
    height: 209px;
    /*min-height: 209px; Altura mínima desejada
    height: auto;*/
    border-radius: 16px;
    background-color: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    display: flex;
    margin-bottom: 29px;
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

export const PublishData = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 21px;
`;

export const PublishText = styled.h2`
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 20px;
    line-height: 24px;
    color: #707070;
`;

export const InputLink = styled.input`
    margin-top: 16px;
    width: 503px;
    height: 30px;
    background: #EFEFEF;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 15px;
    line-height: 18px;
    color: black;
    padding: 5px;
    border: none;
    outline: none;    
    &::placeholder {
        color: #949494;
    }
`;

export const TextArea = styled.textarea`
    margin-top: 5px;
  width: 503px;
  /*min-height: 30px;
  height: auto;*/
  height: 66px;
  background: #EFEFEF;
  border-radius: 5px;
  font-family: 'Lato', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 18px;
  color: black;
  padding: 5px;
  border: none;
  resize: none;
  outline: none;
    &::placeholder {
    color: #949494;
    }
`;

export const PublishButton = styled.button`
    margin-top: 5px;
    width: 112px;
    height: 31px;
    background: #1877F2;
    border-radius: 5px;
    color: white;
    align-self: flex-end;
    border: none;
`;