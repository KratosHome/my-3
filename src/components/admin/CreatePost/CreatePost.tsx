"use client"
import "./createPost.scss";
import React, {useEffect, useRef, useState} from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useFetchData} from "@/hooks/useFetchData";
import {useSession} from "next-auth/react";
import Loading from "@/components/UI/Loading/Loading";
import Warning from "@/components/UI/Warning/Warning";
import {useLocale} from "@/hooks/useLocale";

const CreatePost = () => {
    const {locale} = useLocale();
    const quillRef = useRef<any>(null);
    const {data: session} = useSession();
    const {data, error, isLoading, fetchData} = useFetchData<{ error?: string }>();

    const fileInputRef = useRef<HTMLInputElement>(null);

    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [postId, setPostId] = useState<any>(null);
    const [url, setUrl] = useState("");
    const [image, setImage] = useState<any>(null);

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

        setTitle('');
        setDesc('');
        setImage(null);
        setUrl('');

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
                <button className="create-post__button" onClick={cretePost}>- Create Post -</button>
                <input
                    value={url}
                    type="text"
                    placeholder={"url"}
                    onChange={(e) => setUrl(e.target.value)}
                />
                <input
                    value={title}
                    type="text"
                    placeholder={"title"}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type="file" ref={fileInputRef} onChange={handleImageChange}/>
                <ReactQuill
                    ref={quillRef}
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