import React, { useContext, useEffect } from "react";
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import { getContacts } from "../../context/actions/stocks/getStocks";
import { GlobalContext } from "../../context/Provider";
import DashboardUI from "../../layout/Dashboard";
import useDashboard from "./useDashboard";

const ContactsContainer = () => {
	const { context } = useContext(GlobalContext);
	//console.log("Context : ", context);

	return (
		<div>
			<Header />
			<SideBar>
				<DashboardUI form={useDashboard()} />
			</SideBar>
		</div>
	);
};

export default ContactsContainer;
