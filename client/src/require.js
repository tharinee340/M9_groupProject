import axios from "axios";

const URL = "http://localhost:8080/"

export const userRequire = axios.create({
    baseURL: URL,
    header: {token: "Bearer "}
})