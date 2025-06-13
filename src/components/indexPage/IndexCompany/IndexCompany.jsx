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
                        <div />
                        <h2>{t("indexCompany.companyBox.title")}</h2>
                        <p>{t("indexCompany.companyBox.context")}</p>
                    </div>
                    <div css={s.ectBox}>
                        <div css={s.ectItem(t("indexCompany.historyBox.onImg"), t("indexCompany.historyBox.offImg"))} onClick={() => window.location.href = t("indexCompany.historyBox.path")}>
                            <div />
                            <h2>{t("indexCompany.historyBox.title")}</h2>
                            <p>{t("indexCompany.historyBox.context")}</p>
                        </div>
                        <div css={s.ectItem(t("indexCompany.technicalBox.onImg"), t("indexCompany.technicalBox.offImg"))} onClick={() => window.location.href = t("indexCompany.technicalBox.path")}>
                            <div />
                            <h2>{t("indexCompany.technicalBox.title")}</h2>
                            <p>{t("indexCompany.technicalBox.context")}</p>
                        </div>
                        <div css={s.ectItem(t("indexCompany.referenceBox.onImg"), t("indexCompany.referenceBox.offImg"))} onClick={() => window.location.href = t("indexCompany.referenceBox.path")}>
                            <div />
                            <h2>{t("indexCompany.referenceBox.title")}</h2>
                            <p>{t("indexCompany.referenceBox.context")}</p>
                        </div>
                        <div css={s.ectItem(t("indexCompany.directionsBox.onImg"), t("indexCompany.directionsBox.offImg"))} onClick={() => window.location.href = t("indexCompany.directionsBox.path")}>
                            <div />
                            <h2>{t("indexCompany.directionsBox.title")}</h2>
                            <p>{t("indexCompany.directionsBox.context")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IndexCompany;