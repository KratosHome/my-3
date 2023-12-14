'use client'
import React, {useState} from 'react';
import "./MyModal.scss"
import {motion, MotionConfig} from "framer-motion";
import Modal from "@/components/UI/MyModal/Modal/Modal";

type Props = {
    childrenOpen: React.ReactNode;
    layoutId: string
    childrenModal: React.ReactNode;
};

interface ChildrenModalProps {
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}


const MyModal = ({layoutId, childrenOpen, childrenModal}: Props) => {
    const [open, setOpen] = useState(false);

    const clonedChildrenModal = React.isValidElement<ChildrenModalProps>(childrenModal)
        ? React.cloneElement(childrenModal, { setOpen })
        : childrenModal;

    return (
        <MotionConfig transition={{duration: 0.5}}>
            <motion.div layout>
                <motion.div
                    layoutId={layoutId}
                    onClick={() => setOpen(true)}
                    style={{borderRadius: 10}}
                >
                    <motion.div layoutId="status">
                        {childrenOpen}
                    </motion.div>
                    <motion.div layoutId="content"/>
                </motion.div>
                <Modal
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    layoutId={layoutId}
                >
                    {clonedChildrenModal}
                </Modal>
            </motion.div>
        </MotionConfig>
    );
}
export default MyModal;
