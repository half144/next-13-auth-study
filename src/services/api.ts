import axios from "axios";

const api = axios.create({
  baseURL: "https://forumidontknow.herokuapp.com/api/",
});

export default api;
