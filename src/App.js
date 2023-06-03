import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import ScreenWithHeader from "./components/ScreenWithHeader/ScreenWithHeader";
import Timeline from "./pages/Timeline/Timeline";

    export default function App() {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path="/timeline" element={<ScreenWithHeader><Timeline /></ScreenWithHeader>} />
                    <Route path="/" element={<SignIn />} />
                    <Route path="/sign-up" element={<SignUp />} />
                </Routes>
            </BrowserRouter>
        );
    }