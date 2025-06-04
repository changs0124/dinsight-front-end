import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const modelBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 40px 350px;
    width: 100%;
    
    & > h2 {
        padding-bottom: 40px;
        line-height: 50px;
        font-size: 33px;
        font-weight: 700;
    }
    
    & > p {
            box-sizing: border-box;
            position: relative;
            padding-top: 20px;
            padding-left: 30px;
            width: 90%;
            line-height: 36px;
            font-size: 22px;
            font-weight: 400;
    }

    & > p::before {
        content: '';
        position: absolute;
        top: 28px;
        left: 0;
        border-radius: 10%;
        width: 8px;
        height: 50%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url("/images/commonPage/sol_before.png");
    }
    
    ${media.mobile} {
        padding: 40px 20px;
    
        & > h2 {
            padding-bottom: 15px;
            line-height: 26px;
            font-size: 16px;
        }
        
        & > p {
            line-height: 26px;
            font-size: 15px;
        }

        & > p::before {
            height: 30%;
        }
    }
`;

export const detailBox = css`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    padding: 87px 350px 170px;
    width: 100%;
    gap: 30px;

    ${media.mobile} {
        display: flex;
        padding: 50px 20px 50px;
        flex-direction: column;
        width: 100%;
    }
`;

export const detailItem = (url) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid #ffffff;
    border-radius: 30px;
    box-shadow: 0 4px 10px #dbdbdb;

    & > div {
        box-sizing: border-box;
        width: 100%;
        aspect-ratio: 145 / 86;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url(${url});
    }

    & > h2 {
        border: 5px solid #ffffff;
        border-radius: 30px;
        padding: 5px 50px;
        width: fit-content;
        background-color: #fe7d0d;
        text-align: center;
        color: #ffffff;
        font-size: 27px;
        font-weight: 600;
        transform: translateY(-50%);
    }

    & > p {
        padding-bottom: 30px;
        text-align: center;
        line-height: 30px;
        font-size: 20px;
    }

    ${media.mobile} {
        & > h2 {
            font-size: 20px;
        }

        & > p {
            line-height: 24px;
            font-size: 14px;
        }
    }
`;

export const img = css`
    padding: 100px 0px 240px;
    aspect-ratio: 1221 / 485;
    width: 100%;

    ${media.mobile} {
        padding: 60px 0px 140px;
        aspect-ratio: 320 / 237;
    }

`