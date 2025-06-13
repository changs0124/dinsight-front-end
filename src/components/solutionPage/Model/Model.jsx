/** @jsxImportSource @emotion/react */
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import * as s from './style';
import { useTranslation } from 'react-i18next';

function Model() {
    const { t: tHeader } = useTranslation("header");
    const { t: tModel } = useTranslation("model");

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.1.title")} subtitle={tHeader("header.1.submenu.0.title")} />
            <div css={s.modelBox}>
                <h2>{tModel("model.firstTitle")}</h2>
                <p>{tModel("model.firstContext")}</p>
            </div>
            <div css={s.detailBox}>
                {
                    tModel("model.detail", { returnObjects: true })?.map((detail, idx) => (
                        <div key={idx} css={s.detailItem}>
                            <img src={detail.img} alt="" />
                            <h2>{detail.title}</h2>
                            <p>{detail.context}</p>
                        </div>
                    ))
                }
            </div>
            <div css={s.modelBox}>
                <h2>{tModel("model.secondTitle")}</h2>
                <p>{tModel("model.secondContext")}</p>
                {
                    window.matchMedia("(max-width: 640px)").matches
                        ?
                        tModel("model.img.mobile", { returnObjects: true })?.map((img, idx) => (
                            <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                        ))
                        :
                        tModel("model.img.desktop", { returnObjects: true })?.map((img, idx) => (
                            <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                        ))
                }
            </div>
        </div>
    );
}

export default Model;