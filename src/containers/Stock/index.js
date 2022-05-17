import React from "react";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import StocksUI from "../../layout/Stock";

const StocksContainer = () => {
	return (
		<div>
			<Header />
			<SideBar>
				<StocksUI />
			</SideBar>
		</div>
	);
};

export default StocksContainer;
