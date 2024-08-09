import axios from "axios";

/* eslint-disable no-unused-vars */
// const PIZZA_ENDPOINT = import.meta.env.VITE_PIZZA_URL;
export const getApiCall = async (URL)=>{
    const response = await axios.get(URL);
    return response.data;
}