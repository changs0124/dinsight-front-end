/** @jsxImportSource @emotion/react */
import * as s from './style';
import { HiArrowLongRight } from "react-icons/hi2";

function IndexCompanyBox({ width, height, onImg, offImg, bgImg, title, context, path }) {
    
    return (
        <div css={s.layout(bgImg)}>
            <div css={s.container(onImg, offImg)} onClick={() => window.location.href = path}>
                <h2>{title}</h2>
                <p>{context}</p>
                <HiArrowLongRight />
            </div>
        </div>
    );
}

export default IndexCompanyBox;