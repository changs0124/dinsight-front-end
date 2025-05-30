import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 96;

    & > button {
        display: flex;
        width: 100%;
        height: 100%;
    }

    & svg {
        color: #ffffff;
        font-size: 70px;
    }
`;