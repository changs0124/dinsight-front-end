import { css } from "@emotion/react";
import { media } from "../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 205px 350px 100px;
    width: 100%;

    & > h2 {
        padding-bottom: 50px;
        text-align: center;
        font-size: 50px;
        font-weight: 700;
    }

    & > p {
        padding-bottom: 50px;
        font-size: 22px;
        font-weight: 400;
        white-space: pre-line;
    }

    & > p:nth-last-of-type(1) {
        padding-bottom: 0;
    }

    ${media.mobile} {
        padding: 205px 20px 100px;

        & > h2 {
            padding-bottom: 50px;
            text-align: center;
            font-size: 30px;
            font-weight: 700;
        }
    
        & > p {
            padding-bottom: 50px;
            line-height: 25px;
            font-size: 16px;
            font-weight: 400;
        }
    
    }
    
    ${media.mobileLandscape} {
        padding: 205px 20px 100px;

        & > h2 {
            padding-bottom: 50px;
            text-align: center;
            font-size: 30px;
            font-weight: 700;
        }
    
        & > p {
            padding-bottom: 50px;
            line-height: 25px;
            font-size: 16px;
            font-weight: 400;
        }
    }
`;