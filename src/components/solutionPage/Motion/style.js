import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const motionBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 40px 350px 200px;
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

    & > div:nth-last-of-type(1) {
        margin-bottom: 0px;
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

    ${media.mobileLandscape} {
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

export const motionItem = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: none;
    margin-bottom: 40px;
    width: 100%;
    aspect-ratio: 16 / 9;
    
    & > iframe {
        border: none;
        width: 100%; 
    }
`;