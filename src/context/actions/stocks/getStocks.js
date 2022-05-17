import axios from "axios";
import {
	STOCKS_LOADING,
	STOCKS_SUCCESS,
	STOCKS_ERROR,
	ADD_ORDERS_ERROR,
	ADD_ORDERS_SUCCESS,
	FETCH_SUCCESS,
	FETCH_ERROR,
	SET_ORDERS_DATA,
	ADD_STOCK_ERROR,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const getStocksData =
	(page = 1) =>
	(dispatch) => {
		dispatch({
			type: STOCKS_LOADING,
		});
		//console.log("API Called");
		axiosInstance
			.get("/items/stock/?page=" + page.toString())
			.then((res) => {
				dispatch({
					type: STOCKS_SUCCESS,
					payload: res.data,
				});
				//	console.log("Stocks ", res.data);
			})
			.catch((err) => {
				dispatch({
					type: STOCKS_ERROR,
					payload: err.response.data,
				});
				//console.log("err", err)
			});
	};
//the below code fetches the data for one stock itemId which has to be created in orders table
//(basically to check if new order to be placed exists in stock or not)
export const getStockData = (id) => (dispatch) => {
	axiosInstance
		.get(`/items/stock/${id}`)
		.then((res) => {
			dispatch({
				type: SET_ORDERS_DATA,
				payload: { data: res.data.item, isNew: true },
			});
			// dispatch({
			// 	type: FETCH_SUCCESS,
			// 	payload: res.data,
			// });
			//	console.log("Stocks ", res.data);
		})
		.catch((err) => {
			dispatch({
				type: ADD_ORDERS_ERROR,
				payload: err.response.data,
			});
			//console.log("err", err)
		});
};
