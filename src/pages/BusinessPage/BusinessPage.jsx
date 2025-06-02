import Layout from '../../components/Layout/Layout';
import CommonHeader from '../../components/commonPage/CommonHeader/CommonHeader';
import CommonSelect from '../../components/commonPage/CommonSelect/CommonSelect';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function BusinessPage() {
    const { t } = useTranslation("header");

    return (
        <Layout>
            <CommonHeader title={t("header.3.title")} img={t("header.3.img")} />
            <CommonSelect title={t("header.3.title")} />
            <Outlet />
        </Layout>
    );
}

export default BusinessPage;