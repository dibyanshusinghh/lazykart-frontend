import axios from "axios";
import {
	SALESDASH_ERROR,
	SALESDASH_LOADING,
	SALESDASH_SUCCESS,
	STOCKSDASH_ERROR,
	STOCKSDASH_LOADING,
	STOCKSDASH_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";

export const getStockData = () => (dispatch) => {
	dispatch({
		type: STOCKSDASH_LOADING,
	});
	axiosInstance
		.get("/items/dashboard/getStocks")
		.then((res) => {
			dispatch({
				type: STOCKSDASH_SUCCESS,
				payload: res.data,
			});
			//console.log("Stocks ", res.data)
		})
		.catch((err) => {
			dispatch({
				type: STOCKSDASH_ERROR,
				payload: err.response.data,
			});
			//console.log("err", err)
		});
};

export const getSalesData = () => (dispatch) => {
	dispatch({
		type: SALESDASH_LOADING,
	});
	axiosInstance
		.get("/items/dashboard/getSales")
		.then((res) => {
			dispatch({
				type: SALESDASH_SUCCESS,
				payload: res.data,
			});
			//console.log("Stocks ", res.data)
		})
		.catch((err) => {
			dispatch({
				type: SALESDASH_ERROR,
				payload: err.response.data,
			});
			//console.log("err", err)
		});
};
