import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 180px 350px 180px;
    width: 100%;

    ${media.mobile} {
        padding: 80px 20px;
    }

    ${media.mobileLandscape} {
        padding: 80px 20px;
    }
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    padding: 70px 0px;
    width: 100%;
    aspect-ratio: 1489 / 430;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/indexPage/indexContact/contact-bg.jpg");

    & > h2 {
        margin-bottom: 30px;
        line-height: 102px;
        color: #ffffff;
        font-size: 72px;
        font-weight: 900;
    }

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        margin-bottom: 45px;
        width: 50%;
        line-height: 45px;
        color: #ffffff;
        font-size: 24px;
    }

    ${media.mobile} {
        padding: 35px 10px;

        & > h2 {
            line-height: 60px;
            font-size: 33px;
        }

        & p {
            margin-bottom: 20px;
            width: 100%;
            line-height: 23px;
            font-size: 15px;
        }
    }

    ${media.mobileLandscape} {
        padding: 35px 10px;

        & > h2 {
            line-height: 60px;
            font-size: 33px;
        }

        & p {
            margin-bottom: 20px;
            width: 100%;
            line-height: 23px;
            font-size: 15px;
        }
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 15%;
    background-color: transparent;

    & > button {
        border: 1px solid #ffffff;
        border-radius: 30px;
        padding: 10px 0;
        width: 100%;
        color: #ffffff;
        font-size: 24px;

        :hover {
            background-color: #ffffff;
            color: #007aff;
        }

    }

    ${media.mobile} {
        width: 40%;

        & > button {
            padding: 5px 0;
            font-size: 18px;
        }
    }

    ${media.mobileLandscape} {
        width: 40%;

        & > button {
            padding: 5px 0;
            font-size: 18px;
        }
    }
`;