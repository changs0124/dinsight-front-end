import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 100px 350px 20px;
    width: 100%;

    ${media.mobile} {
        padding: 90px 20px 20px;
    }
`;

export const defaultContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #000000;
    padding-bottom: 20px;
    width: 100%;

    & > h2 {
        margin-bottom: 10px;
        font-size: 67px;
        font-weight: 500;
    }

    ${media.mobile} {
        & > h2 {
            line-height: 45px;
            font-size: 45px;
        }
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 20px;
    width: 100%;

    & > h2 {
        line-height: 82px;
        font-size: 67px;
        font-weight: 500;
    }

    & > h2:nth-last-of-type(1) {
        color: #0382F1;
        font-weight: 700;
    }

    ${media.mobile} {
        & > h2 {
            line-height: 45px;
            font-size: 40px;
        }
    }
`;