import { Global } from "@emotion/react";
import { reset } from "./styles/theme";
import { Navigate, Route, Routes } from "react-router-dom";
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
import Onepart from "./components/solutionPage/Onepart/Onepart";

function App() {
    return (
        <>
            <Global styles={reset} />
            <Routes>
                <Route path="/*" element={<IndexPage />} />
                <Route path="/company" element={<CompanyPage />}>
                    <Route index element={<Company />} />
                    <Route path="history" element={<History />} />
                    <Route path="direction" element={<Direction />} />
                    <Route path="*" element={<Navigate to="/compay" replace />} />
                </Route>
                <Route path="/solution/*" element={<SolutionPage />}>
                    <Route index element={<Navigate to="/solution/3dmodel" replace />} />
                    <Route path="3dmodel" element={<Model />} />
                    <Route path="motion" element={<Motion />} />
                    <Route path="virtual" element={<Virtual />} />
                    <Route path="sys" element={<System />} />
                    <Route path="ai" element={<AI />} />
                    <Route path="ai/onepart" element={<Onepart />}/>
                    <Route path="*" element={<Navigate to="/solution/3dmodel" replace />} />
                </Route>
                <Route path="/tech/*" element={<TechPage />}>
                    <Route index element={<Navigate to="/tech/certificate" replace />} />
                    <Route path="certificate" element={<Certificate />} />
                    <Route path="*" element={<Navigate to="/tech/certificate" replace />} />
                </Route>
                <Route path="/business/*" element={<BusinessPage />}>
                    <Route index element={<Navigate to="/business/performance" replace />} />
                    <Route path="performance" element={<Performance />} />
                    <Route path="*" element={<Navigate to="/business/performance" replace />} />
                </Route>
                <Route path="/support/*" element={<SupportPage />}>
                    <Route index element={<Navigate to="/support/resource" replace />} />
                    <Route path="resource" element={<Resource />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/support/resource" replace />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
