import axios from "axios";

export const getDataFoodByQueryParam = async (query: string) => {
    const response = await axios(`https://api.nal.usda.gov/fdc/v1/foods/search`, {
        params: {
            query,
            api_key: process.env.USDA_API_KEY,
        },
    });
    if (response.status !== 200) {
        throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.data;
    return data;
}