import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
  headers: {
    "Access-Control-Allow-Origin": "true",
    "Content-Type": "application/json",
  },
});

export const login = (formdata) => API.post("/login", formdata);
export const register = (formdata) => API.post("/register", formdata);

// export const authApi = {
//   login: API.post("/login"),
//   register: API.post("/register"),
// };

// const url = "http://localhost:5000";

// export const authApi = {
//   login: `${url}/login`,
//   register: `${url}/register`,
// };
