/** @jsxImportSource @emotion/react */
import * as s from './style';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';
import { useTranslation } from 'react-i18next';
import { HiChevronDown } from "react-icons/hi2";
import { useState } from 'react';

function Contact() {
    const { t: tHeader } = useTranslation("header");
    const { t: tContact } = useTranslation("contact");

    const [isShow, setIsShow] = useState(false);
    const [mailContent, setMailContent] = useState({
        type: tContact("contact.defaultType"),
        company: "",
        tel: "",
        name: "",
        email: "",
        title: "",
        content: ""
    });

    const handleMainContentOnChange = (e) => {
        setMailContent(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleSelectBoxOnClick = () => {
        setIsShow(!isShow);
    }

    const handleSelectTypeOnClick = (e) => {
        setMailContent(prev => ({
            ...prev,
            "type": e.target.innerText
        }))
    }

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.4.title")} subtitle={tHeader("header.4.submenu.1.title")} />
            <div css={s.container}>
                <div css={s.infoItem}>
                    <p>{tContact("contact.type")}</p>
                    <div css={s.selectBox(isShow)} onClick={handleSelectBoxOnClick}>
                        <HiChevronDown onClick={handleSelectBoxOnClick} />
                        <p>{mailContent?.type}</p>
                        <div css={s.optionBox(isShow)}>
                            {
                                isShow &&
                                tContact("contact.types", { returnObjects: true })
                                    .filter(type => type !== mailContent?.type)
                                    .map((type, idx) => (
                                        <p key={idx} onClick={handleSelectTypeOnClick}>
                                            {type}
                                        </p>
                                    ))
                            }
                        </div>
                    </div>
                </div>
                <div css={s.infoBox}>
                    <div css={s.infoItem}>
                        <p>{tContact("contact.company")}</p>
                        <div css={s.inputBox}>
                            <img src="/images/commonPage/require.png" alt="" />
                            <input type="text" name="company" onChange={handleMainContentOnChange} />
                        </div>
                    </div>
                    <div css={s.infoItem}>
                        <p>{tContact("contact.tel")}</p>
                        <div css={s.inputBox}>
                            <img src="/images/commonPage/require.png" alt="" />
                            <input type="text" name="tel" onChange={handleMainContentOnChange} />
                        </div>
                    </div>
                    <div css={s.infoItem}>
                        <p>{tContact("contact.name")}</p>
                        <div css={s.inputBox}>
                            <img src="/images/commonPage/require.png" alt="" />
                            <input type="text" name="name" onChange={handleMainContentOnChange} />
                        </div>
                    </div>
                    <div css={s.infoItem}>
                        <p>{tContact("contact.email")}</p>
                        <div css={s.inputBox}>
                            <img src="/images/commonPage/require.png" alt="" />
                            <input type="text" name="email" onChange={handleMainContentOnChange} />
                        </div>
                    </div>
                </div>
                <div css={s.infoItem}>
                    <p>{tContact("contact.title")}</p>
                    <div css={s.inputBox}>
                        <img src="/images/commonPage/require.png" alt="" />
                        <input type="text" name="title" onChange={handleMainContentOnChange} />
                    </div>
                </div>
                <div css={s.infoItem}>
                    <p>{tContact("contact.content")}</p>
                    <div css={s.inputBox}>
                        <textarea name="content" onChange={handleMainContentOnChange} />
                    </div>
                </div>
                <div css={s.contextBox}>
                    {
                    tContact("contact.context", {returnObjects : true}).map((line, idx) => (
                        <p key={idx}>{line}</p>
                    ))
                    }
                </div>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Contact;