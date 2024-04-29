import type { Metadata } from "next";
import GetAllUser from "../lib/getAllUser";
import { User } from "../types/types";
import Link from "next/link";

const metadata: Metadata = {
    title: "Users",
}

export default async function Users() {
    const usersData: Promise<User[]> = GetAllUser();
    const user = await usersData;
    console.log('hi')
    const content = (
        <section>
            <h1><Link href="/">Back to Home</Link></h1>
            <br />
            {user.map((x, i) => (
                <>
                    <div key={x.id}>
                        <Link href={`users/${x.id}`}>{x.name}</Link>
                    </div>
                    <br />
                </>
            ))}
        </section>
    );
    (
        <div>User</div>
    )
    return content;
}