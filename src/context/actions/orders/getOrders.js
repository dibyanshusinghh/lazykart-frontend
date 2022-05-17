import axios from "axios";
import {
	ORDERS_LOADING,
	ORDERS_SUCCESS,
	ORDERS_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const getOrdersData =
	(page = 1) =>
	(dispatch) => {
		dispatch({
			type: ORDERS_LOADING,
		});
		axiosInstance
			.get("/items/orders/?page=" + page.toString())
			.then((res) => {
				dispatch({
					type: ORDERS_SUCCESS,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: ORDERS_ERROR,
					payload: err.response.data,
				});
			});
	};
