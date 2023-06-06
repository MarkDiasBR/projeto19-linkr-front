import { Container, FormContainer } from "./styled";
import { Link } from "react-router-dom";
import { placeholder } from "../../assets/publish.placeholders"; 


export default function Publish() {
    return (
        <Container>
            <Link>
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" />
            </Link>
            <FormContainer>
                <p>
                    What are you going to share today?
                </p>
                <input 
                    name="url"
                    type="url"
                    placeholder="http://... or https://..."
                    required
                />
                <textarea
                    name="description"
                    type="description"
                    placeholder={placeholder}
                />
                <button>
                    Publish
                </button>
            </FormContainer>
        </Container>
    )
}