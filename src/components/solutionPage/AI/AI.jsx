/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function AI() {
    const nav = useNavigate();
    const { t: tHeader } = useTranslation("header");
    const { t: tAi } = useTranslation("ai")

    return (
        <div css={s.layout}>
            <div css={s.mobileSelectBox}>
                {
                    tHeader("header.1.submenu.4.submenu", { returnObjects: true })?.map((menu, idx) => (
                        <p key={idx} css={s.mobileSelectItem(menu.path, window.location.pathname)} onClick={() => nav(menu.path)}>{menu.title}</p>
                    ))
                }
            </div>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.4.submenu.0.title")} />
            {
                tAi("ai", { returnObjects: true }).map((data, idx) => (
                    <div key={idx} css={s.titleAndContextBox}>
                        <h2>{data.title}</h2>
                        <p>{data.context}</p>
                        {
                            window.matchMedia("(max-width: 640px)").matches
                                ?
                                data.img.mobile?.map((img, idx) => (
                                    <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                                ))
                                :
                                data.img.desktop?.map((img, idx) => (
                                    <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                                ))
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default AI;