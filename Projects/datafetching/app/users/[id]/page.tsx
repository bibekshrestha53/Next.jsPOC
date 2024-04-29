import GetAllDetail from "@/app/lib/getUserDetail";
import GetAllPost from "@/app/lib/getUserPosts";
import { Posts } from "@/app/types/posts";
import { User } from "@/app/types/types";
import Link from "next/link";
import { Suspense } from "react";
import UserPosts from "./Components/UserPosts";
import GetAllUser from "@/app/lib/getAllUser";

type Params = {
    params: {
        id: string
    }
}
export default async function UserDetailPage({ params: { id } }: Params) {
    const userData: Promise<User> = GetAllDetail(id);
    const postData: Promise<Posts[]> = GetAllPost(id);
    const user = await userData;
    return (
        <>
            <Link href="/">Home </Link>
            <h4>User Page</h4>
            <h3>{user.name}</h3>
            <Suspense fallback={<h1>Loading</h1>}>
                <UserPosts promise={postData} />
            </Suspense>
        </>
    )
}
export async function generateStaticParams(){
    const usersData: Promise<User[]> = GetAllUser();
    const users = await usersData;
    return users.map(user => ({id : user.id.toString()}));
}