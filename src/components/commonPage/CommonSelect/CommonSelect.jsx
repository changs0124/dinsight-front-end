/** @jsxImportSource @emotion/react */
import * as s from './style';
import { HiOutlineHome, HiChevronDown } from "react-icons/hi2";
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

function CommonSelect({ title }) {
    const nav = useNavigate();
    const { t } = useTranslation("header");

    const [isShowMenu, setIsShowMenu] = useState(false);
    const [isShowSubMenu, setIsShowSubMenu] = useState(false)

    const [selectedMenu, setSelectedMenu] = useState({});
    const [selectedSubMenu, setSelectedSubMenu] = useState({});

    useEffect(() => {
        setSelectedMenu(t("header", { returnObjects: true }).find(menu => menu.title === title));
    }, [title]);

    useEffect(() => {
        if (!!selectedMenu.title) {
            setSelectedSubMenu(selectedMenu?.submenu[0]);
        }
    }, [selectedMenu])


    const handleSelectMenuOnClick = (menu) => {
        setSelectedMenu(menu)
        nav(menu.path)
    }

    const handleSelectSubMenuOnClick = (menu) => {
        setSelectedSubMenu(menu)
        nav(menu.path)
    }

    const handleSelectBoxOnClick = () => {
        setIsShowSubMenu(false);
        setIsShowMenu(!isShowMenu);
    }

    const handleSubMenuOnClcik = () => {
        setIsShowMenu(false);
        setIsShowSubMenu(!isShowSubMenu);
    }
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <HiOutlineHome onClick={() => nav("/")} />
                <div css={s.selectBox(isShowMenu)} onClick={handleSelectBoxOnClick}>
                    <HiChevronDown />
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
                        selectedMenu.submenu?.length > 1 && <HiChevronDown />
                    }
                    <p>{selectedSubMenu.title}</p>
                    <div css={s.optionBox(isShowSubMenu, selectedMenu?.submenu?.length)}>
                        {
                            isShowSubMenu &&
                            selectedMenu.submenu
                                .filter(menu => menu?.title !== selectedSubMenu.title)
                                .map((menu, idx) => (
                                    <p key={idx} onClick={() => handleSelectSubMenuOnClick(menu)}>
                                        {menu.title}
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