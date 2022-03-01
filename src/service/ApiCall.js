import axios from "axios";
import {auth} from "../auth/AuthService"
const apiUrl="https://api.bookuj.ml";

const instance=axios.create({
    baseURL:apiUrl
})



export default instance;