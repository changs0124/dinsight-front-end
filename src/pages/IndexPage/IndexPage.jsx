import IndexCompany from '../../components/indexPage/IndexCompany/IndexCompany';
import IndexContact from '../../components/indexPage/IndexContact/IndexContact';
import IndexSolution from '../../components/indexPage/IndexSolution/IndexSolution';
import IndexSwiper from '../../components/indexPage/IndexSwiper/IndexSwiper';
import Layout from '../../components/Layout/Layout';
import { useEffect, useState } from 'react';

function IndexPage() {
    const [scollDown, setScrollDown] = useState(false);

    useEffect(() => {
        const handleScrollDown = () => {
            const scrollTop = window.scrollY;

            if (scrollTop > 50) {
                setScrollDown(true);
            } else {
                setScrollDown(false);
            }
        };

        window.addEventListener("scroll", handleScrollDown);
        return () => window.removeEventListener("scroll", handleScrollDown);
    }, [])

    return (
        <Layout>
            <IndexSwiper />
            <IndexCompany />
            <IndexSolution />
            <IndexContact />
        </Layout>
    );
}

export default IndexPage;