'use client'
import React from 'react';
import "./TrustedBy.scss"
import Button from "@/components/UI/Button/Button";
import MyModal from "@/components/UI/MyModal/MyModal";
import {usePathname} from "next/navigation";
import FormHLeaveReview from "@/components/FormHLeaveReview/FormHLeaveReview";
import Swiper from "@/components/UI/Swiper/Swiper";


const TrustedBy = ({reviews}: any) => {
    const pathName = usePathname();
    return (
        <div className="container-trusted-by">
            <div className="inner-container"/>
            <span className="title-block">
                   {pathName === "/ua" ? "залишити відгук" : " відгуки"}
               </span>
            <Swiper
                isButtonToggle={false}
                cards={reviews}
                numberCards={0}
                renderItem={(item: any) => (
                    <div key={item.id} className="container-reviews">
                        <div className="quotes">“</div>
                        <div className="wrapper-reviews">
                            <div className="reviews">{item.reviews}</div>
                            <div>{item.userName}</div>
                            <div>{item.company}</div>
                        </div>
                    </div>
                )}
            />
            <div></div>
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
    );
};

export default TrustedBy;