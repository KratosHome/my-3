"use client"
import React, {useEffect, useState} from 'react';

const RegisterForm = () => {
    const [error, setError] = useState('');

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData.entries());

        console.log(data);
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
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="username" name="username"/>
                <input type="text" placeholder="email" name="email"/>
                <input type="text" placeholder="password" name="password"/>
                <input type="text" placeholder="repeat password" name="passwordRepeat"/>
                <input type="text" placeholder="img" name="img"/>
                <button type={"submit"}>register</button>
            </form>
            {error && <div>{error}</div>}
        </div>
    );
};

export default RegisterForm;