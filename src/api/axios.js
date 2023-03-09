import axios from "axios";
import { useStore } from "@/store/index.js";

const http = axios.create({
	baseURL: "https://api.cngal.org"
});

http.interceptors.request.use(
	(config) => {
		const store = useStore();
		if (store.authToken) {
			config.headers.Authorization = "Bearer " + store.authToken;
		}
		return config;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default http;
