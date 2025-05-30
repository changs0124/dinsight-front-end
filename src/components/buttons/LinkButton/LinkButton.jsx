/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useTranslation } from 'react-i18next';
import { HiArrowLongRight } from "react-icons/hi2";

function LinkButton() {
    const {t} = useTranslation("button");

    return (
        <div css={s.layout}>
            <button>{t("linkButton")}<HiArrowLongRight /></button>
        </div>
    );
}

export default LinkButton;