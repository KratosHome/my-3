import React, {useState} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import "./ShowMoreText.scss";
import {usePathname} from "next/navigation";
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";

type ShowMoreTextProps = {
    text: string;
    maxLength: number;
};

const ShowMoreText: React.FC<ShowMoreTextProps> = ({text, maxLength}) => {
    const pathName = usePathname();
    const [isShown, setIsShown] = useState(false);

    const toggleIsShown = () => setIsShown(!isShown);

    const truncatedText = text.substring(0, maxLength);
    const remainingText = text.substring(maxLength);

    const animationVariants = {
        hidden: {opacity: 0, transition: {duration: 0.3}},
        visible: {opacity: 1, transition: {duration: 0.3}}
    };

    return (
        <span className="show-more-text">
            <p>
                {truncatedText}
                <AnimatePresence>
                    {isShown && (
                        <motion.span
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={animationVariants}
                        >
                            {remainingText}
                        </motion.span>
                    )}
                </AnimatePresence>
            </p>
            {
                remainingText
                    ?
                    <ButtonAnimation isPulse={false} onClick={toggleIsShown} as={"button"}>
                        {isShown ? (pathName === "/ua" ? "сховати" : "hide") : (pathName === "/ua" ? "показати" : "show")}
                    </ButtonAnimation>
                    : null
            }
        </span>
    );
};

export default ShowMoreText;
