/** @jsxImportSource @emotion/react */
import * as s from './style';

function CommonHeader({ title, context, img }) {
    return (
        <div css={s.layout(img)}>
            <h2>{title}</h2>
            <p>DT Solution | AI Solution</p>
        </div>
    );
}

export default CommonHeader;