import CommonHeader from "../../components/commonPage/CommonHeader/CommonHeader";
import CommonSelect from "../../components/commonPage/CommonSelect/CommonSelect";
import Layout from "../../components/Layout/Layout";
import { useTranslation } from "react-i18next";
import { Outlet } from "react-router-dom";

function SolutionPage() {
    const { t } = useTranslation("header");

    return (
        <Layout>
            <CommonHeader title={t("header.1.title")} img={t("header.1.img")} />
            <CommonSelect title={t("header.1.title")} />
            <Outlet />
        </Layout>
    );
}

export default SolutionPage;