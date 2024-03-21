"use server"
import {addPost} from "@/lib/post/postController";

export default async function Page() {

    return (
        <div>
            <div>
                <form action={addPost}>
                    <input type="text" placeholder="title" name="title"/>
                    <input type="text" placeholder="desc" name="desc"/>
                    <input type="text" placeholder="slug" name="slug"/>
                    <input type="text" placeholder="userId" name="userId"/>
                    <button>submit</button>
                </form>
            </div>
        </div>
    );
}