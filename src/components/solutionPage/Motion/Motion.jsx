/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';

function Motion() {
    const { t: tHeader } = useTranslation("header");
    const { t: tMotion } = useTranslation("motion");
    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.1.title")} />
            <div css={s.motionBox}>
                <h2>{tMotion("motion.title")}</h2>
                {
                    tMotion("motion.video", { returnObjects: true }).map((url, idx) => (
                        <div key={idx} css={s.motionItem}>
                           <iframe
                            src={url}
                            frameborder="0"
                            allowFullScreen
                           >
                           </iframe>
                        </div>
                    ))
                }
                <p>{tMotion("motion.context")}</p>
            </div>
        </div>
    );
}

export default Motion;