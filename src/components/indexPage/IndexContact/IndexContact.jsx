/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useTranslation } from 'react-i18next';

function IndexContact() {
    const { t } = useTranslation("indexContact");

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h2>Contact us</h2>
                <p>{t("indexContact.context")}</p>
                <div css={s.buttonBox} onClick={() => window.location.href = t("indexContact.path")}>
                    <button>{t("indexContact.buttonTitle")}</button>
                </div>
            </div>
        </div>
    );
}

export default IndexContact;