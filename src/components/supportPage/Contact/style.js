import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 50px 350px 100px;
    width: 100%;

    ${media.mobile} {
        padding: 50px 20px 100px;
    }

    ${media.mobileLandscape} {
        padding: 50px 20px 100px;
    }
`;

export const selectBox = (isShow) => css`
    box-sizing: border-box;
    display: flex;
    position: relative;
    align-items: center;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 20px;
    width: 100%;
    cursor: pointer;

    & > svg {
        position: absolute;
        right: 10px;
        transform: rotate(${isShow ? '180deg' : '0deg'});
        transition: transform 0.3s ease;
        font-size: 25px;
    }

    & > p {
        box-sizing: border-box;
        width: 100%;
        line-height: 30px;
        font-size: 25px;
    }

    ${media.mobile} {
        & > svg {
            font-size: 20px;
        }

        & > p {
            font-size: 20px;
        }
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
    top: 51px;
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
        font-size: 25px;
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

export const infoBox = css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 20px));
    width: 100%;
    gap: 20px;
    width: 100%;

    ${media.mobile} {
        grid-template-columns: repeat(2, calc(50% - 10px));
    }
`;

export const infoItem = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 20px 30px 40px;
    width: 100%;

    & > p {
        padding-bottom: 20px;
        font-size: 25px;
        font-weight: 600;
    }

    ${media.mobile} {
        padding: 0px 0px 20px;

        & > p {
            padding-bottom: 10px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    ${media.mobileLandscape} {
        padding: 0px 0px 20px;

        & > p {
            padding-bottom: 10px;
            font-size: 18px;
            font-weight: 500;
        }
    }
`;

export const inputBox = css`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    overflow: hidden;

    & > img {
        position: absolute;
        right: 0px;
        width: 15px;
        aspect-ratio: 1 / 1;
    }

    & > input {
        box-sizing: border-box;
        border-bottom: 1px solid #dbdbdb;
        padding: 30px 20px;
        width: 100%;
        font-size: 20px;

        ${media.mobile} {
            padding: 10px;
        }

        ${media.mobileLandscape} {
            padding: 10px;
        }
    }

    & > textarea {
        box-sizing: border-box;
        padding: 10px;
        width: 100%;
        min-height: 300px;
        outline: none;
        resize: none;
        overflow-y: auto;
        ::-webkit-scrollbar {
            display: none;
        }     
    }
`;

export const contextBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    padding: 15px;
    width: 100%;
    overflow: auto;

    ::-webkit-scrollbar {
        display: none;
    }

    & > p {
        font-size: 14px;
        white-space: pre-line;
    }

    & > :not(:nth-last-of-type(1)) {
        padding-bottom: 20px;
    }
`;