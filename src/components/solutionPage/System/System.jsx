/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';

function System() {
    const { t: tHeader } = useTranslation("header");
    const { t: tSystem } = useTranslation("system")

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.3.title")} />
            <div css={s.container}>
                <h2>{tSystem("system.title")}</h2>
                {
                    tSystem("system.video", { returnObjects: true }).map((url, idx) => (
                        <div key={idx} css={s.systemBox}>
                            <iframe
                                src={url}
                                frameborder="0"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    ))
                }
                <div css={s.imgBox}>
                    {
                        tSystem("system.img", { returnObjects: true }).map((img, idx) => (
                            <img key={idx} src={img} alt="" />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default System;