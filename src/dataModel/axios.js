import axios from "axios";

const instance = axios.create({
        baseURL:`http://localhost:5001/clone-5f0f0/us-central1/api` //Api Url
});

export default instance;