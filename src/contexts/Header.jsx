import styled from "styled-components";
import socrates from "../assets/socratesazul-cke.jpg"
import { IoIosArrowDown } from "react-icons/io";

//import { FaBeer } from 'react-icons/fa';
//class Question extends React.Component {
//  render() {
//    return <h3> Lets go for a <IoIosArrowDown />? </h3>
//  }



export default function Header() {
    return (
        <>
            <HeaderContainer>
                <TextLogo>linkr</TextLogo>
                <LogoutContainer>
                    <IoIosArrowDown style={{ color: "white", fontSize: "32px", marginTop: "20px" }} />
                    <UserImg src={socrates} alt="socrates" />
                </LogoutContainer>
            </HeaderContainer>
        </>
    );
}

const LogoutContainer = styled.div`
    display: flex;
`;

const UserImg = styled.img`
    width: 53px;
    height: 53px;
    object-fit: cover; 
    border-radius: 50%;
    margin-top: 10px;
    margin-right: 17px;
    margin-left: 17px;
`;

const TextLogo = styled.h1`
    color: white;
    font-family: 'Passion One', cursive;
    font-size: 49px;
    margin-top: 10px;
    margin-left: 28px;
`;

const HeaderContainer = styled.header`
    width: 100%;
    height: 72px;
    background-color: #151515;
    /*background-color: red;*/
    display: flex;
    justify-content: space-between;
`;