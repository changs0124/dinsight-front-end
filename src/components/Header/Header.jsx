/** @jsxImportSource @emotion/react */
import * as s from './style';
import i18n from '../../i18n';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { slideDown, slideUp } from '../../styles/keyframes';
import { HiBars3, HiOutlineXMark } from "react-icons/hi2";

function Header() {
    const nav = useNavigate();
    const { t } = useTranslation("header");

    const [selectedHeader, setSelectedHeader] = useState("");

    const [isOpen, setIsOpen] = useState(false);
    const [showShadow, setShowShadow] = useState(false);

    const [ani, setAni] = useState(slideDown)

    useEffect(() => {
        const lan = localStorage.getItem("i18nLng");
        if (!lan) {
            localStorage.setItem("i18nLng", "ko");
            i18n.changeLanguage("ko")
        } else {
            i18n.changeLanguage(lan);
        }
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setShowShadow(window.scrollY > 890);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleChangeLanguageOnClick = (lan) => {
        setSelectedHeader("")
        i18n.changeLanguage(lan)
    }

    const handleOpenTopBarOnClick = () => {
        setSelectedHeader("")
        setIsOpen(true)
    }

    const handleCloseTopBarOnClick = () => {
        setSelectedHeader("")
        setAni(slideUp)
        setTimeout(() => {
            setIsOpen(false)
            setAni(slideDown)
        }, 300)
    }

    const hadnleMouseOver = (e) => {
        setSelectedHeader(e.target.innerText)
    }

    const handleMouseLeave = () => {
        setSelectedHeader("")
    }

    return (
        <div css={s.layout(showShadow)}>
            <div css={s.container}>
                <div onClick={() => nav("/")}>
                    <picture>
                        <source srcSet="/images/header/logo4_360.png" media="(max-width: 1024px)" />
                        <source srcSet="/images/header/logo4_770.png" media="(max-width: 640)" />
                        <img src="/images/header/logo4.png" />
                    </picture>
                </div>
                <div css={s.menuBox}>
                    {
                        t("header", { returnObjects: true })?.map((menu, idx) => (
                            <p key={idx} onClick={() => window.location.href = menu.path} onMouseOver={hadnleMouseOver}>{menu.title}</p>
                        ))
                    }

                </div>
                <div css={s.lanBox(localStorage.getItem("i18nextLng"), isOpen)}>
                    <button onClick={() => handleChangeLanguageOnClick("ko")}>KOR</button>
                    <button onClick={() => handleChangeLanguageOnClick("en")}>ENG</button>
                    {
                        isOpen ? <HiOutlineXMark onClick={handleCloseTopBarOnClick} /> : <HiBars3 onClick={handleOpenTopBarOnClick} />
                    }
                </div>
            </div>
            {
                selectedHeader !== "" &&
                <div css={s.subMenuContainer} onMouseLeave={handleMouseLeave}>
                    {
                        (t("header", { returnObjects: true }).find(menu => menu.title === selectedHeader) ?? {}).submenu?.map((menu, idx) => (
                            <p key={idx} onClick={() => nav(menu.path)}>{menu.title}</p>
                        ))
                    }
                </div>
            }
        </div>
    );
}

export default Header;