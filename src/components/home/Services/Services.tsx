'use client'
import "./Services.scss";
import React from "react";
import Image from "next/image";
import {usePathname} from "next/navigation";
import Swiper from "@/components/UI/Swiper/Swiper";
import {useH2Animation} from "@/animation/useH2Animation";
import {services} from "@/mokDate/services";

const Services = () => {
    const pathName = usePathname();
    const animatedRef = useH2Animation();

    return (
        <div className='container-services'>
            <h2 ref={animatedRef} className="title-block">
                {pathName === "/ua" ? `Мої послуги` : `My services`}
            </h2>
            <Swiper
                cards={services}
                numberCards={-1}
                isButtonToggle={true}
                renderItem={(item: any) => (
                    <div className="iner-box">
                        <Image src={item.icon} alt={item.nameUa} width={50} height={50}/>
                        <span>
                            {pathName === "/ua" ? `${item.nameUa}` : `${item.nameEn}`}
                        </span>
                        <div className="inner-box-description">
                            {pathName === "/ua" ? `${item.descriptionUa}` : `${item.descriptionEn}`}
                        </div>
                    </div>
                )}
            />
        </div>
    );
};


export default Services;