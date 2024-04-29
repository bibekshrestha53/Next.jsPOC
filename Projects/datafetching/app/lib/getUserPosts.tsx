export default async function GetAllPost(id: string) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id);
    if (!response.ok) {
        throw new Error("failed to retrieve data");
    }
    else {
        return response.json();
    }
}