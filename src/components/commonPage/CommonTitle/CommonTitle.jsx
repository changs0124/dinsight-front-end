/** @jsxImportSource @emotion/react */
import * as s from './style';

function CommonTitle({ title, subtitle }) {

    return (
        <div css={s.layout}>
            {
                window.location.pathname === "/company"
                    ?
                    <div css={s.defaultContainer}>
                        <h2>{title}</h2>
                        <picture>
                            <source srcSet="/images/companyPage/logo3.svg" media="(max-width: 430px)" />
                            <img src={"/images/companyPage/logo2.svg"} alt="" />
                        </picture>
                    </div>
                    :
                    <div css={s.container}>
                        <h2>{title}</h2>
                        <h2>{subtitle}</h2>
                    </div>
            }
        </div>
    );
}

export default CommonTitle;