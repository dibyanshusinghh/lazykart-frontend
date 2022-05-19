import React, { useContext, useEffect, useState } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import {
	getSalesData,
	getStockData,
} from "../../context/actions/dashboard/getDashboardData";

export default () => {
	const [fieldErrors, setFieldErrors] = useState({});
	const history = useNavigate();

	const {
		stocksDispatch,
		stocksState: {
			stocksDash: { stocksLoading, stocksData, stocksError },
			salesDash: { salesLoading, salesData, salesError },
		},
		authState: {
			loginAuth: { data },
		},
	} = useContext(GlobalContext);
	//console.log("Stocks : ", context);

	useEffect(() => {
		console.log(data, "Local Storage", localStorage);
		getStockData()(stocksDispatch);
		getSalesData()(stocksDispatch);
	}, [data]);

	return {
		stocksLoading,
		stocksData,
		stocksError,
		salesLoading,
		salesData,
		salesError,
	};
};
