import styled from "styled-components";

export const SearchContainer = styled.div`
    display: flex;
`;

export const SearchIcon = styled.div`
    height: 45px;
    background: #FFFFFF;
    /*border-radius: 8px;*/
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 15px;
`;

export const SearchInput = styled.input`
    width: 563px;
    height: 45px;
    background: #FFFFFF;
    /*border-radius: 8px;*/
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    border: none;
    color: black;
    text-indent: 10px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    &::placeholder{
        color: #C6C6C6;
        padding: 17px;
        font-family: 'Lato';
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        line-height: 23px;
    }
    &:focus{
        outline:none;
    }
`;

export const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 13px;
`;