import { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContainer, SearchIcon, SearchInput, DropdownContainer } from "./SearchBarStyle";

export default function SearchBar() {
    const [searchNick, setSearchNick] = useState("");
    const debounceTimeoutRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [searchResult, setSearchResult] = useState([]);
    //const test1DropDown = [{ urlp: "https://static.todamateria.com.br/upload/mi/ch/michelangelo-og.jpg", username: "JOAZINHO" }, { urlp: "https://aventurasnahistoria.uol.com.br/media/_versions/legacy/2017/04/15/davinciandndn", username: "JOAZÃO" }, { urlp: "https://static.todamateria.com.br/upload/do/na/donatello-cke.jpg", username: "JOAO" }];
    //const test2DropDown = [{ urlp: "https://static.todamateria.com.br/upload/mi/ch/michelangelo-og.jpg", username: "JOAZINHO" }, { urlp: "https://aventurasnahistoria.uol.com.br/media/_versions/legacy/2017/04/15/davinciandndn", username: "JOAZÃO" }]
    //const test3DropDown = [{ urlp: "https://aventurasnahistoria.uol.com.br/media/_versions/legacy/2017/04/15/davinciandndn", username: "JOAZÃO" }]

    //function searchNickFunction(e) {
    //    const newWord = e;
    //    setSearchNick(newWord);
    //    if (newWord.length >= 3) {
    //    }
    //}

    useEffect(() => {
        let actualSearchResult = ([]);
        const config = {
            headers: {
                Authorization: "Bearer f5e16715-b3b3-43eb-a575-c612106a1085",
            },
        };
        if (searchNick.length >= 3) {
            if (debounceTimeoutRef.current) {
                clearTimeout(debounceTimeoutRef.current);
            }

            debounceTimeoutRef.current = setTimeout(() => {
                debounceTimeoutRef.current = null;
                // Realizar ação desejada após o debounce (por exemplo, fazer uma requisição de busca)
                axios.post('http://localhost:5000/search', {

                    searchThis: searchNick

                }, config)
                    //axios.get('http://localhost:5000/search', {

                    //    searchThis: searchNick

                    //}, config)
                    .then((res) => {
                        console.log(res.data);
                        actualSearchResult = res.data;
                        setSearchResult(actualSearchResult);
                        console.log(res.data.length);
                        console.log(!!res.data.length);
                        if (res.data.length) {
                            setIsOpen(true);
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });

                console.log("Usuário ficou 300ms sem digitar e com 3+ caracteres");
            }, 300);


            return () => {
                clearTimeout(debounceTimeoutRef.current);
            };
        }
        else {
            setIsOpen(false);
        }
    }, [searchNick]);
    return (
        <DropdownContainer>
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
                <DropdownOptions displayDropdown={isOpen}>
                    {searchResult.map((asr, index) => {
                        console.log("isOpen", isOpen);
                        return (
                            <SearchedUserContainer key={index}>
                                <SearchedUserIcon src={asr.urlp} alt={asr.username} />
                                <SearchedUserUsername>{asr.username}</SearchedUserUsername>
                            </SearchedUserContainer>
                        );
                    })}
                </DropdownOptions>
            </SearchContainer>
        </DropdownContainer>
    );
}

const SearchedUserContainer = styled.div`
    display: flex;
    background: #E7E7E7;
    margin-top: 16px;
    align-items: center;
    cursor: pointer;
`;

const SearchedUserUsername = styled.h1`
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #515151;
    margin-left: 15px;
`;

const SearchedUserIcon = styled.img`
    width: 39px;
    height: 39px;
    border-radius: 50%;
`;

const DropdownOptions = styled.div`
  display: ${(props) => (props.displayDropdown ? 'flex' : 'none')};
  flex-direction: column;
  padding-left: 17px;
  padding-bottom: 23px;  
  margin-top: -20px;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  list-style-type: none;
  /*padding: 0;*/
  /*margin: 0;*/
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background: #E7E7E7;
`;