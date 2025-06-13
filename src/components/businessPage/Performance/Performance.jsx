/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';

function Performance() {
    const { t: tHeader } = useTranslation("header");
    const { t: tPerformace } = useTranslation("performance")

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.3.title")} subtitle={tHeader("header.3.submenu.0.title")} />
            {
                tPerformace("performance", { returnObjects: true }).map((data, idx) => (
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

export default Performance;