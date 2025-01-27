import { URL } from "@/constants/url";
import axios from "axios";

export const instance = axios.create({
    baseURL: URL
})