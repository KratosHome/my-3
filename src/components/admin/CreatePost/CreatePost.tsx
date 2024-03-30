"use client"
import "./createPost.scss";
import React, {useState} from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {useFetchData} from "@/hooks/useFetchData";
import {useSession} from "next-auth/react";
import Loading from "@/components/UI/Loading/Loading";
import Warning from "@/components/UI/Warning/Warning";

const CreatePost = () => {
    const {data: session} = useSession();
    const {data, error, isLoading, fetchData} = useFetchData<{ error?: string }>();

    const [desc, setDesc] = useState("");
    const [title, setTitle] = useState("");
    const [image, setImage] = useState<any>(null);

    const myColors = [
        "purple",
        "#785412",
        "#452632",
        "#856325",
        "#963254",
        "#254563",
        "white"
    ];
    const modules = {
        toolbar: [
            [{header: [1, 2, 3, 4, 5, 6, false]}],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{align: ["right", "center", "justify"]}],
            [{list: "ordered"}, {list: "bullet"}],
            ["link", "image"],
            [{color: myColors}],
            [{background: myColors}]
        ]
    };

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
        const userId = (session?.user as any)?._id;
        fetchData('/api/post/create',
            {
                userId: userId,
                title: title,
                desc: desc,
                image: image
            });
    }

    console.log("data", data);
    console.log("error", error);

    // {dict.warnings.checkEmail}
    return (
        <>
            {isLoading && <Loading/>}
            {data && <Warning color={"ok"}>sen post </Warning>}
            {error && <Warning color={"error"}> {error} </Warning>}
            <div className="create-post__container">
                <button className="create-post__button" onClick={cretePost}>- Create Post -</button>
                <input
                    value={title}
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type="file" onChange={handleImageChange}/>
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