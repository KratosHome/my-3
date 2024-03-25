'use client'
import React, {FC} from 'react';
import st from "./Button.module.scss";
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";

interface ButtonType {
    children: React.ReactNode;
    onClick?: any
}

const Button: FC<ButtonType> = ({children, onClick}: any) => {
    return (
        <ButtonAnimation
            isPulse={false}
            as="button"
            className={st.containerButton}
            onClick={onClick}
        >
            {children}
        </ButtonAnimation>
    );
};

export default Button;
