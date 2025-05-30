/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useEffect, useState } from 'react';
import { HiChevronDoubleUp } from "react-icons/hi2";

function TopButton() {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const onScroll = () => {
            setShowButton(window.scrollY > 10);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleToTopOnClick = () => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            {
                showButton &&
                <div css={s.layout} onClick={handleToTopOnClick}>
                    <button><HiChevronDoubleUp /></button>
                </div>
            }
        </>
    );
}

export default TopButton;