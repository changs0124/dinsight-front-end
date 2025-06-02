import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/Layout/Layout';
import CommonHeader from '../../components/commonPage/CommonHeader/CommonHeader';
import CommonSelect from '../../components/commonPage/CommonSelect/CommonSelect';
import { Outlet } from 'react-router-dom';

function TechPage() {
    const { t } = useTranslation("header");

    return (
        <Layout>
            <CommonHeader title={t("header.2.title")} img={t("header.2.img")} />
            <CommonSelect title={t("header.2.title")} />
            <Outlet />
        </Layout>
    );
}

export default TechPage;