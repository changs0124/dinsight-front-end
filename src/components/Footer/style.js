import { css } from "@emotion/react";
import { media } from "../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 105px;
    padding: 0px 350px;
    width: 100%;
    background-color: #000000;

    ${media.mobile} {
        padding: 0px 20px;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 0px;
    width: 100%;
    background-color: transparent;
`;

export const routeAndSelectBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    width: 100%;

    ${media.mobile} {
        flex-direction: column;
        align-items: baseline;
        margin-bottom: 20px;
    }
`;

export const routeBox = css`
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    & > p {
        color: #ffffff;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
    }

    & > p:not(:nth-last-of-type(1))::after {
        content: '';
        display: inline-block;
        margin: 0px 30px;
        width: 2px;
        height: 20px;
        background-color: #ffffff;
        vertical-align: middle;
    }

    ${media.mobile} {
        margin-bottom: 20px;

        & > p {
            ${media.mobile} {
                line-height: 25px;
                font-size: 15px;
                font-weight: 500;
            }
        }
    }
`;

export const selectBox = (isShow) => css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    border-bottom-left-radius: ${isShow ? "0px" : "30px"};
    border-bottom-right-radius: ${isShow ? "0px" : "30px"};
    padding: 5px 25px;
    width: 20%;
    background-color: #ffffff;
    cursor: pointer;

    > p {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 18px;

        & > svg {
            transform: rotate(${isShow ? '180deg' : '0deg'});
            transition: transform 0.3s ease;

            font-size: 18px;
        }
    }

    ${media.mobile} {
        padding: 10px 20px;
        width: 60%;

        & > p {
            font-size: 15px;
        }
    }
`;

export const optionBox = (isShow) => css`
    box-sizing: border-box;
    position: absolute;
    display: ${isShow ? "flex" : "none"};
    flex-direction: column;
    left: 0px;
    padding: 5px 25px;
    width: 100%;
    background-color: #ffffff;
    transform: translateY(80%);
    cursor: pointer;

    & > p {
        box-sizing: border-box;
        display: flex;
        width: 100%;

        font-size: 18px;
        cursor: pointer;

        ${media.mobile} {
            font-size: 15px;
        }
    }

    & > :not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }

    ${media.mobile} {
        top: 40px;
    }
`;

export const addressBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    width: 100%;
    
    & > p {
        color: #ffffff;
        font-size: 18px;
    }

    & > p:nth-of-type(1) {
        margin-right: 20px;
        font-weight: 700;
    }

    ${media.mobile} {
        flex-direction: column;
        align-items: baseline;
        margin-bottom: 0;

        & > p {
            font-size: 14px;
            font-weight: 400;
        }

        & > p:nth-last-of-type(1) {
            margin-bottom: 20px;
        }
    }
`;

export const ectBox = css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    margin-top: 20px;
    width: 100%;

    color: #ffffff;
    font-size: 18px;

    ${media.mobile} {
        font-size: 14px;
    }
`;