import { Global } from "@emotion/react";
import { reset } from "./styles/theme";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage/IndexPage";
import CompanyPage from "./pages/CompanyPage/CompanyPage";
import Company from "./components/companyPage/Company/Company";
import History from "./components/companyPage/History/History";
import Direction from "./components/companyPage/Direction/Direction";
import SolutionPage from "./pages/SolutionPage/SolutionPage";
import TechPage from "./pages/TechPage/TechPage";
import BusinessPage from "./pages/BusinessPage/BusinessPage";
import SupportPage from "./pages/SupportPage/SupportPage";
import Motion from "./components/solutionPage/Motion/Motion";
import Model from "./components/solutionPage/Model/Model";
import Virtual from "./components/solutionPage/Virtual/Virtual";
import System from "./components/solutionPage/System/System";
import AI from "./components/solutionPage/AI/AI";
import Certificate from "./components/techPage/Certificate/Certificate";
import Performance from "./components/businessPage/Performance/Performance";
import Resource from "./components/supportPage/Resource/Resource";
import Contact from "./components/supportPage/Contact/Contact";

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
                <Route path="/solution" element={<SolutionPage />}>
                    <Route path="3dmodel" element={<Model />}/>
                    <Route path="motion" element={<Motion />}/>
                    <Route path="virtual" element={<Virtual />}/>
                    <Route path="system" element={<System />}/>
                    <Route path="ai" element={<AI />}/>
                </Route>
                <Route path="/tech" element={<TechPage />}>
                    <Route path="certificate" element={<Certificate />}/>
                </Route>
                <Route path="/business" element={<BusinessPage />}>
                    <Route path="performance" element={<Performance />}/>
                </Route>
                <Route path="/support" element={<SupportPage />}>
                    <Route path="resource" element={<Resource />}/>
                    <Route path="contact" element={<Contact />}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
