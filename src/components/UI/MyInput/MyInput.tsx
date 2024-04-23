"use client";
import React, {FC, useState} from 'react';
import st from "./myInput.module.scss"
import {useForm} from "react-hook-form";
import HidePass from "@/assets/HidePass";

interface myInputProps {
    label?: string
    type: 'text' | 'password' | 'email' | 'phone';
    placeholder: string
    name: string
    register?: ReturnType<typeof useForm>['register'] | any;
    error?: string | any;
    value?: string | number | boolean;
    onChange?: (e: any) => void
    disabled?: boolean
}

const MyInput: FC<myInputProps> = ({type, placeholder, register, error, label, name, value, onChange, disabled}) => {
    const [inputType, setInputType] = useState<string>(type);

    const toggleShowPassword = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    return (
        <div className={st.container}>
            {label && <label>{label}</label>}
            <div className={st.wrapper_input}>
                <input
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    disabled={disabled}
                    {...register}
                />
                {type === "password" && <HidePass click={toggleShowPassword}/>}
                {error ? <div className={st.error_input}>{error}</div> : null}
            </div>
        </div>
    );
};

export default MyInput;