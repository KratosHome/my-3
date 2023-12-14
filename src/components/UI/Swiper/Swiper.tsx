"use client"
import React, {FC, useEffect, useRef, useState} from 'react';
import "./Swiper.scss"
import {useInView} from "react-intersection-observer";
import {useWindowWidth} from "@/hooks/useWindowWidth";
import Image from "next/image";
import {motion} from "framer-motion";

interface swiperTypes {
    cards: any[];
    renderItem: any;
    isButtonToggle: any
    numberCards: number
}

const Swiper: FC<swiperTypes> = ({
                                     cards,
                                     renderItem,
                                     isButtonToggle,
                                     numberCards
                                 }) => {
    const componentRef = useRef<any>(null);
    const ref = useRef<any>(null);

    const [refView, inView] = useInView();
    const [isVisible, setIsVisible] = useState(false);

    const [currentArray, setCurrentArray] = useState<any>(null);

    const [constraint, setConstraint] = useState(0);
    const [cardsToShow, setCardsToShow] = useState<any>(numberCards);
    const [slidePosition, setSlidePosition] = useState(0);

    const [scrollDirection, setScrollDirection] = useState("down");

    useEffect(() => {
        setCurrentArray(cards);
    }, [cards]);

    const setRefs = (node: any) => {
        ref.current = node;
        refView(node);
    };

    const screenWidth = useWindowWidth()

    useEffect(() => {
        if (typeof window !== "undefined") {
            if (screenWidth < 600) {
                setCardsToShow(1);
            } else if (screenWidth >= 600 && screenWidth < 900) {
                setCardsToShow(2 + numberCards);
            } else if (screenWidth >= 900 && screenWidth < 1200) {
                setCardsToShow(3 + numberCards);
            } else {
                setCardsToShow(4 + numberCards);
            }
        }
        setSlidePosition(0);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    const containerWidth = ref.current?.offsetWidth;
    useEffect(() => {
        const cardWidth = containerWidth / cardsToShow;

        if(Array.isArray(currentArray)) {
            setConstraint(cardWidth * currentArray.length - containerWidth);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [containerWidth]);


    const handleSwipe = (direction: any) => {
        const containerWidth = ref.current.offsetWidth;
        const cardWidth = containerWidth / cardsToShow;

        if (direction === 'left') {
            setSlidePosition(Math.min(slidePosition + cardWidth, 0));
        } else if (direction === 'right') {
            setSlidePosition(Math.max(slidePosition - cardWidth, -constraint));
        }
    }


    const onSwipe = (e: any, {offset}: any) => {
        let direction = offset.x > 0 ? 'right' : 'left';
        let newPosition = slidePosition + offset.x;
        newPosition = Math.min(newPosition, 0);
        newPosition = Math.max(newPosition, -constraint);
        setSlidePosition(newPosition);
    };


    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const scrollY = window.scrollY;
            const direction = scrollY > lastScrollY ? "down" : "up";
            setScrollDirection(direction);
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);

        return () => {
            window.removeEventListener("scroll", updateScrollDirection);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const showAnimate = {
        visible: (i: any) => ({
            opacity: 1,
            translateY: 0,
            transition: {
                delay: i * 0.3,
                type: "spring",
                duration: 0.2,
                damping: 10,
                stiffness: 100,
            },
        }),
        hidden: {
            opacity: 0,
            translateY: scrollDirection === "down" ? -300 : 200,
        },
    };


    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const [entry] = entries;
            setIsVisible(entry.isIntersecting);
        });

        const currentRef = componentRef.current;

        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className='container-cards' ref={componentRef}>
            {isButtonToggle &&
                <button className="toggle-swipe-left" onClick={() => handleSwipe('left')}>
                    <Image
                        src={"/icons/Chevron.svg"}
                        alt={"Chevron.svg"}
                        width={25}
                        height={25}/>
                </button>
            }
            <motion.div className='container-slider'>
                <motion.div
                    ref={setRefs}
                    drag='x'
                    dragConstraints={{right: 0, left: -constraint}}
                    animate={{x: slidePosition}}
                    key={constraint}
                    className='slider'
                    onDragEnd={onSwipe}
                    hello-attr={-constraint}
                >
                    {currentArray?.map((item: any, index: number) => (
                        <motion.div
                            key={item.id}
                            custom={index}
                            initial="hidden"
                            animate={inView ? "visible" : isVisible ? "visible" : "hidden"}
                            variants={showAnimate}
                            className='box'
                            style={{minWidth: `calc(100% / ${cardsToShow})`}}
                        >
                            {renderItem(item)}
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
            {isButtonToggle &&
                <button className="toggle-swipe" onClick={() => handleSwipe('right')}>
                    <Image
                        src={"/icons/Chevron.svg"}
                        alt={"Chevron.svg"}
                        width={25}
                        height={25}
                    />
                </button>
            }
        </div>
    );
};

export default Swiper;