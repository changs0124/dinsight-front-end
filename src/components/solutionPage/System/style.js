import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    width: 100%;
    
    & > h2 {
        padding: 0px 350px 40px;
        line-height: 50px;
        font-size: 33px;
        font-weight: 700;
    }

    ${media.mobile} {
        padding: 40px 20px 0px;
        
        & > h2 {
            padding: 0px 0px 15px;
            line-height: 26px;
            font-size: 16px;
        }
    }
`;

export const systemBox = css`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    border: none;
    padding: 0px 350px 150px;
    width: 100%;
    aspect-ratio: 16 / 9;
    
    & > iframe {
        border: none;
        width: 100%; 
    }

    ${media.mobile} {
        padding: 0px 0px 70px;
    }
`;

export const imgBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 150px 350px 200px;
    width: 100%;
    background-color: #F9FAFB;

    & > img {
        width: 100%;
        aspect-ratio: 400 / 201;
    }

    & :not(:nth-last-of-type(1)) {
        margin-bottom: 40px;
    }

    ${media.mobile} {
        padding: 60px 20px 100px;

        & > img {
            aspect-ratio: 160 / 77;
        }
    }

    ${media.mobileLandscape} {
        padding: 60px 20px 100px;

        & > img {
            aspect-ratio: 160 / 77;
        }
    }
`;