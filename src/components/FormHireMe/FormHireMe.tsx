import React from 'react';
import {useForm} from 'react-hook-form';
import "./FormHireMe.scss";
import {telegramAction} from "@/services/telegram.server";
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";
import ReCAPTCHA from "react-google-recaptcha"
import {useRef, useState} from "react"
import {verifyCaptcha} from "@/services/ServerActions";
import InputMask from 'react-input-mask';
import {motion, AnimatePresence} from 'framer-motion';
import {usePathname} from "next/navigation";

export default function FormHireMe({setOpen}: any) {
    const pathName = usePathname();
    const recaptchaRef = useRef<ReCAPTCHA>(null)
    const [isVerified, setIsverified] = useState<boolean>(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const {register, handleSubmit, formState: {errors}} = useForm();

    async function handleCaptchaSubmission(token: string | null) {
        setIsverified(true)
        await verifyCaptcha(token)
            .then(() => setIsverified(true))
            .catch(() => setIsverified(false))
    }

    const onSubmit = async (data: any) => {
        setFormSubmitted(true);
        setTimeout(() => setOpen(false), 1000);
        await telegramAction(data);
    };

    const thankYouAnimation = {
        initial: {opacity: 0, y: 50},
        animate: {opacity: 1, y: 0, transition: {type: "spring", damping: 5, stiffness: 100}},
        exit: {opacity: 0, y: -50, transition: {duration: 0.5}},
    };


    return (
        <AnimatePresence>
            {!formSubmitted ? (
                <motion.form
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={thankYouAnimation}
                    className="container-form-hire-me"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div>
                        <input
                            {...register(`name`, {
                                required: `${pathName === "/ua" ? "Це поле є обов'язковим" : "This field is required"}`,
                                minLength: {
                                    value: 3,
                                    message: `${pathName === "/ua" ? "Ім'я має складатися не менше ніж з 3 символів" : "Name must be at least 3 characters long"}`
                                }
                            })}
                            placeholder={`${pathName === "/ua" ? "Ім'я" : "Name"}`}
                        />
                        {errors.name && <span>{String(errors.name.message)}</span>}
                    </div>
                    <div>
                        <input
                            {...register("email", {
                                required: `${pathName === "/ua" ? "Це поле є обов'язковим" : "This field is required"}`,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: `${pathName === "/ua" ? "Невірна адреса електронної пошти" : "Invalid email address"}`
                                }
                            })}
                            placeholder={`${pathName === "/ua" ? "Електронна пошта" : "Email"}`}
                        />
                        {errors.email && <span>{String(errors.email.message)}</span>}
                    </div>
                    <div>
                        <InputMask
                            mask="+99 (999) 999-9999"
                            {...register("number", {
                                required: `${pathName === "/ua" ? "Це поле є обов'язковим" : "This field is required"}`,
                                pattern: {
                                    value: /^\+\d{2} \(\d{3}\) \d{3}-\d{4}$/,
                                    message: `${pathName === "/ua" ? "Недійсний формат номера телефону" : "Invalid phone number format"}`
                                }
                            })}
                            placeholder={`${pathName === "/ua" ? "Номер телефону" : "Phone Number"}`}
                        />
                        {errors.number && <span>{String(errors.number.message)}</span>}
                    </div>
                    <div>
                          <textarea
                              {...register("message", {
                                  required: false,
                                  maxLength: {
                                      value: 700,
                                      message: `${pathName === "/ua" ? "Повідомлення не може містити більше 700 символів" : "Message cannot be more than 700 characters"}`
                                  }
                              })}
                              placeholder={pathName === "/ua" ? "Повідомлення" : "Message"}
                          />
                        {errors.message && <span>{String(errors.message.message)}</span>}
                    </div>
                    <ReCAPTCHA
                        className="recaptcha"
                        sitekey={`${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
                        ref={recaptchaRef}
                        onChange={handleCaptchaSubmission}
                    />
                    <ButtonAnimation isPulse={false}>
                        <input
                            className="send-message"
                            type="submit"
                            disabled={!isVerified}
                            value={pathName === "/ua" ? "Надіслати" : "Send"}
                        />
                    </ButtonAnimation>
                </motion.form>
            ) : (
                <motion.div
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    variants={thankYouAnimation}
                    className={"wrapper-thank-you"}
                >
                    <p>{pathName === "/ua" ? "Дякую! Я постараюсь зв'язатися з вами якнайшвидше!" : "Thank you! I will try to contact you as soon as possible!"}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

