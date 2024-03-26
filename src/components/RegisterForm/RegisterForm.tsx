"use client"
import React, {useState} from 'react';
import "./RegisterForm.scss";
import MyInput from "@/components/UI/MyInput/MyInput";
import Button from "@/components/UI/Button/Button";
import Warning from "@/components/UI/Warning/Warning";

const RegisterForm = ({dict}: any) => {
    const [error, setError] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        const res = await fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const result = await res.json();

        if (!res.ok) {
            setError(result.error || 'An error occurred.');
            return;
        }

        setError('');
    };

    return (
        <div className="register-form__container">
            <form onSubmit={handleSubmit}>
                <MyInput type={"text"} placeholder={dict.page.login.username} name={"username"}/>
                <MyInput type={"text"} placeholder={dict.page.login.email} name={"email"}/>
                <MyInput type={"password"} placeholder={dict.page.login.password} name={"password"}/>
                <MyInput type={"password"} placeholder={dict.page.login.repeatPassword} name={"passwordRepeat"}/>
                <Button>{dict.page.login.submit}</Button>
            </form>
            {error && <Warning color={"error"}>{error}</Warning>}
        </div>
    );
};

export default RegisterForm;