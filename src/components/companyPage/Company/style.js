import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;

    & > img {
            width: 90%;
    }
`;

export const imgItem = (ratio) => css`
    aspect-ratio: ${ratio};
`;

export const companyBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 30px 300px;
    width: 100%;

    & > h2 {
        padding-bottom: 35px;
        font-size: 40px;
        font-weight: 700;
        white-space: pre-line;
    }

    & > p {
        box-sizing: border-box;
        width: 90%;
        line-height: 50px;
        font-size: 28px;
        font-weight: 400;
    }

    ${media.mobile} {
        padding: 30px 20px;

        & > h2 {
            padding-bottom: 15px;
            font-size: 25px;
        }

        & > p {
            line-height: 26px;
            font-size: 15px;
        }
    }

    ${media.mobileLandscape} {
        padding: 30px 20px;

        & > h2 {
            padding-bottom: 15px;
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
        align-items: end;
        padding: 90px 0px;

        & > img {
            width: 90%;
        };
    }

    ${media.mobileLandscape} {
        flex-direction: column;
        align-items: end;
        padding: 90px 0px;

        & > img {
            width: 90%;
        };
    }
`;

export const solutiondBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #F9FAFB;
    padding-right: 50px;
    width: 35%;

    & > h2 {
        padding-bottom: 70px;
        width: 100%;
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
            padding-bottom: 20px;
            width: 100%;
            line-height: 30px;
            font-size: 20px;
            font-weight: 700;
        }

        & > p {
            box-sizing: border-box;
            padding-bottom: 30px;
            width: 100%;
            line-height: 20px;
            font-size: 16px;
        }
    }

    ${media.mobileLandscape} {
        padding: 0px 30px;
        width: 100%;

        & > h2 {
            padding-bottom: 20px;
            width: 90%;
            line-height: 30px;
            font-size: 20px;
            font-weight: 700;
        }

        & > p {
            box-sizing: border-box;
            padding-bottom: 30px;
            width: 100%;
            line-height: 20px;
            font-size: 16px;
        }
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
        padding: 20px;

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

    ${media.mobileLandscape} {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 55px 70px;

        & > :nth-of-type(1) {
            border: none;
            border-right: 1px solid #bbbbbb;
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(2) {
            border: none;
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(3) {
            border: none;
            border-right: 1px solid #bbbbbb;
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(4) {
            border-bottom: 1px solid #bbbbbb;
        }

        & > :nth-of-type(5) {
            border: none;
            border-right: 1px solid #bbbbbb;
        } 
    }
`;

export const infoBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${media.mobile} {
        flex-direction: row;
        justify-content: flex-start;
        padding: 15px 0px;

        & > img {
            padding-right: 20px;
        }
    }
`;

export const infoItem = css`
    box-sizing: border-box;
    
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


    ${media.mobile} {
        padding: 10px 0px;

        & > h2 {
        text-align: left;
        padding-bottom: 0px;
        font-size: 18px;
        }

        & > p {
            display: flex;
            text-align: left;
            line-height: 25px;
            font-size: 18px;
        }
    }

    ${media.mobileLandscape} {
        padding: 10px 0px;
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
            padding-bottom: 40px;
            text-align: left;
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

    ${media.mobileLandscape} {
        padding: 80px 20px 100px;

        & > h2 {
            padding-bottom: 40px;
            text-align: left;
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