import { Container } from "./styled.js";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const [showLogout, setShowLogout] = useState(false);
    const navigate = useNavigate();

    function handleShowLogout(event) {
        setShowLogout(!showLogout);
    }

    function handleLogout(event) {
        localStorage.clear();
        navigate("/");
    }

    return (
        <Container>
            <h1>
                linkr
            </h1>
            <button 
                className="show-logout" 
                onClick={(event)=>handleShowLogout(event)}
            >
                {
                    showLogout
                    ? <AiOutlineUp />
                    :<AiOutlineDown />
                }
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" alt="avatar" />
            </button>
            {
                showLogout
                ? <div onClick={(event)=>handleLogout(event)}>Logout</div>
                : ''
            }
        </Container>
    )
}