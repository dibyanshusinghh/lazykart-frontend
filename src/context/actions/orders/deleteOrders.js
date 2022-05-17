import axios from "axios";
import {
	ORDERS_DELETE_ERROR,
	ORDERS_DELETE_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { getOrdersData } from "./getOrders";

export const deleteOrder = (id) => (dispatch) => {
	axiosInstance
		.delete(`/items/orders/${id}`)
		.then((res) => {
			dispatch({
				type: ORDERS_DELETE_SUCCESS,
				payload: res.data,
			});
			getOrdersData()(dispatch);
		})
		.catch((err) => {
			dispatch({
				type: ORDERS_DELETE_ERROR,
				payload: err.response?.data,
			});
		});
};
