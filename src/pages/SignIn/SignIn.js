import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container, FormContainer, Form, TitleContainer, Title } from "./styled";
import { signIn } from "../../services/user.services";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignIn() {
    const [form, setForm] = useState({email: "", password: "" });
    const [hidePassword, setHidePassword] = useState([true])
    const [disabledInput, setDisabledInput] = useState(false);

    const navigate = useNavigate();

    function handleForm(event) {
        const {name, value} = event.target;

        const newForm = {...form, [name]: value};

        setForm(newForm);
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        for (let index in hidePassword) {
            if (!hidePassword[index]) {
                document.querySelector(`.eye-button-0${index}`).click();
            }
        }

        setDisabledInput(true)

        const signinPromise = await signIn(form);

        setDisabledInput(signinPromise.proceed);

        if (signinPromise.proceed) {
            navigate("/")
        }
    }

    function handleRevealPassword(event) {
        const input = event.target.previousElementSibling;

        if (input.type === "password") {
          input.type = "text";
        } else {
          input.type = "password";
        }

        input.focus();
    }

    function handleIconChange(event, index) {
        const input = event.target.previousElementSibling;

        const newHidePassword = [...hidePassword];
        newHidePassword[index] = !newHidePassword[index];

        setHidePassword(newHidePassword);

        input.focus();        
    }

    function handleButtonVisibility(event) {
        const input = event.target;
        const button = event.target.nextElementSibling;

        if (input.value !== "") {
            button.classList.remove('invisible');
        } else {
            button.classList.add('invisible');
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
                        save, share and discover
                    </p>
                    <p>
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

                        onFocus={(event) => event.target.removeAttribute('readonly')} 
                        readOnly
                    />
                    <div>
                        <input 
                            name="password"
                            type="password"
                            autoComplete="off"
                            placeholder="password"
                            onChange={(event) => {
                                handleForm(event);
                                handleButtonVisibility(event);
                            }}
                            disabled={disabledInput}
                            required

                            onFocus={(event) => event.target.removeAttribute('readonly')} 
                            readOnly
                        />
                        <button 
                            tabIndex="-1"
                            className="invisible eye-button-00"
                            type="button"
                            onClick={(event) => {
                                handleRevealPassword(event);
                                handleIconChange(event, 0);
                            }}
                            disabled={disabledInput}
                        >
                            {   
                                hidePassword[0]
                                ? <FaEye />
                                : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    <button
                        type="submit"
                        disabled={disabledInput}
                    >
                        Log In
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