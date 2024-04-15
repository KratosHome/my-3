"use client"
import "./postEditor.scss";
import React, {FC, useEffect, useRef, useState} from 'react';
import "react-quill/dist/quill.snow.css";
import {useFetchData} from "@/hooks/useFetchData";
import {useSession} from "next-auth/react";
import Loading from "@/components/UI/loaders/Loading/Loading";
import Warning from "@/components/UI/Warning/Warning";
import {useLocale} from "@/hooks/useLocale";
import dynamic from "next/dynamic";
import Button from "@/components/UI/Button/Button";
import MyInput from "@/components/UI/MyInput/MyInput";
import {useForm} from "react-hook-form";
import Image from "next/image";

const ReactQuill = dynamic(() => import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading...</p>
});

interface CreatePostProps {
    post?: any
}

const PostEditor: FC<CreatePostProps> = ({post}) => {
    const {locale} = useLocale();
    const {data: session} = useSession();
    const {data, error, isLoading, fetchData} = useFetchData<{ error?: string }>();

    const {register, watch, reset, formState: {errors}} = useForm({mode: 'onBlur'});
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [desc, setDesc] = useState(post?.desc || '');
    const [postId, setPostId] = useState<any>(null);
    const [image, setImage] = useState<any>(null);
    const title = watch("title");
    const url = watch("url");
    const keyWords = watch("keyWords");
    const subTitle = watch("subTitle");

    useEffect(() => {
        if (post) {
            reset({
                title: post.title,
                url: post.url,
                subTitle: post.subTitle
            });
        }
    }, [post]);

    useEffect(() => {
        if (postId) {
            setDesc('');
            reset({
                title: "",
                desc: "",
                subTitle: "",
                keyWords: "",
                url: data.url,
            });
        }
    }, [postId]);

    useEffect(() => {
        if (data) {
            setPostId(data.url);
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
        const newKeyWords = keyWords.split(',').map((item: any) => item.trim());

        formData.append('userId', userId);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('subTitle', subTitle);
        formData.append('keyWords', newKeyWords);
        formData.append('url', url);

        if (postId) {
            formData.append('local', locale === "ua" ? "en" : "ua");
        } else {
            formData.append('local', locale);
        }

        if (postId) {
            formData.append('postId', postId);
        }
        fetchData('/api/post/create', formData, true)

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }

        if (postId) {
            setPostId(null);
        }

    }

    const updatePost = () => {
        const formData = new FormData();
        const newKeyWords = keyWords.split(',').map((item: any) => item.trim());
        formData.append('local', locale);
        formData.append('id', post._id);
        formData.append('title', title);
        formData.append('desc', desc);
        formData.append('image', image);
        formData.append('subTitle', subTitle);
        formData.append('keyWords', newKeyWords);

        fetchData('/api/post/update', formData, true)
    }

    const generateUrl = () => {
        const text = title.toLowerCase().trim().replace(/\s+/g, '-');
        reset({url: text,});
    };
    return (
        <>
            {isLoading && <Loading/>}
            {data && <Warning color={"ok"}>sen post </Warning>}
            {data && !post &&
                <Warning color={"ok"}>create another language post {locale === "ua" ? "en" : "ua"}</Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div className="create-post__container">
                <Button onClick={post ? updatePost : cretePost}>
                    {post ? "Update Post" : "Create Post"}
                </Button>
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
                    name="subTitle"
                    register={{
                        ...register('subTitle', {
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
                    error={errors.subTitle?.message}
                />
                <MyInput
                    type="text"
                    placeholder="key words"
                    name="keyWords"
                    register={{
                        ...register('keyWords', {
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
                    error={errors.subTitle?.message}
                />
                <span>слова через зяпятаую postId </span>
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
                    disabled={postId}
                    error={errors.url?.message}
                />
                <button onClick={generateUrl}>
                    create url
                </button>
                <div>
                    <input
                        className="file-input__create-post"
                        type="file"
                        ref={fileInputRef} onChange={handleImageChange}
                    />
                    {post ? <Image src={post.img} alt="post image" width={40} height={40}/> : null}
                </div>
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

export default PostEditor;