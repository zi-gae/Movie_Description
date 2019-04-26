import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cb2d5c76ad119ebd27b5a9859c5a4995",
    language: "en-US"
  }
});
export default api;
