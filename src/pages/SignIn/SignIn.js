import { Link } from "react-router-dom";
import { Container, FormContainer, Form, TitleContainer, Title } from "./styled";

export default function SignIn() {
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
                    <input 
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="E-mail" 
                        // onChange={handleForm}
                        // disabled={disabledInput}
                        required
                    />
                    <input placeholder="e-mail"/>
                    <input placeholder="password"/>
                    <button>
                        Sign Up
                    </button>
                    <Link to="/sign-up">
                        <p>
                            First time? Create an account!
                        </p>                   
                    </Link>
                </Form>
            </FormContainer>
        </Container>
    )
}