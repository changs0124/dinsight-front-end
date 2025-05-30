import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    width: 100%;
    background-color: #f7f7f7;
`;

export const solContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-radius: 0 30px 30px 0;
    padding: 150px 100px;
    width: 45%;
    aspect-ratio: 793 / 1084;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("/images/indexPage/indexSolution/sec02_bg.jpg");
`;

export const titleAndContext = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;

    & > h2 {
        margin-bottom: 20px;
        color: #ffffff;
        font-size: 70px;
        font-weight: 900;
    }

    & > p {
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 30px;
        width: 100%;
        color: #ffffff;
        line-height: 30px;
        font-size: 20px;
        font-weight: 500;
    }
`;

export const solutionBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    position: relative;
    width: 100%;
`;

export const solutionItem = (idx, index) => css`
    box-sizing: border-box;
    display: flex;
    align-items: center;
    border-left: 7px solid #ffffff;
    padding: 20px 20px;
    width: 100%;
    color: ${idx === index ? "#007bff" : "#ffffff"};
    font-size: 25px;
    font-weight: 600;
    cursor: pointer;

    :hover {
        border-left:7px solid #007bff;
        padding-left: 35px;
        color: #007bff;
        font-weight: 600;
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
        color: #007bff;
        margin-bottom: 20px;
        font-size: 30px;
        font-weight: 900;
    }

    & > p {
        margin-bottom: 50px;
        width: 100%;
        text-align: center;
        line-height: 36px;
        font-size: 21px;
    }
`;

export const imgBox = (url) => css`
    box-sizing: border-box;
    display: flex;
    margin-bottom: 30px;
    border-radius: 30px;
    width: 100%;
    aspect-ratio: 797 / 494;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${url});
`;