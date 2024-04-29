import { Posts } from "@/app/types/posts";

type Props = {
    promise: Promise<Posts[]>
};
export default async function UserPosts({ promise }: Props) {
    const post = await promise;
    const content =
        (
            <div>
                <h2>Posts</h2>
                {post.map((x, i) => (
                    <>
                        <h1>{`${i + 1}. ${x.title}`}</h1>
                        <div>{x.body}</div>
                    </>))}
            </div>
        )
    return content;
}