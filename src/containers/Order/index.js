import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import OrdersUI from "../../layout/Order";

const OrdersContainer = () => {
	return (
		<div>
			<Header />
			<SideBar>
				<OrdersUI />
			</SideBar>
		</div>
	);
};

export default OrdersContainer;
