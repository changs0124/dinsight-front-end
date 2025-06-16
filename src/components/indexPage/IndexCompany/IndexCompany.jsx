/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useTranslation } from 'react-i18next';

function IndexCompany() {
    const { t } = useTranslation("indexCompany")

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.header}>
                    <h2>{t("indexCompany.title")}</h2>
                    <p>{t("indexCompany.context")}</p>
                </div>
                <div css={s.body}>
                    <div css={s.companyBox(t("indexCompany.companyBox.onImg"), t("indexCompany.companyBox.offImg"))} onClick={() => window.location.href = t("indexCompany.companyBox.path")}>
                        <div></div>
                        <h2>{t("indexCompany.companyBox.title")}</h2>
                        <p>{t("indexCompany.companyBox.context")}</p>
                    </div>
                    <div css={s.ectBox}>
                        {
                            t("indexCompany.ectBox", { returnObjects: true })?.map((item, idx) => (
                                <div css={s.ectItem(item.onImg, item.offImg)} onClick={() => window.location.href = item.path}>
                                    <div></div>
                                    <h2>{item.title}</h2>
                                    <p>{item.context}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexCompany;