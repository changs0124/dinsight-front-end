import { css } from "@emotion/react";
import { moveToLeft, moveToRight } from "../../../styles/keyframes";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    padding: 180px 210px 200px;
    width: 100%;

    ${media.mobile} {
        padding: 80px 20px;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
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

    ${media.mobile} {
        margin-bottom: 20px;

        & > h2 {
            margin-bottom: 15px;
            line-height: 60px;
            font-size: 33px;
        }

        & > p {
            width: 100%;
            line-height: 20px;
            font-size: 16px;
        }
    }
`;

export const body = css`
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    width: 100%;

    ${media.mobile} {
        flex-direction: column;
    }
`;

export const companyBox = (on, off) => css`
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
            background-image: url(${on});
        }
    }

    & > div {
        box-sizing: border-box;
        display: flex;
        position: absolute;
        right: 30px;
        width: 112px;
        aspect-ratio: 1 / 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${off});
        z-index: 96;
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

    ${media.mobile} {
        margin-bottom: 20px;
        padding: 30px;
        width: 100%;

        & > div {
            left: 30px;
            bottom: 30px;
        }

        & > h2 {
            line-height: 25px;
            font-size: 19px;
        }

        & > p {
            width: 100%;
            line-height: 25px;
            font-size: 15px;
        }
    }
`;

export const ectBox = css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, calc(50% - 10px));
    width: 55%;
    gap: 20px;

    ${media.mobile} {
        display: flex;
        flex-direction: column;
        width: 100%;
    }
`;

export const ectItem = (on, off) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    border: 4px solid transparent;
    border-radius: 30px;
    padding: 25px;
    width: 100%;
    box-shadow: 0 4px 10px #dbdbdb;
    transition: border-color 0.8s ease;
    cursor: pointer;

    & > div {
        box-sizing: border-box;
        display: flex;
        position: absolute;
        right: 30px;
        bottom: 30px;
        width: 112px;
        aspect-ratio: 1 / 1;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${off});
        z-index: 99;
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

    &:hover {
       border-color: #007bff;
        
        & > div {
            background-image: url(${on});
        }
    }

    ${media.mobile} {
        padding: 30px 20px;

        & > div {
            right: 10px;
            bottom: 10px;
            width: 80px;
            aspect-ratio: 1 / 1;
        }
        & > h2 {
            line-height: 25px;
            font-size: 19px;
        }

        & > p {
            line-height: 25px;
            font-size: 15px;
        }
    }
`;