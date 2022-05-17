import axios from "axios";
import {
	STOCKS_LOADING,
	STOCKS_SUCCESS,
	STOCKS_ERROR,
	ADD_STOCK_SUCCESS,
	ADD_STOCK_ERROR,
	MODAL_CLOSE,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { getStocksData } from "./getStocks";

export const createStock =
	({ itemId, itemName, price, status }) =>
	(dispatch) => {
		axiosInstance
			.post("/items/stock", { itemId, itemName, price, status })
			.then((res) => {
				dispatch({
					type: ADD_STOCK_SUCCESS,
					payload: res.data,
				});
				dispatch({
					type: MODAL_CLOSE,
				});
				getStocksData()(dispatch);
				//console.log("Stocks ", res.data)
			})
			.catch((err) => {
				dispatch({
					type: ADD_STOCK_ERROR,
					payload: err.response.data,
				});
				//console.log("err", err)
			});
	};
