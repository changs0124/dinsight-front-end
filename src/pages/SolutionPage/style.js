import { css } from "@emotion/react";
import { media } from "../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    padding: 0px 30px;

    ${media.desktop} {
        display: none;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;

    & > p {
        box-sizing: border-box;
        width: 50%;
    }

`;