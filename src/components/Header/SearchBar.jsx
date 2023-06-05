import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchBar() {
    const [searchNick, setSearchNick] = useState("");
    const dropdownRef = useRef();
    const debounceTimeoutRef = useRef(null);

    //function searchNickFunction(e) {
    //    const newWord = e;
    //    setSearchNick(newWord);
    //    if (newWord.length >= 3) {
    //    }
    //}

    useEffect(() => {
        if (searchNick.length >= 3) {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }

            debounceTimeoutRef.current = setTimeout(() => {
                debounceTimeoutRef.current = null;
                // Realizar ação desejada após o debounce (por exemplo, fazer uma requisição de busca)
                console.log("Usuário ficou 300ms sem digitar e com 3+ caracteres");
            }, 300);


            return () => {
                clearTimeout(debounceTimeoutRef.current);
            };
        }
    }, [searchNick]);
    return (
        <DropdownContainer ref={dropdownRef}>
            <SearchContainer>
                <SearchInput
                    type="text"
                    placeholder="Search for people"
                    //onClick={handleDropdown}
                    value={searchNick}
                    //onChange={(e) => setSearchNick(e.target.value)}
                    onChange={(e) => setSearchNick(e.target.value)}
                />
                <SearchIcon><AiOutlineSearch style={{ height: "30px", width: "30px", color: "#C6C6C6" }} /></SearchIcon>
            </SearchContainer>
        </DropdownContainer>
    );
}

const SearchContainer = styled.div`
    display: flex;
`;

const SearchIcon = styled.div`
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

const SearchInput = styled.input`
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

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin-top: 13px;
`;