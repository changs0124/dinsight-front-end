/** @jsxImportSource @emotion/react */
import * as s from './style';
import Layout from '../../components/Layout/Layout';
import CommonHeader from '../../components/commonPage/CommonHeader/CommonHeader';
import { useTranslation } from 'react-i18next';
import CommonSelect from '../../components/commonPage/CommonSelect/CommonSelect';
import { Outlet } from 'react-router-dom';

function CompanyPage() {
    const { t } = useTranslation("header");
    
    return (
        <Layout>
            <CommonHeader title={t("header.0.title")} img={t("header.0.img")} />
            <CommonSelect title={t("header.0.title")} />
            <div css={s.layout}>
                <div css={s.container}>
                    <h2>{t("header.0.title")}</h2>
                    <img src={"/images/companyPage/logo2.svg"} alt="" />
                </div>
            </div>
            <Outlet />
        </Layout>
    );
}

export default CompanyPage;