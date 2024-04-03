"use client"
import "./createPost.scss";
import React, {useEffect, useRef, useState} from 'react';
import "react-quill/dist/quill.snow.css";
import {useFetchData} from "@/hooks/useFetchData";
import {useSession} from "next-auth/react";
import Loading from "@/components/UI/Loading/Loading";
import Warning from "@/components/UI/Warning/Warning";
import {useLocale} from "@/hooks/useLocale";
import dynamic from "next/dynamic";
import Button from "@/components/UI/Button/Button";
import MyInput from "@/components/UI/MyInput/MyInput";
import {useForm} from "react-hook-form";

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

const CreatePost = () => {
    const {locale} = useLocale();
    const {data: session} = useSession();
    const {data, error, isLoading, fetchData} = useFetchData<{ error?: string }>();

    const {register, watch, reset, formState: {errors}, handleSubmit} = useForm({mode: 'onBlur'});
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [desc, setDesc] = useState("");
    const [postId, setPostId] = useState<any>(null);
    const [image, setImage] = useState<any>(null);
    const title = watch("title");
    const url = watch("url");
    const shortTitle = watch("shortTitle");

    useEffect(() => {
        if (data) {
            setPostId(data.postId);
        }
    }, [data]);

    const myColors = [
        "purple",
        "#785412",
        "#452632",
        "#856325",
        "#963254",
        "#254563",
        "white"
    ];
    const modules = React.useMemo(() => ({
        toolbar: {
            container: [
                [{header: [1, 2, 3, 4, 5, 6, false]}],
                ["bold", "italic", "underline", "strike", "blockquote"],
                [{align: []}],
                [{list: "ordered"}, {list: "bullet"}],
                ["link", "image"],
                [{color: myColors}],
                [{background: myColors}],
            ],
        },
    }), []);


    const formats = [
        "header",
        "bold",
        "italic",
        "underline",
        "strike",
        "blockquote",
        "list",
        "bullet",
        "link",
        "color",
        "image",
        "background",
        "align"
    ];

    const handleProcedureContentChange = (content: any) => {
        setDesc(content);
    };

    const handleImageChange = (e: any) => {
        const file = e.target.files[0];
        setImage(file);
    };


    const cretePost = () => {
        const formData = new FormData();
        const userId = (session?.user as any)?._id;
        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('shortTitle', shortTitle);

        if (postId) {
            formData.append('local', locale === "ua" ? "en" : "ua");
        } else {
            formData.append('local', locale);
        }
        formData.append('url', url);

        if (postId) {
            formData.append('postId', postId);
        }
        fetchData('/api/post/create', formData, true)

        setDesc('');
        setImage(null);
        reset()

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

        if (postId) {
            setPostId(null);
        }

    }

    return (
        <>
            {isLoading && <Loading/>}
            {data && <Warning color={"ok"}>sen post </Warning>}
            {data && <Warning color={"ok"}>create another language post {locale === "ua" ? "en" : "ua"}</Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div className="create-post__container">
                <Button onClick={cretePost}>Create Post</Button>
                <MyInput
                    type="text"
                    placeholder="title"
                    name="title"
                    register={{
                        ...register('title', {
                            required: 'This field is required',
                            minLength: {
                                value: 6,
                                message: 'Name must be at least 6 characters',
                            },
                            maxLength: {
                                value: 50,
                                message: 'Name cannot be more than 50 characters',
                            }
                        })
                    }}
                    error={errors.title?.message}
                />
                <MyInput
                    type="text"
                    placeholder="sub title"
                    name="shortTitle"
                    register={{
                        ...register('shortTitle', {
                            required: 'This field is required',
                            minLength: {
                                value: 6,
                                message: 'Name must be at least 6 characters',
                            },
                            maxLength: {
                                value: 100,
                                message: 'Name cannot be more than 100 characters',
                            }
                        })
                    }}
                    error={errors.shortTitle?.message}
                />
                <MyInput
                    type="text"
                    placeholder="url"
                    name="url"
                    register={{
                        ...register('url', {
                            required: 'This field is required',
                            minLength: {
                                value: 6,
                                message: 'Name must be at least 6 characters',
                            },
                            maxLength: {
                                value: 30,
                                message: 'Name cannot be more than 30 characters',
                            }
                        })
                    }}
                    error={errors.url?.message}
                />
                <input
                    className="file-input__create-post"
                    type="file"
                    ref={fileInputRef} onChange={handleImageChange}
                />
                <ReactQuill
                    className="text_area"
                    theme="snow"
                    modules={modules}
                    formats={formats}
                    value={desc}
                    onChange={handleProcedureContentChange}
                />
            </div>
        </>
    );
};

export default CreatePost;