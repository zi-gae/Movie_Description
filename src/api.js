import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "cb2d5c76ad119ebd27b5a9859c5a4995",
    language: "en-US"
  }
});

export const TVApi = {
  nowPlaying: () => api.get("/movie/now_playing"),
  upcomming: () => api.get("/movie/upcoming"),
  popular: () => api.get("/movie/popular"),
  movie: id => api.get(`/movei/${id}`)
};

export const MovieApi = {
  topRated: () => api.get("/tv/top_rated"),
  popular: () => api.get("/tv/popular"),
  ariringToday: () => api.get("/tv/airing_today"),
  showDetail: id => api.get(`/tv/${id}`)
};
