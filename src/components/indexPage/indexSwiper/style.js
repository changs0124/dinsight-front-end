import { css } from "@emotion/react";
import { slideUpH2, slideUpP, zoomInSlow } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 30px;

    ${media.mobile} {
        height: 100vh;
    }

    ${media.mobileLandscape} {
        height: 100vh;
    }
`;

export const container = (path) =>  css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    aspect-ratio: 128 / 65;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${path});
    animation: ${zoomInSlow} 10s ease-in-out infinite;

    ${media.mobile} {
        min-height: 100vh;
        animation: none;
    }

    ${media.mobileLandscape} {
        min-height: 100vh;
        animation: none;
    }
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
    }

    & > p {
        box-sizing: border-box;
        margin-top: 20px;
        line-height: 40px;
        color: #ffffff;
        font-size: 24px;
        white-space: pre-line;
        animation: ${idx === index && slideUpP} 1s ease-out 0.5s forwards;
        opacity: 0;
    }

    ${media.mobile} {
        top: 35%;
        left: 2%;

        & > h2 {
            width: 100%;
            line-height: 40px;
            font-size: 38px;
        }

        & > p {
            width: 90%;
            line-height: 32px;
            font-size: 17px;
        }
    }

    ${media.mobileLandscape} {
        top: 35%;
        left: 2%;

        & > h2 {
            width: 100%;
            line-height: 40px;
            font-size: 38px;
        }

        & > p {
            width: 90%;
            line-height: 32px;
            font-size: 17px;
        }
    }
`;