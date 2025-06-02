/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';

function Resource() {
    const { t: tHeader } = useTranslation("header");

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.4.title")} subtitle={tHeader("header.4.submenu.0.title")} />
        </div>
    );
}

export default Resource;