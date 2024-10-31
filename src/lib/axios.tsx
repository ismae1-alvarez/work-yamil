import axios from "axios";

// Configuration URL

const api = axios.create({
    baseURL :  import.meta.env.VITE_API_URL
})


export default api