import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://forumbackend.deveyoas.com/api/",
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
