/** @jsxImportSource @emotion/react */
import * as s from './style';
import { HiArrowLongRight } from "react-icons/hi2";

function NextButton({ onClick }) {
    return (
         <div css={s.layout} onClick={onClick} className={"custom-next"}>
            <button><HiArrowLongRight /></button>
        </div>
    );
}

export default NextButton;
