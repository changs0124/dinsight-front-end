/** @jsxImportSource @emotion/react */
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import * as s from './style';
import { useTranslation } from 'react-i18next';

function Company() {
    const { t: tHeader } = useTranslation("header");
    const { t: tCompany } = useTranslation("companyPage");

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.0.title")} />
            {
                window.matchMedia("(max-width: 640px)").matches
                    ?
                    tCompany("companyPage.company.img.mobile", { returnObjects: true })?.map((img, idx) => (
                        <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                    ))
                    :
                    tCompany("companyPage.company.img.desktop", { returnObjects: true })?.map((img, idx) => (
                        <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                    ))
            }
            <div css={s.companyBox}>
                <h2>{tCompany("companyPage.company.title")}</h2>
                <p>{tCompany("companyPage.company.context")}</p>
            </div>
            <div css={s.solutionContainer}>
                <div css={s.solutiondBox}>
                    <h2>{tCompany("companyPage.solution.title")}</h2>
                    <p>{tCompany("companyPage.solution.context")}</p>
                </div>
                {
                    window.matchMedia("(max-width: 640px)").matches
                        ?
                        tCompany("companyPage.solution.img.mobile", { returnObjects: true })?.map((img, idx) => (
                            <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                        ))
                        :
                        tCompany("companyPage.solution.img.desktop", { returnObjects: true })?.map((img, idx) => (
                            <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                        ))
                }
            </div>
            <div css={s.infoContainer}>
                {
                    tCompany("companyPage.info", { returnObjects: true })?.map((info, idx) => (
                        <div key={idx} css={s.infoBox}>
                            {
                                window.matchMedia("(max-width: 640px)").matches
                                    ?
                                    info.img.mobile?.map((img, idx) => (
                                        <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                                    ))
                                    :
                                    info.img.desktop?.map((img, idx) => (
                                        <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                                    ))
                            }
                            <div css={s.infoItem}>
                                <h2>{info.name}</h2>
                                <p>{info.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div css={s.ideologyBox}>
                <h2>{tCompany("companyPage.ideology.title")}</h2>
                {
                    window.matchMedia("(max-width: 640px)").matches
                        ?
                        tCompany("companyPage.ideology.img.mobile", { returnObjects: true })?.map((img, idx) => (
                            <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                        ))
                        :
                        tCompany("companyPage.ideology.img.desktop", { returnObjects: true })?.map((img, idx) => (
                            <img key={idx} css={s.imgItem(img.ratio)} src={img.path} />
                        ))
                }
            </div>
        </div>
    );
}

export default Company;