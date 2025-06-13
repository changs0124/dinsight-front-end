/** @jsxImportSource @emotion/react */
import * as s from './style';
import Layout from '../../components/Layout/Layout';
import { useTranslation } from 'react-i18next';

function PolicyPage() {
    const { t } = useTranslation("policy");

    return (
        <Layout>
            <div css={s.layout}>
                <h2>{t("policy.title")}</h2>
                {
                    t("policy.context", { returnObjects: true }).map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))
                }
            </div>
        </Layout>

    );
}

export default PolicyPage;