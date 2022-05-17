import {
	SALESDASH_ERROR,
	SALESDASH_LOADING,
	SALESDASH_SUCCESS,
	STOCKSDASH_LOADING,
	STOCKSDASH_SUCCESS,
	STOCKSDASH_ERROR,
	STOCKS_LOADING,
	STOCKS_SUCCESS,
	STOCKS_ERROR,
	ORDERS_LOADING,
	ORDERS_SUCCESS,
	ORDERS_ERROR,
	MODAL_OPEN,
	MODAL_CLOSE,
	ADD_STOCK_ERROR,
	ADD_STOCK_SUCCESS,
	EDIT_STOCK_SUCCESS,
	EDIT_STOCK_ERROR,
	TABLE_SELECT,
	MODIFY_STOCK_DATA,
	SET_STOCK_DATA,
	STOCKS_PAGE_CHANGE,
	STOCK_DELETE_SUCCESS,
	STOCK_DELETE_ERROR,
	ORDERS_PAGE_CHANGE,
	ORDERS_DELETE_ERROR,
	ORDERS_DELETE_SUCCESS,
	ADD_ORDERS_ERROR,
	SET_ORDERS_DATA,
	MODIFY_ORDERS_DATA,
	ADD_ORDERS_SUCCESS,
	ORDERS_MODAL_OPEN,
	ORDERS_MODAL_CLOSE,
} from "../../constants/actionTypes";

const stocks = (state, { payload, type }) => {
	switch (type) {
		case SALESDASH_LOADING:
			return {
				...state,
				salesDash: {
					...state.salesDash,
					salesError: false,
					salesLoading: true,
				},
			};

		case SALESDASH_SUCCESS:
			return {
				...state,
				salesDash: {
					...state.salesDash,
					salesError: false,
					salesLoading: true,
					salesData: payload,
				},
			};

		case SALESDASH_ERROR:
			return {
				...state,
				salesDash: {
					...state.salesDash,
					salesLoading: false,
					salesError: payload,
				},
			};

		case STOCKSDASH_LOADING:
			return {
				...state,
				stocksDash: {
					...state.stocksDash,
					stocksLoading: true,
					stocksError: false,
				},
			};

		case STOCKSDASH_SUCCESS:
			return {
				...state,
				stocksDash: {
					...state.stocksDash,
					stocksLoading: false,
					stocksData: payload,
					stocksError: false,
				},
			};

		case STOCKSDASH_ERROR:
			return {
				...state,
				stocksDash: {
					...state.stocksDash,
					stocksLoading: false,
					stocksError: payload,
				},
			};

		case STOCKS_LOADING:
			return {
				...state,
				stocks: {
					...state.stocks,
					loading: true,
					error: false,
				},
			};
		case STOCKS_PAGE_CHANGE:
			return {
				...state,
				stocks: {
					...state.stocks,
					activePage: payload,
				},
			};

		case STOCKS_SUCCESS:
			return {
				...state,
				stocks: {
					...state.stocks,
					loading: false,
					data: payload,
					error: false,
				},
			};

		case STOCKS_ERROR:
			return {
				...state,
				stocks: {
					...state.stocks,
					loading: false,
					error: payload,
				},
			};

		case STOCK_DELETE_SUCCESS:
			return {
				...state,
				addStocks: {
					...state.addStocks,
					data: payload,
				},
			};
		case STOCK_DELETE_ERROR:
			return {
				...state,
				addStocks: {
					...state.addStocks,
					error: payload,
				},
			};

		case ORDERS_LOADING:
			return {
				...state,
				orders: {
					...state.orders,
					loading: true,
					error: false,
				},
			};

		case ORDERS_SUCCESS:
			return {
				...state,
				orders: {
					...state.orders,
					loading: false,
					data: payload,
					error: false,
				},
			};

		case ORDERS_ERROR:
			return {
				...state,
				orders: {
					...state.orders,
					loading: false,
					error: payload,
				},
			};
		case ORDERS_PAGE_CHANGE:
			return {
				...state,
				orders: {
					...state.orders,
					activePage: payload,
				},
			};
		case ORDERS_DELETE_SUCCESS:
			return {
				...state,
				addOrders: {
					...state.addOrders,
					data: payload,
				},
			};
		case ORDERS_DELETE_ERROR:
			return {
				...state,
				addOrders: {
					...state.addOrders,
					error: payload,
				},
			};

		case MODAL_OPEN:
			return {
				...state,
				modal: {
					...state.modal,
					isOpen: true,
				},
			};
		case MODAL_CLOSE:
			return {
				...state,
				modal: {
					...state.modal,
					isOpen: false,
				},
			};

		case ORDERS_MODAL_OPEN:
			return {
				...state,
				ordersModal: {
					...state.ordersModal,
					isOpen: true,
				},
			};
		case ORDERS_MODAL_CLOSE:
			return {
				...state,
				ordersModal: {
					...state.ordersModal,
					isOpen: false,
				},
			};

		case ADD_STOCK_SUCCESS:
			return {
				...state,
				addStocks: {
					...state.addStocks,
					data: payload,
					error: false,
				},
			};
		case MODIFY_STOCK_DATA:
			return {
				...state,
				addStocks: {
					...state.addStocks,
					data: payload,
					error: false,
				},
			};
		case SET_STOCK_DATA:
			return {
				...state,
				addStocks: {
					...state.addStocks,
					data: payload.data,
					isNew: payload.isNew,
					error: false,
				},
			};

		case ADD_ORDERS_SUCCESS:
			return {
				...state,
				addOrders: {
					...state.addOrders,
					data: payload,
					error: false,
				},
			};
		case MODIFY_ORDERS_DATA:
			return {
				...state,
				addOrders: {
					...state.addOrders,
					data: payload,
					error: false,
				},
			};
		case SET_ORDERS_DATA:
			return {
				...state,
				addOrders: {
					...state.addOrders,
					data: payload.data,
					isNew: payload.isNew,
					error: false,
				},
			};

		case ADD_STOCK_ERROR:
			return {
				...state,
				addStocks: {
					...state.addStocks,
					error: payload,
					data: {},
				},
			};

		case ADD_ORDERS_ERROR:
			return {
				...state,
				addOrders: {
					...state.addOrders,
					error: payload,
					data: {},
				},
			};

		case TABLE_SELECT:
			return {
				...state,
				tableSelect: {
					...state.tableSelect,
					activeRowId: payload,
				},
			};

		default:
			return state;
	}
};

export default stocks;
