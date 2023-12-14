'use client'
import React, {useRef, useState} from 'react';
import {usePathname} from "next/navigation";
import ReCAPTCHA from "react-google-recaptcha";
import {useForm} from "react-hook-form";
import {verifyCaptcha} from "@/api/ServerActions";
import ButtonAnimation from "@/components/UIA/ButtonAnimation/ButtonAnimation";
import {motion, AnimatePresence} from "framer-motion";
import {createReviewAction} from "@/api/createReview.server";


const FormHLeaveReview = ({setOpen}: {
    setOpen?: (open: boolean) => void
}) => {
    const pathName = usePathname();
    const recaptchaRef = useRef<ReCAPTCHA>(null);
    const [isVerified, setIsverified] = useState<boolean>(false);
    const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

    const {register, handleSubmit, formState: {errors}} = useForm();

    async function handleCaptchaSubmission(token: string | null) {
        await verifyCaptcha(token)
            .then(() => setIsverified(true))
            .catch(() => setIsverified(false));
    }

    const onSubmit = async (data: any) => {
        setFormSubmitted(true);
        await createReviewAction(data);
        if (setOpen) {
            setTimeout(() => setOpen(false), 1000);
        }
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
                            {...register("userName", {
                                required: `${pathName === "/ua" ? "Це поле є обов'язковим" : "This field is required"}`,
                                minLength: {
                                    value: 3,
                                    message: `${pathName === "/ua" ? "Ім'я має складатися не менше ніж з 3 символів" : "Name must be at least 3 characters long"}`
                                }
                            })}
                            placeholder={`${pathName === "/ua" ? "Ім'я" : "Name"}`}
                        />
                        {errors.userName && <span>{String(errors.userName.message)}</span>}
                    </div>
                    <div>
                        <input
                            {...register("company", {
                                required: `${pathName === "/ua" ? "Це поле є обов'язковим" : "This field is required"}`,
                                minLength: {
                                    value: 3,
                                    message: `${pathName === "/ua" ? "Назва компанії має складатися не менше ніж з 3 символів" : "Company name must be at least 3 characters long"}`
                                }
                            })}
                            placeholder={`${pathName === "/ua" ? "Компанія" : "Company"}`}
                        />
                        {errors.company && <span>{String(errors.company.message)}</span>}
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
                          <textarea
                              {...register("reviews", {
                                  required: false,
                                  maxLength: {
                                      value: 1000,
                                      message: `${pathName === "/ua" ? "Повідомлення не може містити більше 1000 символів" : "Message cannot be more than 700 characters"}`
                                  }
                              })}
                              placeholder={pathName === "/ua" ? "Повідомлення" : "Message"}
                          />
                        {errors.message && <span>{String(errors.message.message)}</span>}
                    </div>
                    <ReCAPTCHA
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
                    className="wrapper-thank-you"
                >
                    <p>{pathName === "/ua" ? "Дякую! Після модерації відгук буде опублікований!" : "Thank you! After moderation, feedback will be published!"}</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default FormHLeaveReview;
