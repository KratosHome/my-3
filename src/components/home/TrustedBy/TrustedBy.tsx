'use client'
import st from "./trustedBy.module.scss"
import Button from "@/components/UI/Button/Button";
import MyModal from "@/components/UI/MyModal/MyModal";
import {usePathname} from "next/navigation";
import FormHLeaveReview from "@/components/home/FormHLeaveReview/FormHLeaveReview";
import {useH2Animation} from "@/animation/useH2Animation";
import {Swiper, SwiperSlide} from 'swiper/react';

const TrustedBy = ({reviews}: any) => {
    const pathName = usePathname();
    const animatedRef = useH2Animation();

    return (
        <div className={st.container}>
            <div className={st.background}/>
            <h2 ref={animatedRef} className="title-block">
                {pathName === "/ua" ? "відгуки" : "trusted by"}
            </h2>
            <div className={st.swiper}>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 20
                        },
                        900: {
                            slidesPerView: 2,
                            spaceBetween: 30
                        },
                    }}
                >
                    {reviews.map((item: any) =>
                        <SwiperSlide key={item.id} className={st.reviews_item}>
                            <div className={st.quotes}>“</div>
                            <div className={st.reviews_content}>
                                <div className={st.reviews}>{item.reviews}</div>
                                <div className={st.user_info}>
                                    <div>{item.userName}</div>
                                    <div>Owner of “{item.company}“</div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )}
                </Swiper>
            </div>
            <div className={st.wrapper_ent_rew}>
                <div>{pathName === "/ua" ? "Маєш що сказти?" : "Have words to say?"}</div>
                <MyModal
                    childrenOpen={
                        <Button>
                            {pathName === "/ua" ? "залишити відгук" : "leave review"}
                        </Button>
                    }
                    childrenModal={<FormHLeaveReview/>}
                    layoutId={"leaveReview"}
                />
            </div>
        </div>
    );
};

export default TrustedBy;