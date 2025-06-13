import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const titleAndContextBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 40px 350px;
    width: 100%;
    
    & > h2 {
        padding-bottom: 45px;
        color: #005EB0;
        font-size: 42px;
        font-weight: 700;
    }
    
    & > p {
        position: relative;
        padding-top: 20px;
        padding-left: 30px;
        line-height: 36px;
        font-size: 22px;
    }

    & > p::before {
        content: '';
        position: absolute;
        top: 28px;
        left: 0;
        border-radius: 10px;
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

export const imgItem = (ratio) => css`
    padding-top: 65px;
    width: 100%;
    aspect-ratio: ${ratio};

    ${media.mobile} {
        padding-top: 0;
        padding: 10px 0px 30px;
    }

    ${media.mobileLandscape} {
        padding-top: 0;
        padding: 10px 0px 30px;
    }
`;