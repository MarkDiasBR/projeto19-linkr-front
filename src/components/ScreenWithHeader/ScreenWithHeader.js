import Navbar from "../Navbar/Navbar";
import { Container } from "../ScreenWithHeader/styled";

export default function ScreenWithHeader({ children }) {
    return (
        <Container>  
            <Navbar />
            {children}
        </Container>
    )
} 