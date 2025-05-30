import { css } from "@emotion/react";
import { moveToLeft, moveToRight } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 0px 210px;
    width: 100%;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 180px;
    padding-bottom: 200px;
    width: 100%;
`;

export const header = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    margin-bottom: 85px;
    width: 100%;

    & > h2 {
        margin-bottom: 30px;
        line-height: 102px;
        font-size: 72px;
        font-weight: 900;
    }

    & > p {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        width: 56%;
        font-size: 24px;
    }
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const companyBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 4px solid transparent;
    border-radius: 30px;
    padding: 55px;
    width: 40%;
    aspect-ratio: 581 / 551;
    box-shadow: 0 4px 10px #dbdbdb;
    transition: border-color 0.8s ease;
    animation: ${moveToLeft} 1s forwards;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/indexPage/indexCompany/sec01_bg.jpg");
    cursor: pointer;

    :hover {
       border-color: #007bff; 

       & > div {
            background-size: cover;
            background-position: center;
            background-image: url("/images/indexPage/indexCompany/about0_on.png");
       }
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        position: absolute;
        right: 55px;
        width: 100px;
        height: 100px;
        background-size: cover;
        background-position: center;
        background-image: url("/images/indexPage/indexCompany/about0_off.png");
        z-index: 99;
        cursor: pointer;
    }

    & > h2 {
        margin-bottom: 20px;
        font-size: 27px;
        font-weight: 700;
        cursor: pointer;
    }

    & > p {
        box-sizing: border-box;
        width: 65%;
        line-height: 36px;
        font-size: 21px;
        cursor: pointer;
    }

    & > svg {
        margin-top: 20px;
        font-size: 30px;
        cursor: pointer;
    }
`;

export const ectBox = css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 10px));
    width: 55%;
    gap: 20px;
`;

export const ectItem = (on, off) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 4px solid transparent;
    border-radius: 30px;
    padding: 25px;
    box-shadow: 0 4px 10px #dbdbdb;
    transition: border-color 0.8s ease;
    cursor: pointer;

    &:hover {
       border-color: #007bff;
        
       & > div {
            background-size: cover;
            background-position: center;
            background-image: url(${on});
       }
       
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        position: absolute;
        bottom: 55px;
        right: 45px;
        width: 100px;
        height: 100px;
        background-size: cover;
        background-position: center;
        background-image: url(${off});
        z-index: 96;
        cursor: pointer;
    }

    & > h2 {
        margin-bottom: 10px;
        font-size: 27px;
        font-weight: 700;
        cursor: pointer;
    }

    & > p {
        line-height: 30px;
        font-size: 20px;
        cursor: pointer;
    }
`;