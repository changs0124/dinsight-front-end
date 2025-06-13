import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 250px;
    width: 100%;

    ${media.mobile} {
        display: none;
    }

    ${media.mobileLandscape} {
        padding: 10px 70px;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;

    & > svg {
        margin-right: 20px;
        font-size: 35px;
        cursor: pointer;
    }

    & > div:nth-of-type(1) {
        border-left: 1px solid #dbdbdb;
    }

    & > div {
        border-right: 1px solid #dbdbdb;
    }
`;

export const selectBox = (isShow) => css`
    box-sizing: border-box;
    display: flex;
    position: relative;
    align-items: center;
    padding: 0px 20px;
    width: 20%;

    cursor: pointer;

    & > svg {
        position: absolute;
        right: 10px;
        transform: rotate(${isShow ? '180deg' : '0deg'});
        transition: transform 0.3s ease;
        font-size: 20px;
    }

    & > p {
        box-sizing: border-box;
        width: 100%;
        line-height: 30px;
        font-size: 20px;
    }

    ${media.mobileLandscape} {
        width: 30%;
        
        & > p {
            font-size: 18px;
        }
    }
`;

export const optionBox = (isShow, length) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 42px;
    left: 0px;
    border-left: 1px solid #dbdbdb;
    border-right: 1px solid #dbdbdb;
    border-bottom: ${(isShow && length !== 1) ? "1px solid #dbdbdb" : "none"};
    width: 100%;
    background-color: #ffffff;
    z-index: 97;
    cursor: pointer;

    & > p {
        box-sizing: border-box;
        display: flex;
        padding: 10px 20px;
        width: 100%;

        font-size: 20px;

        cursor: pointer;

        :hover {
            color: #ffffff;
            background-color: #0382f1;
        }
    }

    & > :not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }
`;