/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { HiChevronDown } from "react-icons/hi2";
import React from 'react';

function Footer() {
    const nav = useNavigate();
    const { t } = useTranslation("footer");

    const [isShow, setIsShow] = useState(false);

    const handleSelectBoxOnclick = () => {
        setIsShow(!isShow)
    }

    return (
        <div css={s.layout}>
            <div css={s.container}>
                <div css={s.routeAndSelectBox}>
                    <div css={s.routeBox}>
                        {
                            t("footer.route", { returnObjects: true }).map((route, idx) => (
                                <p key={idx} onClick={() => nav(route.path)}>{route.title}</p>
                            ))
                        }
                    </div>
                    <div css={s.selectBox(isShow)} onClick={handleSelectBoxOnclick}>
                        <p>{t("footer.link", { returnObjects: true })[0]?.name}<HiChevronDown /></p>
                        <div css={s.optionBox(isShow)}>
                            {
                                isShow &&
                                t("footer.link", { returnObjects: true }).slice(1).map((link, idx) => (
                                    <p key={idx} value={link.url} onClick={() => window.open(link.url, "_blank")}>{link.name}</p>
                                ))
                            }
                        </div>
                    </div>
                </div>
                {
                    t("footer.address", { returnObjects: true }).map((address, idx) => (
                        <div key={idx} css={s.addressBox}>
                            <p>{address.name}</p>
                            <p>{address.address}</p>
                        </div>

                    ))
                }
                <div css={s.ectBox}>
                    ©DINSIGHT CO., LTD. ALL RIGHTS RESERVED.adm
                </div>
            </div>
        </div>
    );
}

export default Footer;