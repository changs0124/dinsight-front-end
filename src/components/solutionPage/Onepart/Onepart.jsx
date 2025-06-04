/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function Onepart() {
    const nav = useNavigate();
    const { t: tHeader } = useTranslation("header");

    return (
        <div css={s.layout}>
            <div css={s.mobileSelectBox}>
                {
                    tHeader("header.1.submenu.4.submenu", { returnObjects: true })?.map((menu, idx) => (
                        <p key={idx} css={s.mobileSelectItem(menu.path, window.location.pathname)} onClick={() => nav(menu.path)}>{menu.title}</p>
                    ))
                }
            </div>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.4.submenu.1.title")} />
        </div>
    );
}

export default Onepart;