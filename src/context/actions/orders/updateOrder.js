import axios from "axios";
import {
	ORDERS_MODAL_CLOSE,
	ADD_ORDERS_ERROR,
	ADD_ORDERS_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { getOrdersData } from "./getOrders";

export const updateOrder =
	({ itemId, itemName, price, status, email, contact }) =>
	(dispatch) => {
		axiosInstance
			.patch(`/items/orders/${itemId}`, {
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
				//console.log("Stocks ", res.data)
				dispatch({
					type: ORDERS_MODAL_CLOSE,
				});
				getOrdersData()(dispatch);
			})
			.catch((err) => {
				dispatch({
					type: ADD_ORDERS_ERROR,
					payload: err.response.data,
				});
				//console.log("err", err)
			});
	};
