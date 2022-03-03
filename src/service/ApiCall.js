import axios from "axios";
const apiUrl = "https://api.bookuj.ml";

export default axios.create({
    baseURL: apiUrl
});



