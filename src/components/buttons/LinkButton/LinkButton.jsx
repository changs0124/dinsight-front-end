/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useTranslation } from 'react-i18next';
import { HiArrowLongRight } from "react-icons/hi2";

function LinkButton({ onClick }) {
    const {t} = useTranslation("button");

    return (
        <div css={s.layout} onClick={onClick}>
            <button>{t("linkButton")}<HiArrowLongRight /></button>
        </div>
    );
}

export default LinkButton;