/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next';
import * as s from './style';
import Layout from '../../components/Layout/Layout';
function RefusalPage() {
    const { t } = useTranslation("refusal");

    return (
        <Layout>
            <div css={s.layout}>
                <h2>{t("refusal.title")}</h2>
                {
                    t("refusal.context", { returnObjects: true }).map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))
                }
            </div>
        </Layout>

    );
}

export default RefusalPage;