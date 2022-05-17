import axios from "axios";
import {
	ORDERS_MODAL_CLOSE,
	ADD_ORDERS_SUCCESS,
	ADD_ORDERS_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { getOrdersData } from "./getOrders";

export const createOrder =
	({ itemId, itemName, price, status, email, contact }) =>
	(dispatch) => {
		axiosInstance
			.post("/items/orders", {
				itemId,
				itemName,
				price,
				status,
				email,
				contact,
			})
			.then((res) => {
				dispatch({
					type: ADD_ORDERS_SUCCESS,
					payload: res.data,
				});
				dispatch({
					type: ORDERS_MODAL_CLOSE,
				});
				getOrdersData()(dispatch);
				//console.log("Stocks ", res.data)
			})
			.catch((err) => {
				dispatch({
					type: ADD_ORDERS_ERROR,
					payload: err.response.data,
				});
				//console.log("err", err)
			});
	};
