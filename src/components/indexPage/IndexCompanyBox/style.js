import { css } from "@emotion/react";

export const layout = (bgImg) => css`
    box-sizing: border-box;
    box-shadow: 0 4px 10px #dbdbdb;
    display: flex;
    justify-content: space-between;
    border: 4px solid transparent;
    border-radius: 30px;
    padding: 55px;
    width: 100%;
    transition: border-color 0.8s ease;
    background-size: cover;
    background-position: center;
    background-image: url(${bgImg});
`;

export const container = (on, off) => css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    width: 100%;
`;