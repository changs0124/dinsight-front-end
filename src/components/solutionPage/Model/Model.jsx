/** @jsxImportSource @emotion/react */
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import * as s from './style';
import { useTranslation } from 'react-i18next';

function Model() {
    const { t: tHeader } = useTranslation("header");

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.0.title")} />
        </div>
    );
}

export default Model;