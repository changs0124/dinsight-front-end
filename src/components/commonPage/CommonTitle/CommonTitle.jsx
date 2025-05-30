/** @jsxImportSource @emotion/react */
import * as s from './style';

function CommonTitle({ title, subtitle }) {
    return (
        <div css={s.layout}>
            <div css={s.container}>
                <h2>{title}</h2>
                <h2>{subtitle}</h2>
            </div>
        </div>
    );
}

export default CommonTitle;