/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';

function Virtual() {
    const { t: tHeader } = useTranslation("header");
    const { t: tVirtual } = useTranslation("virtual")

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.2.title")} />
            <div css={s.virtualBox}>
                <h2>{tVirtual("virtual.title")}</h2>
                {
                    tVirtual("virtual.video", { returnObjects: true }).map((url, idx) => (
                        <div key={idx} css={s.virtualItem}>
                            <iframe
                                src={url}
                                frameborder="0"
                                allowFullScreen
                            >
                            </iframe>
                        </div>
                    ))
                }
                <p>{tVirtual("virtual.context")}</p>
            </div>
        </div>
    );
}

export default Virtual;