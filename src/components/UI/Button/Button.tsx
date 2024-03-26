'use client'
import React, {FC} from 'react';
import st from "./Button.module.scss";
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";

interface ButtonType {
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean
}

const Button: FC<ButtonType> = ({children, onClick, disabled}: any) => {

    const buttonClasses = `${st.containerButton} ${disabled ? st.disabledButton : ''}`;


    return (
        <ButtonAnimation
            isPulse={false}
            as="button"
            className={buttonClasses}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </ButtonAnimation>
    );
};

export default Button;
