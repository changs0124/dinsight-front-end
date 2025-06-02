import { css } from "@emotion/react";
import { fadeIn } from "../../styles/keyframes";
import { media } from "../../styles/breakpoints";

export const layout = (showShadow) => css`
    box-sizing: border-box;
    display: flex;
    position: fixed;
    align-items: center;
    top: 0;
    width: 100%;
    height: 105px;
    background-color: #ffffff;
    box-shadow: ${showShadow ? "0 4px 5px #dbdbdb66" : "none"};
    z-index: 99;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 75px;
    width: 100%;
    height: 100%;

    & img {
        cursor: pointer;
    }

    ${media.mobile} {
        padding: 0px 20px;
    }
`;

export const menuBox = css`
    box-sizing: border-box;
    display: flex;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    transform: translateX(-1.5%);

    & > p {
        font-size: 20px;
        cursor: pointer;

        :hover {
            font-weight: 600;
        }
    }

    & > :not(:nth-last-of-type(1)) {
        margin-right: 100px;
    }

    ${media.mobile} {
        display: none;
    }

    ${media.tablet} {
        display: none;
    }
`;

export const subMenuContainer = css`
    box-sizing: border-box;
    display: flex;
    position: absolute;
    top: 105px;
    justify-content: center;
    align-items: center;
    padding: 20px 75px;
    width: 100%;
    background-color: #007aff;
    z-index: 99;

    & > p {
        box-sizing: border-box;
        border-bottom: 1px solid transparent;
        padding-bottom: 3px;

        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        
        :hover {
            border-bottom: 1px solid #ffffff;
        }
    }

    & :not(:nth-last-of-type(1)) {
        margin-right: 50px;
    }
`;

export const lanBox = (lan, isOpen) => css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;

    & > button {
        color: #000000;
        font-size: 17px;
        font-weight: 600;

        :hover {
            color: #0382f1;
        }    
    }

    & > button:nth-of-type(1)::after {
        content: "";
        margin: 0px 14px;
        border: 1px solid #cccccc;
        width: 2px;
        height: 100%;
    }

    & > svg {
        display: none;

        ${media.mobile} {
            display: flex;
            margin-left: 15px;

            color: ${isOpen ? "#0382f1" : "#000000"};
            font-size: 40px;
            animation: ${fadeIn} 0.3s ease forwards;
            cursor: pointer;
        }
    }

    & > p {
        box-sizing: border-box;
        border: 1px solid #dbdbdb;
        margin: 0px 14px;
        width: 2px;
        height: 100%;
    }

    & > button:nth-of-type(1) {
        color: ${lan === "ko" && "#0382f1"};
    }

    & > button:nth-of-type(2) {
        color: ${lan === "en" && "#0382f1"};
    }
    
`;