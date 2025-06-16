import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    background-color: #f7f7f7;

    ${media.mobile} {
        flex-direction: column;
    }

    ${media.mobileLandscape} {
        flex-direction: column;
    }
`;

export const solContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 0 30px 30px 0;
    padding: 150px 120px 300px;
    width: 45%;
    aspect-ratio: 793 / 1084;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/indexPage/indexSolution/sec02_bg.jpg");

    ${media.mobile} {
        padding: 30px;
        width: 80%;
    }

    ${media.mobileLandscape} {
        padding: 150px 100px 250px;
        width: 80%;
    }
`;

export const titleAndContext = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;

    & > h2 {
        margin-bottom: 25px;
        color: #ffffff;
        font-size: 70px;
        font-weight: 900;
    }

    & > p {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 40px;
        width: 100%;
        color: #ffffff;
        line-height: 30px;
        font-size: 24px;
        font-weight: 500;
        white-space: pre-line;
    }

    ${media.mobile} {
        & > h2 {
            margin-bottom: 20px;
            line-height: 60px;
            font-size: 33px;    
        }

        & > p {
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
        }
    }

    ${media.mobileLandscape} {
        & > h2 {
            margin-bottom: 15px;
            line-height: 60px;
            font-size: 33px;    
        }

        & > p {
            font-size: 16px;
            font-weight: 300;
            line-height: 20px;
        }
    }
`;

export const solutionBox = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    & > p {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        border-radius: 20px;
        width: 8px;
        height: 100%;
        background-color: #ffffff;
    }
`;

export const solutionItem = (idx, index) => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    width: 100%;
    cursor: pointer;

    & > div {
        box-sizing: border-box;
        margin-right: 20px;
        border-radius: 20px;
        width: 8px;
        height: 100%;
        background-color: ${idx === index ? "#007bff" : "#ffffff"};
        z-index: 96;
    }

    & > p {
        padding: 20px 0px;
        color: ${idx === index ? "#007bff" : "#ffffff"};
        font-size: 30px;
        font-weight: 600;
        cursor: pointer;
    }

    ${media.mobile} {
        & > p {
            padding: 10px 0px;
            font-size: 18px;
            font-weight: 500;
        }
    }

    ${media.mobileLandscape} {
        & > p {
            padding: 10px 0px;
            font-size: 18px;
            font-weight: 500;
        }
    }
`;

export const detailContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 150px 100px;
    width: 55%;

    & > h2 {
        margin-bottom: 20px;
        color: #007bff;
        line-height: 36px;
        font-size: 30px;
        font-weight: 900;
    }

    & > p {
        margin-bottom: 50px;
        width: 100%;
        text-align: center;
        line-height: 36px;
        font-size: 21px;
        white-space: pre-line;
    }

    ${media.mobile} {
        padding: 30px 20px 65px;
        width: 100%;

        & > h2 {
            margin-bottom: 15px;
            font-size: 27px;
        }

        & > p{
            margin-bottom: 15px;
            line-height: 27px;
            font-size: 16px;
        }
    }

    ${media.mobileLandscape} {
        padding: 30px 20px 65px;
        width: 100%;

        & > h2 {
            margin-bottom: 15px;
            font-size: 27px;
        }

        & > p{
            margin-bottom: 15px;
            line-height: 27px;
            font-size: 16px;
        }
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
    border-radius: 20px;
    width: 100%;
    aspect-ratio: 797 / 494;

    & > img {
        border-radius: 20px;
        width: 100%;
        height: 100%;
    }
`;