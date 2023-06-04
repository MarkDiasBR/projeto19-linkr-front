import { Container, FormContainer, Form, TitleContainer, Title } from "./styled";
import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { signUp } from "../../services/user.services.js";
import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function SignUp() {
    const [form, setForm] = useState({ email: "", password: "", confirmPassword: "", username: "" });
    const [hidePassword, setHidePassword] = useState([true, true])
    const [disabledInput, setDisabledInput] = useState(true);

    const navigate = useNavigate();

    const password = useRef();
    const confirmPassword = useRef();
    if (password.current?.value!==confirmPassword.current?.value) {
        confirmPassword.current?.setCustomValidity('Senhas não conferem.');
    } else {
        confirmPassword.current?.setCustomValidity('');
    }

    const email = useRef();
    const username = useRef();
    const pictureUrl = useRef();


    useEffect(() => {
        setTimeout(()=>{
            setDisabledInput(false);
        }, 1000);

        setTimeout(()=>{
            pictureUrl.current.focus();
            username.current.focus();
            confirmPassword.current.focus();
            password.current.focus();
            email.current.focus();
        }, 1100);
    }, []);

            // const email = email.current;
        // const password = password.current;    
        // const confirmPassword = confirmPassword.current;
        // const username = username.current;
        // const pictureUrl = pictureUrl.current;

    function handleForm(event) {
        const {name, value} = event.target;

        const newForm = {...form, [name]: value};
        if (newForm.pictureUrl === "") delete newForm.pictureUrl;

        setForm(newForm);
    }
    
    async function handleSubmit(event) {
        event.preventDefault();

        for (let index in hidePassword) {
            if (!hidePassword[index]) {
                document.querySelector(`.eye-button-1${index}`).click();
            }
        }
    
        setDisabledInput(true);

        const signupPromise = await signUp(form);

        setDisabledInput(signupPromise.proceed);

        if (signupPromise.proceed) {
            navigate("/")
        }

        setHidePassword([true,true]);
    }

    function handleRevealPassword(event) {
        event.preventDefault();

        const input = event.target.previousElementSibling;

        if (input.type === "password") {
          input.type = "text";
        } else {
          input.type = "password";
        }   
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

        input.focus();
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
                        ref={email}
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
                            ref={password}
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
                            minLength="3"

                            onFocus={(event) => event.target.removeAttribute('readonly')} 
                            readOnly 
                        />
                        <button
                            tabIndex="-1"
                            className="invisible hide-password eye-button-10"
                            type="button"
                            onClick={(event) => {
                                handleRevealPassword(event);
                                handleIconChange(event, 0);
                            }}
                        >
                            {   
                                hidePassword[0]
                                ? <FaEye />
                                : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    <div>
                        <input 
                            ref={confirmPassword}
                            name="confirmPassword"
                            type="password"
                            autoComplete="off"
                            placeholder="confirm password" 
                            onChange={(event) => {
                                handleForm(event);
                                handleButtonVisibility(event);
                            }}
                            disabled={disabledInput}
                            required
                            minLength="3"

                            onFocus={(event) => event.target.removeAttribute('readonly')} 
                            readOnly 
                        />
                        <button 
                            tabIndex="-1"
                            className="invisible hide-password eye-button-11"
                            type="button"
                            onClick={(event) => {
                                handleRevealPassword(event);
                                handleIconChange(event, 1);
                            }}
                            disabled={disabledInput}
                        >
                            {   
                                hidePassword[1]
                                ? <FaEye />
                                : <FaEyeSlash />
                            }
                        </button>
                    </div>
                    <input 
                        ref={username}
                        name="username"
                        type="text"
                        autoComplete="off"
                        placeholder="username" 
                        onChange={handleForm}
                        disabled={disabledInput}
                        required
                        minLength="3"

                        onFocus={(event) => event.target.removeAttribute('readonly')} 
                        readOnly 
                    />
                    <input 
                        ref={pictureUrl}
                        name="pictureUrl"
                        type="url"
                        autoComplete="off"
                        placeholder="picture url" 
                        onChange={handleForm}
                        disabled={disabledInput}

                        onFocus={(event) => event.target.removeAttribute('readonly')} 
                        readOnly 
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