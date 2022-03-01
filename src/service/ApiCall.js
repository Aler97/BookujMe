import axios from "axios";
const apiUrl = "https://api.bookuj.ml";

const instance = axios.create({
    baseURL: apiUrl
})



export default instance;