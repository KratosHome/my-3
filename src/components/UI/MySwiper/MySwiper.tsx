import "./mySwiper.scss"
import React, {FC, ReactNode, useEffect, useRef, useState} from "react";
import {gsap, Power3} from "gsap";
import Draggable from "gsap/Draggable";
import {useLocale} from "use-intl";
import {useH2Animation} from "@/animation/useH2Animation";
import {services} from "@/mokDate/services";
import {useGSAP} from "@gsap/react";
import Arrow from "@/assets/Arrow";

gsap.registerPlugin(Draggable);

interface MySwiperProps {
    swiperCount: number
    children: ReactNode
    isToggle: boolean
}

const MySwiper: FC<MySwiperProps> = ({children, swiperCount}) => {
    let imageList = useRef<HTMLDivElement | null>(null);

    const [offset, setOffset] = useState<number>(0);
    const [autoPlayEnabled, setAutoPlayEnabled] = useState(true);

    useEffect(() => {
        let timeoutId: NodeJS.Timeout;

        const autoPlay = () => {
            if (autoPlayEnabled) {
                setOffset((prevOffset) => (prevOffset + 1) % services.length);
            }
        };

        timeoutId = setTimeout(autoPlay, 2500);

        return () => {
            clearTimeout(timeoutId);
        };

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [offset, autoPlayEnabled]);


    const handleMouseEnter = () => {
        setAutoPlayEnabled(false);
    };

    const handleMouseLeave = () => {
        setAutoPlayEnabled(true);
    };

    useGSAP(() => {
        const shift = imageList.current?.getBoundingClientRect().width || 0;

        Array.from(imageList.current?.children || []).forEach((image) => {
            gsap.to(image as HTMLElement, {
                x: -(shift * offset / swiperCount),
                ease: Power3.easeOut,
                duration: 1,
            });
        });
    }, {dependencies: [offset]});


    const handleArrowClick = (direction: "next" | "prev") => {
        setAutoPlayEnabled(false);
        setOffset((prevOffset) => {
            return (
                (prevOffset + (direction === "next" ? 1 : -1) + services.length) %
                services.length
            );
        });
    };


    useGSAP(() => {
        let startX = 0;
        const draggableInstance = Draggable.create(imageList.current, {
            type: "x",
            bounds: ".banner-gallery__services",
            edgeResistance: 0.65,
            throwProps: true,
            onDragStart: function (e) {
                startX = e.clientX || e.touches[0].clientX;
            },
            onDragEnd: function (e) {
                const dragDistance =
                    e.clientX - startX || e.touches[0].clientX - startX;
                if (dragDistance > 50) {
                    handleArrowClick("prev");
                } else if (dragDistance < -50) {
                    handleArrowClick("next");
                }
            },
        });
    });

    useGSAP(() => {
        gsap.to(".banner-cover .banner-left", {
            y: "-100%",
            ease: Power3.easeOut,
            duration: 1,
            delay: 0.5,
        });

        gsap.to(".banner-cover .banner-right", {
            x: "100%",
            ease: Power3.easeOut,
            duration: 1,
            delay: 0.7,
        });

        gsap.to(".banner-cover", {
            display: "none",
            duration: 1,
            delay: 0.7,
        });
    })

    return (
        <div className="container_swiper">
            <div className="banner-gallery__services">
                <div
                    ref={imageList}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    {children}
                </div>
            </div>

            <button
                className="button-prev__swiper"
                type="button"
                name="arrow-control"
                title="arrow-control"
                onClick={() => handleArrowClick("prev")}>
                <Arrow/>
            </button>
            <button
                className="button-next__swiper"
                type="button"
                name="arrow-control"
                title="arrow-control"
                onClick={() => handleArrowClick("next")}>
                <Arrow/>
            </button>
        </div>
    );
};

export default MySwiper;