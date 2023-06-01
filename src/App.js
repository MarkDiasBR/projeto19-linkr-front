import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostPage from "./pages/PostPage.jsx";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/post" element={<PostPage />} />
                    {/*<Route path="/signup" element={<SignUp />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/success" element={<Success />} />*/}
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
