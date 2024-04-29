export default async function GetAllUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error("failed to retrieve data");
    }
    else {
        return response.json();
    }
}