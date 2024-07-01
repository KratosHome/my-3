import {useRef, useState} from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import "./ExperienceList.scss";
import {usePathname} from "next/navigation";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const ExperienceList = ({item, index}: any) => {
    const pathName = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef(null);
    const additionalContentRef = useRef(null); // Додатковий ref для анімаційного контенту

    const toggleOpen = () => {
        setIsOpen(!isOpen);
        animateContent(!isOpen);
    };

    const animateContent = (opening: any) => {
        gsap.to(additionalContentRef.current, {
            duration: 0.5,
            height: opening ? "auto" : "0px",
            opacity: opening ? 1 : 0,
            onComplete: () => ScrollTrigger.refresh(),
        });

    };

    useGSAP(() => {
        const element = ref.current;
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: element,
                start: "top bottom+=200",
                end: "bottom top",
                toggleActions: "play none none reverse",
            }
        });

        tl.fromTo(element, {
            x: index % 2 === 0 ? -300 : 300,
            opacity: 0,
            scale: 0.8
        }, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out"
        });
    });

    return (
        <div ref={ref} className="wrapper-experience-list" onClick={toggleOpen} data-isopen={isOpen}>
            <div className="child">
                <div className="wrapper-title">
                    <div>
                        {pathName === "/ua" ? `${item.titleUa}` : `${item.titleEn}`}
                    </div>
                    <a className="link-another-platform" href={item.link} target="_blank"
                       rel="noopener noreferrer">{item.company}</a>
                </div>
                <div className="wrapper-data">
                    <span>
                        {pathName === "/ua" ? `${item.dateUa}` : `${item.dateEn}`}
                    </span>
                    <span className="open-icon">
                        {isOpen ? "-" : "+"}
                    </span>
                </div>
            </div>
            <div ref={additionalContentRef} className="additional-content">
                <div>
                    {
                        pathName === "/ua" ? (
                            Array.isArray(item.descriptionUa) ? (
                                item.descriptionUa.map((desc: any) => <div key={desc.text}>{desc.text}</div>)
                            ) : (
                                <div>{item.descriptionUa}</div>
                            )
                        ) : (
                            Array.isArray(item.descriptionEn) ? (
                                item.descriptionEn.map((desc: any) => <div key={desc.text}>{desc.text}</div>)
                            ) : (
                                <div>{item.descriptionEn}</div>
                            )
                        )
                    }
                </div>
                <div className="wrapper-technologies">
                    {item.technologies.map((tech: any) =>
                        <span key={tech}>{tech}</span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ExperienceList;
