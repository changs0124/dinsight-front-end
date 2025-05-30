/** @jsxImportSource @emotion/react */
import * as s from './style';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import TopButton from '../buttons/TopButton/TopButton';

function Layout({ children }) {
    return (
        <div css={s.layout}>
            <Header />
            {children}
            <Footer />
            <TopButton />
        </div>
    );
}

export default Layout;