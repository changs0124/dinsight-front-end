import { css } from "@emotion/react";
import { slideUpH2, slideUpP, zoomInSlow } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    width: 100%;
    aspect-ratio: 1920 / 973;
    margin-bottom: 30px;
`;

export const container = (url) =>  css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-image: url(${url});
    animation: ${zoomInSlow} 10s ease-in-out infinite;
`;

export const textBox = (idx, index) => css`
    box-sizing: border-box;
    position: absolute;
    top: 35%;
    left: 10%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    width: 100%;
    z-index: 96;

    & > h2 {
        width: 55%;
        opacity: 0;
        animation: ${idx === index && slideUpH2} 1s ease-out forwards;
        line-height: 102px;
        color: #ffffff;
        font-size: 85px;
        font-weight: 900;

        ${media.tablet} {
            line-height: 60px;
            font-size: 55px;
        }
    }

    & > p {
        animation: ${idx === index && slideUpP} 1s ease-out 0.5s forwards;
        line-height: 40px;
        color: #ffffff;
        font-size: 24px;
        margin-top: 20px;
        opacity: 0;
    }
`;