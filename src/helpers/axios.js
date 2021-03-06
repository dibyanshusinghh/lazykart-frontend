import axios from "axios";

const baseURL = process.env.REACT_APP_BACKEND_URL;
let headers = {};

//console.log("BaseURL", baseURL);

const axiosInstance = axios.create({
	baseURL: baseURL,
	headers: {
		...headers,
		authorization: `Bearer ${localStorage.getItem("token")}` || "",
	},
});
/*
axiosInstance.interceptors.response.use(
	(response) =>
		new Promise((resolve, reject) => {
			resolve(response);
		}),
	(error) => {
		if (!error.response) {
			return new Promise((resolve, reject) => {
				reject(error);
			});
		}

		if (error.response.status === 403) {
			localStorage.removeItem("token");
			window.location = "/auth/login";
		} else {
			return new Promise((resolve, reject) => {
				reject(error);
			});
		}
	}
);*/

export default axiosInstance;
