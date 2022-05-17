import axios from "axios";
import {
	STOCK_DELETE_ERROR,
	STOCK_DELETE_SUCCESS,
} from "../../../constants/actionTypes";
import axiosInstance from "../../../helpers/axios";
import { getStocksData } from "./getStocks";

export const deleteStock = (id) => (dispatch) => {
	axiosInstance
		.delete(`/items/stock/${id}`)
		.then((res) => {
			dispatch({
				type: STOCK_DELETE_SUCCESS,
				payload: res.data,
			});
			getStocksData()(dispatch);
			//alert(`Item with id ${id} deleted Successfully`);
		})
		.catch((err) => {
			// dispatch({
			// 	type: STOCK_DELETE_ERROR,
			// 	payload: err.response.data,
			// });
			console.log("err", err);
		});
};
