import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/Provider";
import {
	ISFETCHED,
	MODIFY_ORDERS_DATA,
	MODIFY_STOCK_DATA,
	ORDERS_MODAL_CLOSE,
	ORDERS_MODAL_OPEN,
	SET_ORDERS_DATA,
	TABLE_SELECT,
} from "../../constants/actionTypes";
import { createOrder } from "../../context/actions/orders/createOrder";
import { deleteOrder } from "../../context/actions/orders/deleteOrders";
import { updateOrder } from "../../context/actions/orders/updateOrder";
import { getStockData } from "../../context/actions/stocks/getStocks";

export default () => {
	const [fieldErrors, setFieldErrors] = useState({});

	const {
		stocksDispatch,
		stocksState: {
			ordersModal: { isOpen },
			addOrders: { data, error, isNew },
			tableSelect: { activeRowId },
		},
	} = useContext(GlobalContext);

	useEffect(() => {
		if (error) {
			let errObj = {};
			for (const item in error.data) {
				errObj[item] = error.data[item][0];
			}
			setFieldErrors(errObj);
			//console.log("Modal inside if", isOpen);
		}
		// } else {
		// 	stocksDispatch({
		// 		type: ORDERS_MODAL_CLOSE,
		// 	});
		// 	//console.log("Modal Closed", isOpen);
		// 	setFieldErrors({});
		// }
	}, [error]);

	// useEffect(() => {
	// 	if (data) {
	// 		getStocksData()(stocksDispatch);
	// 		//console.log("calling API");
	// 	}
	// }, [data]);

	//console.log("errors", error);
	//console.log("Data", data);

	//console.log("fieldErrors", fieldErrors);
	const onChange = (e, { name, value }) => {
		const newData = {
			...data,
			[name]: value,
		};
		stocksDispatch({
			type: MODIFY_ORDERS_DATA,
			payload: newData,
		});
	};

	const modalValidForm =
		isNaN(data.itemId) ||
		!data.itemName?.trim().length ||
		isNaN(data.price) ||
		data.itemId === "" ||
		data.price === "";

	const onSubmit = () => {
		if (isNew) {
			createOrder(data)(stocksDispatch);
		} else {
			updateOrder(data)(stocksDispatch);
		}
	};

	const handleClose = () => {
		stocksDispatch({
			type: ORDERS_MODAL_CLOSE,
		});
		setFieldErrors({});
	};

	const handleOpenModal = ({ isNew = true, data = {} }) => {
		stocksDispatch({
			type: SET_ORDERS_DATA,
			payload: {
				isNew,
				data,
			},
		});
		stocksDispatch({
			type: ORDERS_MODAL_OPEN,
		});
	};

	const handleRowSelect = (id) => {
		stocksDispatch({
			type: TABLE_SELECT,
			payload: id,
		});
		console.log(id);
	};

	const handleDeleteRow = () => {
		deleteOrder(activeRowId)(stocksDispatch);
		console.log(activeRowId);
	};

	const addOrderFetchById = () => {
		getStockData(data?.itemId)(stocksDispatch);
		// stocksDispatch({
		// 	type: ISFETCHED,
		// });
	};
	console.log("Data :", data);
	console.log("Error :", error && error.data);

	return {
		isOpen,
		modal: data,
		error,
		isNew,
		onChange,
		modalValidForm,
		onSubmit,
		fieldErrors,
		handleClose,
		handleOpenModal,
		handleRowSelect,
		activeRowId,
		handleDeleteRow,
		addOrderFetchById,
	};
};
