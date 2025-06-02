import { css } from "@emotion/react";
import { zoomInSlow } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = (url) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    justify-content: center;
    align-items: center;
    margin-top: 105px;
    width: 100%;
    aspect-ratio: 960 /187;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${url});

    animation: ${zoomInSlow} 10s ease-in-out infinite;

    & > h2 {
        margin-bottom: 10px;
        color: #ffffff;
        font-size: 50px;
        font-weight: 900;

        z-index: 96;
    }

    & > p {
        color: #ffffff;
        font-size: 23px;
        font-weight: 600;

        z-index: 96;
    }

    ${media.mobile} {
        height: 375px;
        animation: none;

        & > h2 {
            line-height: 80px;
            font-size: 36px;
            font-weight: 500;
        }

        & > p {
            line-height: 0px;
            font-size: 15px;
        }
    }
`;

export const imgBox = (url) => css`
    box-sizing: border-box;
    display: flex;
    position: absolute;
    width: 100%;
    aspect-ratio: 960 /187;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${url});

    animation: ${zoomInSlow} 10s ease-in-out infinite;
`;