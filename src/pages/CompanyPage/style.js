import { css } from "@emotion/react";
import { media } from "../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 100px 300px 20px;
    width: 100%;

    ${media.mobile} {
        padding: 90px 20px 20px 20px;
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