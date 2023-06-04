import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import PostPage from "./pages/PostPage/PostPage.jsx";
import { UserProvider } from "./contexts/UserContext.js";

export default function App() {
    return (
        <BrowserRouter>
            <UserProvider>
                <Routes>
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                    <Route path="/post" element={<PostPage />} />
                </Routes>
            </UserProvider>
        </BrowserRouter>
    );
}