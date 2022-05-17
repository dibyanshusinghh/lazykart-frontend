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
	} = useContext(GlobalContext);
	//console.log("Stocks : ", context);

	useEffect(() => {
		getStockData()(stocksDispatch);
		getSalesData()(stocksDispatch);
	}, []);

	return {
		stocksLoading,
		stocksData,
		stocksError,
		salesLoading,
		salesData,
		salesError,
	};
};
