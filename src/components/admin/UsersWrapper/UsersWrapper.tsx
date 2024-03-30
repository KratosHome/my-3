"use client"
import "./usersWrapper.scss"
import DataTable from "@/components/DataTable/DataTable";
import Button from "@/components/UI/Button/Button";

const UsersWrapper = ({users}: any) => {

    const columns = [
        {
            id: '_id',
            headerName: 'ID',
            width: 45
        },
        {
            id: 'username',
            headerName: 'user name',
            width: 85
        },
        {
            id: 'email',
            headerName: 'email',
            width: 225
        },
        {
            id: 'img',
            headerName: 'img',
            width: 120
        },
        {
            id: 'createdAt',
            headerName: 'createdAt',
            width: 120,
            render: (item: any) => <div className="item-tablet-JSX">phone</div>,
        },
        {
            id: 'phone',
            headerName: 'phone',
            width: 120,
            render: (item: any) => <div className="item-tablet-JSX">phone</div>,
        },
        {
            id: 'telegram',
            headerName: 'telegram',
            width: 120,
            render: (item: any) => <div className="item-tablet-JSX">phone</div>,
        },
        {
            id: 'git',
            headerName: 'git',
            width: 120,
            render: (item: any) => <div className="item-tablet-JSX">phone</div>,
        },
        /*
                {
                    id: 'Change Role',
                    headerName: 'Change Role',
                    width: 120,
                    render: (item: any) => <div className="item-tablet-JSX">
                        <ChangeRole id={item.id} role={item.role}/>
                    </div>,
                },
         */
        {
            id: 'role',
            headerName: 'Role',
            width: 50,
            render: (item: any) => <div className={"item-tablet-JSX"}>role</div>,
        },
        {
            id: 'delete',
            headerName: 'delete',
            width: 250,
            render: (item: any) => <Button onClick={() => console.log("bla")}>delete</Button>,
        }
    ]

    return (
        <div className="user-wrapper_container">
            <DataTable
                initialSelectedOptions={columns}
                columns={columns}
                data={users.users}
            />
        </div>
    );
};

export default UsersWrapper;


/*
 {users.users.map((item: any) =>
                <div key={item._id} className="item-wrapper_container">
                    <div></div>
                    <div>
                        <div>{item.username}</div>
                        <div>{item.email}</div>
                        <div>пости</div>
                    </div>
                </div>
            )}
 */