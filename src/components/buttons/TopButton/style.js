import { css } from "@emotion/react";
import { scrollUp } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    position: fixed;
    bottom: 70px;
    right: 65px;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 55px;
    height: 55px;
    background-color: #0382F1;
    z-index: 99;

    :hover {
        background-color: #373737;
        & svg {
            animation: ${scrollUp} 2s infinite;
            color: #ffffff;
        }
    }

    & svg {
        font-size: 30px;
    }

    ${media.mobile} {
        width: 45px;
        height: 45px;
        right: 20px;

        & svg {
            font-size: 20px;
        }
    }

    ${media.mobileLandscape} {
        width: 45px;
        height: 45px;
        right: 25px;

        & svg {
            font-size: 20px;
        }
    }
`;