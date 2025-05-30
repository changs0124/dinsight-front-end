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

    & > img {
        aspect-ratio: 134 /35;
        width: 21%;

    }

    & > h2 {
        margin-bottom: 10px;
        font-size: 67px;
        font-weight: 500;
    }
`;