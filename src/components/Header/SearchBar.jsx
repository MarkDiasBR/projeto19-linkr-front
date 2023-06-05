import { useRef, useState, useEffect } from "react";
//import styled from "styled-components";
import axios from "axios";
import { AiOutlineSearch } from "react-icons/ai";
import { SearchContainer, SearchIcon, SearchInput, DropdownContainer } from "./SearchBarStyle";

export default function SearchBar() {
    const [searchNick, setSearchNick] = useState("");
    const dropdownRef = useRef();
    const debounceTimeoutRef = useRef(null);
    //const [isOpen, setIsOpen] = useState(false);
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