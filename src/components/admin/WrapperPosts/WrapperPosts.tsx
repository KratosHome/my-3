"use client"
import "./wrapperPosts.scss"
import Button from "@/components/UI/Button/Button";
import DataTable from "@/components/UI/DataTable/DataTable";
import Image from "next/image";
import Microscope from "@/assets/icons/Microscope";
import Check from "@/assets/icons/Check";
import Edit from "@/assets/icons/Edit";
import {useRouter} from "next/navigation";

const WrapperPosts = ({posts}: any) => {
    const router = useRouter();


    const columns = [
        {
            id: 'published',
            headerName: 'published',
            width: 100,
            render: (item: any) => <>
                {item.isPublished ? <div className="svg-icons__wrapper-posts">
                        <Check/>
                    </div> :
                    <div className="svg-icons__wrapper-posts">
                        <Microscope/>
                    </div>
                }
            </>
        },
        {
            id: 'edit',
            headerName: 'edit',
            width: 100,
            render: (item: any) => <button
                // disabled={item.isPublished}
                className="svg-icons__wrapper-posts"
                onClick={() => {
                    router.push(`posts/${item.url}`);
                }}>
                <Edit/>
            </button>,
        },
        {
            id: 'title',
            headerName: 'title',
            width: 250
        },
        {
            id: 'img',
            headerName: 'img',
            width: 100,
            render: (item: any) => <Image src={item.img} alt={"img"} width={50} height={50}/>,
        },
        {
            id: 'subTittle',
            headerName: 'subTittle',
            width: 250
        },
        {
            id: 'userDetails.username',
            headerName: 'userDetails.username',
            width: 250
        },
        {
            id: 'userDetails.email',
            headerName: 'userDetails.email',
            width: 250
        },
        {
            id: 'delete',
            headerName: 'delete',
            width: 250,
            render: (item: any) => <Button disabled={item.isPublished}
                                           onClick={() => console.log("bla")}>delete</Button>,
        }
    ]

    return (
        <div>
            <DataTable
                initialSelectedOptions={columns}
                columns={columns}
                data={posts}
            />
        </div>
    );
};

export default WrapperPosts;