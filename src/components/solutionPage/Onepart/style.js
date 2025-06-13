import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const mobileSelectBox = css`
    display: none;
   
    ${media.mobile} {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 30px;
        width: 100%;
    }

    ${media.mobileLandscape} {
        display: none;
    }
`;

export const mobileSelectItem = (path, realPath) => css`
    box-sizing: border-box;
    border: 1px solid #0382F1;
    padding: 20px 0px;
    width: 50%;
    background-color: ${path === realPath ? "#0382F1" : "#ffffff"};
    text-align: center;
    color: ${path === realPath ? "#ffffff" : "#0382F1"};
    line-height: 2px;
    font-size: 13px;
    font-weight: 500;
`;

export const videoBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    padding: 40px 350px 150px;
    width: 100%;
    aspect-ratio: 16 / 9;

    & > iframe {
        border: none;
        width: 100%; 
    }

    ${media.mobile} {
        padding: 40px 20px 30px;
    }

    ${media.mobileLandscape} {
        padding: 40px 20px 30px;
    }
`;

export const titleAndContextBox = css`
    box-sizing: border-box;
    padding: 40px 350px 150px;

    & > h2 {
        padding-bottom: 45px;
        color: #005EB0;
        font-size: 42px;
        font-weight: 700;
    }

    & > p {
        box-sizing: border-box;
        width: 100%;
        padding-bottom: 40px;
        line-height: 50px;
        font-size: 33px;
        font-weight: 700;
        letter-spacing: -0.8px;
    }

    ${media.mobile} {
        padding: 70px 20px;

        & > h2 {
            padding-bottom: 20px;
            font-size: 30px;
        }

        & > p {
            padding-bottom: 15px;
            line-height: 26px;
            font-size: 16px;
            font-weight: 500;
        }
    }

    ${media.mobileLandscape} {
        padding: 70px 20px;

        & > h2 {
            padding-bottom: 20px;
            font-size: 30px;
        }

        & > p {
            padding-bottom: 15px;
            line-height: 26px;
            font-size: 16px;
            font-weight: 500;
        }
    }
`;

export const imgItem = (ratio) => css`
    padding-top: 65px;
    width: 100%;
    aspect-ratio: ${ratio};

    ${media.mobile} {
        padding-top: 0;
        padding: 10px 0px 30px;
    }

    ${media.mobileLandscape} {
        padding-top: 0;
        padding: 10px 0px 30px;
    }
`;