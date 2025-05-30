import { Global } from "@emotion/react";
import { reset } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/company" element={<CompanyPage />}>

                </Route>
            </Routes>
        </>
    );
}

export default App;
