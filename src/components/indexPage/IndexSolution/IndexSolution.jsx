/** @jsxImportSource @emotion/react */
import { useTranslation } from 'react-i18next';
import * as s from './style';
import { useState } from 'react';
import LinkButton from '../../buttons/LinkButton/LinkButton';

function IndexSolution() {
    const { t } = useTranslation("indexSolution");

    const [index, setIndex] = useState(0);

    const handleSolutionOnOver = (idx) => {
        setIndex(idx)
    }

    return (
        <div css={s.layout}>
            <div css={s.solContainer}>
                <div css={s.titleAndContext}>
                    <h2>{t("indexSolution.title")}</h2>
                    <p>{t("indexSolution.context")}</p>
                </div>
                <div css={s.solutionBox}>
                    <p></p>
                    {
                        t("indexSolution.solutions", { returnObjects: true })?.map((sol, idx) => (
                            <div key={idx} css={s.solutionItem(idx, index)} onMouseOver={() => handleSolutionOnOver(idx)}>
                                <div></div>
                                <p>
                                    {sol.title}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div css={s.detailContainer}>
                <div css={s.imgBox}>
                    <img src={t("indexSolution.solutions", { returnObjects: true })[index].img} />
                </div>
                <h2>{t("indexSolution.solutions", { returnObjects: true })[index].title}</h2>
                <p>{t("indexSolution.solutions", { returnObjects: true })[index].context}</p>
                <LinkButton onClick={() => window.location.href = t("indexSolution.solutions", { returnObjects: true })[index].path} />
            </div>
        </div>
    );
}

export default IndexSolution;