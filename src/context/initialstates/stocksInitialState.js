export default {
	stocksDash: {
		stocksLloading: false,
		stocksData: {},
		stocksError: null,
	},
	salesDash: {
		salesLoading: false,
		salesData: {},
		salesError: null,
	},
	stocks: {
		loading: false,
		data: {},
		error: null,
		activePage: 1,
	},
	orders: {
		loading: false,
		data: {},
		error: null,
	},
	modal: {
		isOpen: false,
	},
	addStocks: {
		data: {},
		isNew: true,
		error: false,
	},
	tableSelect: {
		activeRowId: null,
	},
	ordersModal: {
		isOpen: false,
	},
	addOrders: {
		data: {},
		isNew: true,
		error: false,
	},
};
