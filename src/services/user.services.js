import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

export async function signUp(form) {
    try {
        const promise = await axios.post(`${process.env.REACT_APP_API_URL}/signup`, form);

        promise.proceed = true;
        return promise;
    } catch (err) {
        console.log(err.response.data)
        err.response.proceed = false;
        return err.response;
    }
}

export async function signIn(form) {
    try {
        const promise = await axios.post(`${process.env.REACT_APP_API_URL}/signin`, form);
        localStorage.setItem("token", promise.data.token);
        
        promise.proceed = true;
        return promise;
    } catch (err) {
        console.log(err);
        err.response.proceed = false;
        return err.response;
    }
}

export function logout() {
    localStorage.clear();
}