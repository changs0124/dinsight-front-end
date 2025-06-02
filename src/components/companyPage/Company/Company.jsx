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
            <picture>
                <source srcSet="/images/companyPage/company-img01-360.png" media="(max-width: 430px)" />
                <img src="/images/companyPage/company-img01.png" alt="" />
            </picture>
            <div css={s.companyBox}>
                <h2>{tCompany("companyPage.company.title")}</h2>
                <p>{tCompany("companyPage.company.context")}</p>
            </div>
            <div css={s.solutionContainer}>
                <div css={s.solutiondBox(localStorage.getItem("i18nextLng"))}>
                    <h2>{tCompany("companyPage.solution.title")}</h2>
                    <p>{tCompany("companyPage.solution.context")}</p>
                </div>
                <div css={s.imgBox("/images/companyPage/company-img02.png")} />
            </div>
            <div css={s.infoContainer}>
                {
                    tCompany("companyPage.info", { returnObjects: true }).map((info, idx) => (
                        <div key={idx} css={s.infoBox}>
                            <img src={info.img} alt="" />
                            <div>
                                <h2>{info.name}</h2>
                                <p>{info.value}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div css={s.ideologyBox}>
                <h2>{tCompany("companyPage.ideology.title")}</h2>
                <picture>
                    <source srcSet="/images/companyPage/company-img03-360_eng.png" media="(max-width: 430px)" />
                    <img src={tCompany("companyPage.ideology.img")} alt="" />
                </picture>
            </div>
        </div>
    );
}

export default Company;