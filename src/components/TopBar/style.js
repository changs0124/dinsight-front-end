import { css } from "@emotion/react";
import { subMenuSlideDown, subMenuSlideUp } from "../../styles/keyframes";

export const layout = (ani) => css`
    box-sizing: border-box;
    position: absolute;
    top: 105px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
    animation: ${ani} 0.3s ease-in-out forwards;   
    z-index: 99;
`;

export const container = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    font-size: 30px;
    font-weight: 700;

    & > p {
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dbdbdb;
        padding: 20px 30px;
        width: 100%;
        font-size: 22px;

        :active {
            background-color: #cccccc;
        }
    }

`;

export const menuBox = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
    background-color: #0382F1;

    & > p {
        padding: 20px 30px 20px 50px;
        color: #ffffff;
        font-size: 18px;
        font-weight: 500;
    }

    & > :not(:nth-last-of-type(1)) {
        border-bottom: 1px solid #dbdbdb;
    }

    :active {
        background-color: #0382F177;
    }
`;