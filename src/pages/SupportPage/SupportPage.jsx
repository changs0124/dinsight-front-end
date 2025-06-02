import Layout from '../../components/Layout/Layout';
import CommonHeader from '../../components/commonPage/CommonHeader/CommonHeader';
import CommonSelect from '../../components/commonPage/CommonSelect/CommonSelect';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function SupportPage() {
     const { t } = useTranslation("header");

    return (
        <Layout>
            <CommonHeader title={t("header.4.title")} img={t("header.4.img")} />
            <CommonSelect title={t("header.4.title")} />
            <Outlet />
        </Layout>
    );
}

export default SupportPage;