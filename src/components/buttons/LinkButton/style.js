import { css } from "@emotion/react";
import { moveToLeftAndRight } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    bottom: 70px;
    justify-content: center;
    align-items: center;
    width: 25%;

    :hover {
        & svg {
            animation: ${moveToLeftAndRight} 1s infinite;
        }
    }
    
    & > button {
        display: flex;
        justify-content: space-around;
        align-items: center;
        border-radius: 30px;
        padding: 10px;
        width: 100%;
        background-color: #FE7D0D;
        color: #ffffff;
        font-size: 24px; 
    }

    & svg {
        font-size: 30px;
    }

    ${media.mobile}, ${media.mobileLandscape} {
        width: 50%;

        & > button {
            font-size: 17px; 
        }
    }
`;