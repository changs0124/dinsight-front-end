/** @jsxImportSource @emotion/react */
import * as s from './style';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import CommonTitle from '../../commonPage/CommonTitle/CommonTitle';

function History() {
    const { t: tHeader } = useTranslation("header");
    const { t: tHistory } = useTranslation("historyPage");

    useEffect(() => {
        setObject(tHistory("historyPage.buttons", { returnObjects: true })[0])
    }, [])

    const [object, setObject] = useState({});

    const handleSelectYearOnClick = (data) => {
        setObject(data)
    }

    return (
        <div css={s.layout}>
            <CommonTitle title={tHeader("header.0.title")} subtitle={tHeader("header.0.submenu.1.title")} />
            <div css={s.firstContainer}>
                <h2>{tHistory("historyPage.title")}</h2>
                <p>{tHistory("historyPage.context")}</p>
            </div>
            <div css={s.secondContainer}>
                <div css={s.buttonBox}>
                    {
                        tHistory("historyPage.buttons", { returnObjects: true }).map((data, idx) => (
                            <p key={idx} css={s.buttonItem(idx, object?.id)} onClick={() => handleSelectYearOnClick(data)}>{data.name}</p>
                        ))
                    }
                </div>
                {
                    object.values?.map((year, idx) => (
                        <div key={idx} css={s.yearBox(idx, (object?.values?.length - 1))}>
                            <h2>{year.name}</h2>
                            <div>
                                {
                                    year.values?.map((month, idx) => (
                                        <div css={s.monthBox}>
                                            <h2 key={idx}>{month.name}</h2>
                                            <div css={s.textBox}>
                                                {
                                                    month.values?.map(data => (
                                                        <p>{data}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default History;