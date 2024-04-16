interface postsTypes {
    _id?: string;
    title: string;
    subTitle: string;
    desc: string;
    url: string;
    local: string;
    img: string;
    userId: string;
    postId: string;
    isPublished: boolean;
    createdAt?: string;
    updatedAt?: string;
}



interface ObjectId {
    $oid: string;
}

interface Post {
    _id: ObjectId;
    title: string;
    desc: string;
    url: string;
    local: string;
    img: string;
    userId: string;
    isPublished: boolean;
    postId: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    subTitle: string;
    keyWords: string[]
}

interface User {
    _id: ObjectId;
    username: string;
    email: string;
    img: string;
}

interface postsTypesItem {
    resultPost: Post;
    resultUser: User;
}

