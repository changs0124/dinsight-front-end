/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';

function Performance() {
    const { t: tHeader } = useTranslation("header");

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.3.title")} subtitle={tHeader("header.3.submenu.0.title")} />
        </div>
    );
}

export default Performance;