import React, { useContext, useEffect, useState } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import { getStocksData } from "../../context/actions/stocks/getStocks";
import { STOCKS_PAGE_CHANGE } from "../../constants/actionTypes";

export default () => {
	const {
		stocksDispatch,
		stocksState: {
			stocks: { loading, data, error, activePage },
		},
	} = useContext(GlobalContext);

	const onPageChange = (e, pageInfo) => {
		stocksDispatch({
			type: STOCKS_PAGE_CHANGE,
			payload: pageInfo.activePage,
		});
	};

	useEffect(() => {
		getStocksData(activePage)(stocksDispatch);
	}, [activePage]);

	return {
		loading,
		data,
		error,
		activePage,
		onPageChange,
	};
};
