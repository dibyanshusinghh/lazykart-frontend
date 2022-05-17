import axios from "axios";
import {
	ADD_STOCK_SUCCESS,
	ADD_STOCK_ERROR,
	MODAL_CLOSE,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { getStocksData } from "./getStocks";

export const updateStock =
	({ itemId, itemName, price, status }) =>
	(dispatch) => {
		axiosInstance
			.patch(`/items/stock/${itemId}`, { itemId, itemName, price, status })
			.then((res) => {
				dispatch({
					type: ADD_STOCK_SUCCESS,
					payload: res.data,
				});
				//console.log("Stocks ", res.data)
				dispatch({
					type: MODAL_CLOSE,
				});
				getStocksData()(dispatch);
			})
			.catch((err) => {
				dispatch({
					type: ADD_STOCK_ERROR,
					payload: err.response.data,
				});
				//console.log("err", err)
			});
	};
