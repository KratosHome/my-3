'use client'
import React, {useRef} from 'react';
import "./TrustedBy.scss"
import Button from "@/components/UI/Button/Button";
import MyModal from "@/components/UI/MyModal/MyModal";
import {usePathname} from "next/navigation";
import FormHLeaveReview from "@/components/FormHLeaveReview/FormHLeaveReview";
import Swiper from "@/components/UI/Swiper/Swiper";
import {variantsH2} from "@/animation/variantsH2";
import {motion, useInView} from "framer-motion";


const TrustedBy = ({reviews}: any) => {
    const pathName = usePathname();
    const ref = useRef(null);
    const isInView = useInView(ref);

    return (
        <div className="container-trusted-by">
            <div className="inner-container"/>
            <motion.h2
                ref={ref}
                className="title-block"
                variants={variantsH2(isInView)}
                initial={"hidden"}
                animate={"visible"}
            >
                {pathName === "/ua" ? "відгуки" : "trusted by"}
            </motion.h2>
            <Swiper
                isButtonToggle={false}
                cards={reviews}
                numberCards={0}
                renderItem={(item: any) => (
                    <div key={item.id} className="container-reviews">
                        <div className="quotes">“</div>
                        <div className="wrapper-reviews">
                            <div className="reviews">{item.reviews}</div>
                            <div className="user-info">
                                <div>{item.userName}</div>
                                <div>{item.company}</div>
                            </div>
                        </div>
                    </div>
                )}
            />
            <div className="wrapper-sent-rew">
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