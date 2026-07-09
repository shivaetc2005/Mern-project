const BASE_URL = `${import.meta.env.VITE_API_URL}/todos`;

export const getTodos = async () => {

    console.log("Fetching:", BASE_URL);

    const response = await fetch(BASE_URL);

    console.log("Status:", response.status);

    const data = await response.json();

    console.log("Data:", data);

    return data;
};