import axios from "axios";

import { URL } from "@/constants/url";

export const instance = axios.create({
    baseURL: URL
})