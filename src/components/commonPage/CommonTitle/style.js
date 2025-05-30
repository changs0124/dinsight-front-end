import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 100px 300px 0px;
    width: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbdbdb;
    padding-bottom: 30px;
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
`;