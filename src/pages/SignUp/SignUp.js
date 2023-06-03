import { Container, FormContainer, Form, TitleContainer, Title } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef } from "react";
import { signUp } from "../../services/user.services.js";

export default function SignUp() {
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "", username: "" });
    const [disabledInput, setDisabledInput] = useState(false);

    const navigate = useNavigate();

    const password = useRef();
    const confirmPassword = useRef();
    if (password.current?.value!==confirmPassword.current?.value) {
        confirmPassword.current?.setCustomValidity('Senhas não conferem.');
    } else {
        confirmPassword.current?.setCustomValidity('');
    }

    function handleForm(event) {
        const {name, value} = event.target;

        const newForm = {...form, [name]: value};
        console.log(newForm);
        setForm(newForm);
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
    
        setDisabledInput(true);

        const signupPromise = await signUp(form);

        setDisabledInput(signupPromise.proceed);

        if (signupPromise.proceed) {
            navigate("/sign-in")
        }
    }

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
                <Form onSubmit={handleSubmit}>
                    <input 
                        name="email"
                        type="email"
                        autoComplete="off"
                        placeholder="e-mail" 
                        onChange={handleForm}
                        disabled={disabledInput}
                        required
                    />
                    <input 
                        ref={password}
                        name="password"
                        type="password"
                        autoComplete="off"
                        placeholder="password" 
                        onChange={handleForm}
                        disabled={disabledInput}
                        required
                    />
                    <input 
                        ref={confirmPassword}
                        name="confirmPassword"
                        type="password"
                        autoComplete="off"
                        placeholder="confirm password" 
                        onChange={handleForm}
                        disabled={disabledInput}
                        required
                    />
                    <input 
                        name="username"
                        type="text"
                        autoComplete="off"
                        placeholder="username" 
                        onChange={handleForm}
                        disabled={disabledInput}
                        required
                    />
                    <input 
                        name="pictureUrl"
                        type="url"
                        autoComplete="off"
                        placeholder="picture url" 
                        onChange={handleForm}
                        disabled={disabledInput}
                    />
                    <button 
                        type="submit"
                        disabled={disabledInput}
                    >
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