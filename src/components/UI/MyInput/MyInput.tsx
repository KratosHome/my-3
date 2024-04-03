"use client";
import React, {FC, useState} from 'react';
import "./myInput.scss"
import {useForm} from "react-hook-form";
import HidePass from "@/assets/HidePass";

interface myInputProps {
    label?: string
    type: string
    placeholder: string
    name: string
    register?: ReturnType<typeof useForm>['register'] | any;
    error?: string | any;
    value?: any
    onChange?: (e: any) => void
}

const MyInput: FC<myInputProps> = ({type, placeholder, register, error, label, name, value, onChange}) => {
    const [inputType, setInputType] = useState<string>(type);

    const toggleShowPassword = () => {
        setInputType(inputType === "password" ? "text" : "password");
    };

    return (
        <div className="container-my-input">
            {label && <label>{label}</label>}
            <div className="wrapper-my-input">
                <input
                    name={name}
                    type={inputType}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    {...register}
                />
                {type === "password" && <HidePass click={toggleShowPassword}/>}
                {error ? (
                    <div className="error-my-input">
                        {error}
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default MyInput;