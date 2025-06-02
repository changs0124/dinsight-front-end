/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { HiChevronUp , HiChevronDown } from "react-icons/hi2";

function TopBar({ ani }) {
    const { t } = useTranslation("header");

    const [selectedMenu, setSelectedMenu] = useState("");

    const handleSelectMenuOnClick = (e) => {
        if (selectedMenu === e.target.innerText) {
            setSelectedMenu("");
        } else {
            setSelectedMenu(e.target.innerText);
        }
    }

    const handleSelectSubMenuOnclick = (e, path) => {
        e.stopPropagation();
        window.location.href = path
    }

    return (
        <div css={s.layout(ani)}>
            {
                t("header", { returnObjects: true }).map((menu, idx) => (
                    <div key={idx} css={s.container} onClick={handleSelectMenuOnClick}>
                        <p>{menu.title}
                            {
                                menu.title === selectedMenu ? <HiChevronUp /> : <HiChevronDown />
                            }
                        </p>
                        {
                            menu.title === selectedMenu &&
                            <div css={s.menuBox}>
                                {
                                    menu?.submenu?.map((menu, idx) => (
                                        <p key={idx} onClick={(e) => handleSelectSubMenuOnclick(e, menu.path)}>{menu.title}</p>
                                    ))
                                }
                            </div>
                        }
                    </div>
                ))
            }
        </div>
    );
}

export default TopBar;