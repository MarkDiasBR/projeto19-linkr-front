import { Link } from "react-router-dom";
import { Container, FormContainer, Form, TitleContainer, Title } from "./styled";

export default function SignUp() {
    return (
        <Container>
            <TitleContainer>
                <Title>
                    <h1>
                        linkr
                    </h1>
                    <p>
                        save, share and discover<br/>
                        the best links on the web
                    </p>
                </Title>
            </TitleContainer>
            <FormContainer>
                <Form>
                    <input placeholder="e-mail"/>
                    <input placeholder="password"/>
                    <input placeholder="username"/>
                    <input placeholder="picture url"/>
                    <button>
                        Sign Up
                    </button>
                    <Link to="/">
                        <p>
                            Switch back to log in
                        </p>                   
                    </Link>
                </Form>
            </FormContainer>
        </Container>
    )
}