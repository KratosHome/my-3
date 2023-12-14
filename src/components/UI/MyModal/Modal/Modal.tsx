import React from "react";
import {AnimatePresence, motion} from "framer-motion";
import "./Modal.scss"
import CloseIcon from "@/components/UI/CloseIcon/CloseIcon";

type Props = {
    onClose: () => void;
    children: React.ReactNode;
    isOpen: boolean
    layoutId: string
};

export default function Modal({onClose, children, isOpen, layoutId}: Props) {
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const modalVariants = {
        hidden: {opacity: 0, y: -100, scale: 0.9},
        visible: {opacity: 1, y: 0, scale: 1},
        exit: {opacity: 0, y: 100, scale: 0.9}
    };

    return (
        <AnimatePresence>
            {isOpen &&
                <div className="version-modal-container" onClick={onClose}>
                    <motion.div
                        layoutId={layoutId}
                        className="version-modal"
                        style={{borderRadius: 40}}
                        onClick={handleClick}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        <button
                            className="close-modal"
                            onClick={onClose}>
                            <CloseIcon/>
                        </button>
                        {children}
                    </motion.div>
                </div>
            }
        </AnimatePresence>
    );
}
