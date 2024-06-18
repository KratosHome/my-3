"use client"
import st from "./servicesNew.module.scss"
import {useLocale} from "use-intl";
import {useH2Animation} from "@/animation/useH2Animation";
import {services} from "@/mokDate/services";
import Image from "next/image";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Navigation} from 'swiper/modules';
import Arrow from "@/assets/Arrow";


const ServicesNew = () => {
    const locale = useLocale()
    const animatedRef = useH2Animation();

    return (
        <div className={st.container}>
            <h2 ref={animatedRef} className="title-block">
                {locale === "ua" ? `Мої послуги` : `My services`}
            </h2>

            <div className={st.container_swiper}>
                <Swiper
                    slidesPerView={2.5}
                    spaceBetween={30}
                    loop={true}
                    centeredSlides={true}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    modules={[Navigation]}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        600: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                        1200: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                        1700: {
                            slidesPerView: 3,
                            spaceBetween: 30
                        },
                    }}
                >
                    {services.map((item: any) => (
                        <SwiperSlide key={item.id}>
                            <div className={st.item_swiper}>
                                <div className={st.img_wrapper}>
                                    <Image
                                        src={item.icon}
                                        alt={item.nameUa}
                                        fill={true}
                                    />
                                </div>
                                <div className={st.title}>{locale === "ua" ? item.nameUa : item.nameEn}</div>
                                <div
                                    className={st.description}>{locale === "ua" ? item.descriptionUa : item.descriptionEn}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div>
                    <button
                        className={`${st.button_prev__swiper} swiper-button-prev`}
                        type="button"
                        name="arrow-control"
                        title="arrow-control"
                    >
                        <Arrow/>
                    </button>
                    <button
                        className={`${st.button_next__swiper} swiper-button-next`}
                        type="button"
                        name="arrow-control"
                        title="arrow-control"
                    >
                        <Arrow/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ServicesNew;

