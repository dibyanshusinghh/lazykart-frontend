import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import {
	MODAL_CLOSE,
	MODAL_OPEN,
	MODIFY_STOCK_DATA,
	SET_STOCK_DATA,
	STOCK_DELETE,
	TABLE_SELECT,
} from "../../constants/actionTypes";
import { createStock } from "../../context/actions/stocks/createStock";
import { updateStock } from "../../context/actions/stocks/updateStocks";
import { deleteStock } from "../../context/actions/stocks/deleteStock";

export default () => {
	//const [modal, setModal] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});
	//const [activeRow, setActiveRow] = useState({});
	const navigate = useNavigate();

	const {
		stocksDispatch,
		stocksState: {
			modal: { isOpen },
			addStocks: { data, error, isNew },
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
		} else {
			stocksDispatch({
				type: MODAL_CLOSE,
			});
			//console.log("Modal Closed", isOpen);
			setFieldErrors({});
		}
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
			type: MODIFY_STOCK_DATA,
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
			createStock(data)(stocksDispatch);
		} else {
			updateStock(data)(stocksDispatch);
		}
	};

	const handleClose = () => {
		stocksDispatch({
			type: MODAL_CLOSE,
		});
		setFieldErrors({});
	};

	const handleOpenModal = ({ isNew = true, data = {} }) => {
		stocksDispatch({
			type: SET_STOCK_DATA,
			payload: {
				isNew,
				data,
			},
		});
		stocksDispatch({
			type: MODAL_OPEN,
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
		deleteStock(activeRowId)(stocksDispatch);
		//console.log(activeRowId);
	};

	//console.log(isOpen);

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
	};
};
