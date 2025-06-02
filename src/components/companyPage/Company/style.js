import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const companyBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px 300px;
    width: 100%;

    & > h2 {
        margin-bottom: 35px;
        font-size: 40px;
        font-weight: 700;
    }

    & > p {
        box-sizing: border-box;
        width: 90%;
        line-height: 50px;
        font-size: 28px;
        font-weight: 400;
    }

    ${media.mobile} {
        padding: 30px;

        & > h2 {
            margin-bottom: 15px;
            font-size: 25px;
        }

        & > p {
            line-height: 26px;
            font-size: 15px;
        }
    }
`;

export const solutionContainer = css`
    box-sizing: border-box;
    display: flex;
    justify-content: end;
    align-items: center;
    width: 100%;
    padding: 120px 0px;
    background-color: #F9FAFB;

    ${media.mobile} {
        flex-direction: column;
        padding: 90px 0px;
    }
`;

export const solutiondBox = (lan) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F9FAFB;
    padding-right: 100px;
    width: 35%;

    & > h2 {
        margin-bottom: 70px;
        width: ${lan === "ko" ? "55%" : "100%"};
        line-height: 56px;
        font-size: 36px;
        font-weight: 700;
    }

    & > p {
        box-sizing: border-box;
        width: 90%;
        line-height: 46px;
        font-size: 22px;
    }

    ${media.mobile} {
        padding: 0px 30px;
        width: 100%;

        & > h2 {
            margin-bottom: 15px;
            width: 90%;
            line-height: 30px;
            font-size: 20px;
            font-weight: 700;
        }

        & > p {
            box-sizing: border-box;
            margin-bottom: 30px;
            width: 100%;
            line-height: 20px;
            font-size: 16px;
        }
        
    }
`;

export const imgBox = (url) => css`
    box-sizing: border-box;
    border-top-left-radius: 25px;
    border-bottom-left-radius: 25px;
    width: 45%;
    aspect-ratio: 37 / 21;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url(${url});

    ${media.mobile} {
        align-self: flex-end;
        width: 80%;
    }
`;

export const infoContainer = css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 55px 350px;
    width: 100%;
    aspect-ratio: 480 / 169;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: url("/images/companyPage/company-cont03-bg.png");

    & > :nth-of-type(1) {
        border-bottom: 1px solid #bbbbbb;
    }

    & > :nth-of-type(2) {
        border-right: 1px solid #bbbbbb;
        border-left: 1px solid #bbbbbb;
        border-bottom: 1px solid #bbbbbb;
    }

    & > :nth-of-type(3) {
        border-bottom: 1px solid #bbbbbb;
    }

    & > :nth-of-type(5) {
        border-left: 1px solid #bbbbbb;
        border-right: 1px solid #bbbbbb;
    }

    ${media.mobile} {
        display: flex;
        flex-direction: column;
        padding: 20px 20px;
        aspect-ratio: 480 / 169;

        & > :nth-of-type(1) {
            border: none;
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(2) {
            border: none;
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(3) {
            border: none;
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(4) {
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(5) {
            border: none;
            border-bottom: 1px solid #bbbbbb;
        }
    }
`;

export const infoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    text-align: center;

    & > img {
        margin-bottom: 15px;
    }

    & > div {
        & > h2 {
            padding-bottom: 10px;
            color: #ffffff;
            font-size: 22px;
            font-weight: 600;
        }

        & > p {
            line-height: 40px;
            color: #ffffff;
            font-size: 27px;
            font-weight: 600;
        }
    }

    ${media.mobile} {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        padding: 10px 0px;

        & > img {
            padding: 0px 40px 0px 10px;
        }

        & > div {
            & > h2 {
                text-align: left;
                padding-bottom: 0px;
                font-size: 18px;
            }

            & > p {
                display: flex;
                text-align: left;
                font-size: 18px;
            }
        }
    }
`;

export const ideologyBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 123px 300px 160px;
    width: 100%;

    & > h2 {
        padding-bottom: 80px;
        font-size: 40px;
        font-weight: 700;
    }

    ${media.mobile} {
        padding: 80px 20px 100px;

        & > h2 {
            text-align: left;
            padding-bottom: 40px;
            font-size: 24px;
        }

        & > picture {
            display: flex;
            justify-content: center;
            
            & > img {
                width: 100%;
            }
        }
       
    }
`; 