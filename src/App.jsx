import { Global } from "@emotion/react";
import { reset } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import Company from "./components/companyPage/Company/Company";
import History from "./components/companyPage/History/History";
import Direction from "./components/companyPage/Direction/Direction";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/" element={<IndexPage />} />
                <Route path="/company" element={<CompanyPage />}>
                    <Route path="" element={<Company />} />
                    <Route path="history" element={<History />} />
                    <Route path="direction" element={<Direction />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
