export default async function GetAllDetail(id: string) {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
    if (!response.ok) {
        throw new Error("failed to retrieve data");
    }
    else {
        return response.json();
    }
}