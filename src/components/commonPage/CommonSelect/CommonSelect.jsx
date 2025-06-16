/** @jsxImportSource @emotion/react */
import * as s from './style';
import { HiOutlineHome, HiChevronDown } from "react-icons/hi2";
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function CommonSelect({ title }) {
    const nav = useNavigate();
    const location = useLocation();
    const { t } = useTranslation("header");

    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false);
    const [isShowAiMenu, setIsShowAiMenu] = useState(false);

    const [selectedMenu, setSelectedMenu] = useState({});
    const [selectedSubMenu, setSelectedSubMenu] = useState({});
    const [selectedAiMenu, setSelectAiMenu] = useState({});

    useEffect(() => {
        setSelectedMenu(t("header", { returnObjects: true })?.find(menu => menu.title === title));
    }, [title, location.pathname]);

    useEffect(() => {
        setSelectedSubMenu(selectedMenu?.menu?.find(menu => window.location.pathname.startsWith(menu.path)))
    }, [selectedMenu, location.pathname])

    useEffect(() => {
        if (!!selectedSubMenu?.menu?.length) {
            const foundAiMenu = selectedSubMenu.menu?.find(menu => window.location.pathname === menu.path);

            if (foundAiMenu) {
                setSelectAiMenu(foundAiMenu);
            }
        } else {
            setSelectAiMenu({});
        }
    }, [selectedSubMenu, location.pathname])

    const handleSelectMenuOnClick = (menu) => {
        setSelectedMenu(menu)
        nav(menu.path)
    }

    const handleSelectSubMenuOnClick = (menu) => {
        setSelectedSubMenu(menu)
        nav(menu.path)
    }

    const handleSelectAiMenuOnClick = (menu) => {
        setSelectAiMenu(menu)
        nav(menu.path)
    }

    const handleSelectBoxOnClick = () => {
        setIsShowSubMenu(false);
        setIsShowAiMenu(false);
        setIsShowMenu(!isShowMenu);
    }

    const handleSubMenuOnClcik = () => {
        setIsShowMenu(false);
        setIsShowAiMenu(false);
        setIsShowSubMenu(!isShowSubMenu);
    }

    const handleAiMenuOnClick = () => {
        setIsShowMenu(false);
        setIsShowSubMenu(false);
        setIsShowAiMenu(!isShowAiMenu)
    }

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <HiOutlineHome onClick={() => nav("/")} />
                <div css={s.selectBox(isShowMenu)} onClick={handleSelectBoxOnClick}>
                    <HiChevronDown onClick={handleSelectBoxOnClick} />
                    <p>{selectedMenu?.title}</p>
                    <div css={s.optionBox(isShowMenu)}>
                        {
                            isShowMenu &&
                            t("header", { returnObjects: true })
                                .filter(menu => menu.title !== selectedMenu?.title)
                                .map((menu, idx) => (
                                    <p key={idx} onClick={() => handleSelectMenuOnClick(menu)}>
                                        {menu.title}
                                    </p>
                                ))
                        }
                    </div>
                </div>
                <div css={s.selectBox(isShowSubMenu)} onClick={handleSubMenuOnClcik}>
                    {
                        selectedMenu?.menu?.length > 1 && <HiChevronDown onClick={handleSubMenuOnClcik} />
                    }
                    <p>{selectedSubMenu?.title}</p>
                    <div css={s.optionBox(isShowSubMenu, selectedMenu?.menu?.length)}>
                        {
                            isShowSubMenu &&
                            selectedMenu.menu
                                .filter(menu => menu?.title !== selectedSubMenu?.title)
                                .map((menu, idx) => (
                                    <p key={idx} onClick={() => handleSelectSubMenuOnClick(menu)}>
                                        {menu?.title}
                                    </p>
                                ))
                        }
                    </div>
                </div>
                <div css={s.selectBox(isShowAiMenu)} onClick={handleAiMenuOnClick}>
                    {
                        selectedSubMenu?.menu?.length > 1 && <HiChevronDown onClick={handleAiMenuOnClick} />
                    }
                    <p>{selectedAiMenu?.title}</p>
                    <div css={s.optionBox(isShowAiMenu, selectedSubMenu?.menu?.length)}>
                        {
                            isShowAiMenu &&
                            selectedSubMenu.menu
                                .filter(menu => menu?.title !== selectedAiMenu.title)
                                .map((menu, idx) => (
                                    <p key={idx} onClick={() => handleSelectAiMenuOnClick(menu)}>
                                        {menu?.title}
                                    </p>
                                ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CommonSelect;