import socrates from "../assets/socratesazul-cke.jpg"
import { IoIosArrowDown } from "react-icons/io";
import { HeaderContainer, TextLogo, LogoutContainer, UserImg } from "./HeaderStyle";

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