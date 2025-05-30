/** @jsxImportSource @emotion/react */
import * as s from './style';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { INDEX_SLIDE } from '../../../constants/imgs';

function IndexSwiper() {
    const { t } = useTranslation("indexSwiper");
    const ref = useRef();

    const [index, setIndex] = useState(0);
    return (
        <div css={s.layout}>
            <Swiper
                modules={[Autoplay, Navigation]}
                onSlideChange={swiper => setIndex(swiper.realIndex)}
                onSwiper={(swiper) => (ref.current = swiper)}
                autoplay={{ delay: 8000 }}
                loop
                slidesPerView={1}
                style={{ width: "100%", height: "100%" }}
            >
                {
                    INDEX_SLIDE?.map((url, idx) => (
                        <SwiperSlide key={idx}>
                            <div css={s.container(url)}>
                                <div css={s.textBox(idx, index)}>
                                    <h2>{t('indexSwiper.title')}</h2>
                                    <p>{t('indexSwiper.subtitle')}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}

export default IndexSwiper;