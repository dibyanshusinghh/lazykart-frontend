import React, { useContext, useEffect, useState } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import { getOrdersData } from "../../context/actions/orders/getOrders";
import { ORDERS_PAGE_CHANGE } from "../../constants/actionTypes";

export default () => {
	const {
		stocksDispatch,
		stocksState: {
			orders: { loading, data, error, activePage },
		},
	} = useContext(GlobalContext);

	useEffect(() => {
		getOrdersData(activePage)(stocksDispatch);
	}, [activePage]);

	const onPageChange = (e, pageInfo) => {
		stocksDispatch({
			type: ORDERS_PAGE_CHANGE,
			payload: pageInfo.activePage,
		});
	};

	return {
		loading,
		data,
		error,
		activePage,
		onPageChange,
	};
};
