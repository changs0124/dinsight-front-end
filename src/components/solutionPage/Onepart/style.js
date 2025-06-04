import { css } from "@emotion/react";
import { media } from "../../../styles/breakpoints";

export const layout = css`
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%; 
`;

export const mobileSelectBox = css`
    display: none;
   
    ${media.mobile} {
        box-sizing: border-box;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px 30px;
        width: 100%;
    }
`;

export const mobileSelectItem = (path, realPath) => css`
    box-sizing: border-box;
    border: 1px solid #0382F1;
    padding: 20px 0px;
    width: 50%;
    background-color: ${path === realPath ? "#0382F1" : "#ffffff"};
    text-align: center;
    color: ${path === realPath ? "#ffffff" : "#0382F1"};
    line-height: 2px;
    font-size: 13px;
    font-weight: 500;
`;