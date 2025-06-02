import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const firstContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 50px 300px;
    width: 100%;

    & > h2 {
        padding-bottom: 35px;
        font-size: 40px;
        font-weight: 700;
    }

    & > p {
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
`;

export const secondContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 50px 300px;
    width: 100%;

    ${media.mobile} {
        padding: 0px 20px;
    }
`;

export const buttonBox = css`
    box-sizing: border-box;
    display: flex;
    padding-bottom: 30px;
    width: 100%;

    & p:nth-of-type(1) {
        margin-right: 10px;
    }
`;

export const buttonItem = (idx, id) => css`
    box-sizing: border-box;
        display: flex;
        border-radius: 30px;
        padding: 13px 20px;
        width: fit-content;
        background-color: ${idx === id ? "#1a6dfe" : "#dbdbdb"};

        color: #ffffff;
        font-size: 20px;
        font-weight: 500;

        cursor: pointer;
`;

export const yearBox = (idx, index) => css`
    box-sizing: border-box;
    display: flex;
    position: relative;
    padding-top: 30px;
    padding-left: 10px;
    width: 100%;

    & > ::after {
            content: "";
            position: absolute;
            top: 53px;
            left: 145px;
            border-radius: 50%;
            width: 12px;
            height: 12px;
            background-color: #2f80ed;
    }

    & > ::before {
            content: "";
            position: absolute;
            top: 55px;
            left: 150px;
            width: 2px;
            height: ${idx === index ? "0px" : "100%"};
            background-color: #2f80ed;
    }
    
    & > h2 {
        padding-right: 60px;
        line-height: normal;
        font-size: 40px;
        font-weight: 600;
    }

    ${media.mobile} {
        & > ::after {
            content: "";
            position: absolute;
            top: 43px;
            left: 78px;
            border-radius: 50%;
            width: 10px;
            height: 10px;
            background-color: #2f80ed;
        }

        & > ::before {
                content: "";
                position: absolute;
                top: 50px;
                left: 82px;
                width: 2px;
                height: ${idx === index ? "0px" : "100%"};
                background-color: #2f80ed;
        }

        & > h2 {
            padding-right: 30px;
            font-size: 25px;
        }
        
    }
`;

export const monthBox = css`
    box-sizing: border-box;
    display: flex;   
    width: 100%;

    & > h2 { 
        padding: 3px 30px 30px 50px;

        font-size: 35px;
        font-weight: 500;
    }

    ${media.mobile} {

        & > h2 {
            padding: 3px 5px ;
            font-size: 19px;
        }
      
    }
`;

export const textBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 15px;
    width: 100%;

    & > p {
        box-sizing: border-box;
        padding-left: 20px;
        padding-bottom: 30px;
        color: #444444;
        font-size: 19px;
        font-weight: 500;
    }

    ${media.mobile} {
        padding-top: 5px;
        & > p {
            padding-left: 10px;
            padding-bottom: 20px;
            font-size: 16px;
            font-weight: 400;
        }
    }
`;