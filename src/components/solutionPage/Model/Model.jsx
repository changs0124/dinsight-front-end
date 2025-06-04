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
                <h2>{tModel("model.first-title")}</h2>
                <p>{tModel("model.first-context")}</p>
            </div>
            <div css={s.detailBox}>
                {
                    tModel("model.detail", { returnObjects: true })?.map((detail, idx) => (
                        <div key={idx} css={s.detailItem(detail.img)}>
                            <div />
                            <h2>{detail.title}</h2>
                            <p>{detail.context}</p>
                        </div>
                    ))
                }
            </div>
            <div css={s.modelBox}>
                <h2>{tModel("model.second-title")}</h2>
                <p>{tModel("model.second-context")}</p>
                <picture>
                    <source srcSet="/images/solutionPage/model/model-cont02-img01-770.png" media="(max-width: 430px)" />
                    <img css={s.img} src="/images/solutionPage/model/model-cont02-img01.png" alt="" />
                </picture>
            </div>
        </div>
    );
}

export default Model;