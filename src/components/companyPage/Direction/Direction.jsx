/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useTranslation } from 'react-i18next';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';

function Direction() {
    const { t: tHeader } = useTranslation("header");
    const { t: tDirection } = useTranslation("directionPage");

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.0.title")} subtitle={tHeader("header.0.submenu.2.title")} />
        </div>
    );
}

export default Direction;