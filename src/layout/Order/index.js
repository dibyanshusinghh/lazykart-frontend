import add_orders from "../../assets/images/add_orders.svg";
import useOrdersModal from "../../containers/Order/useOrdersModal";
import React, { useContext, useState } from "react";
import { Icon, Table } from "semantic-ui-react";
import {
	Button,
	Header as SemanticHeader,
	Image,
	Message,
	Ref,
	Segment,
} from "semantic-ui-react";
import styled, { css } from "styled-components";
import { GlobalContext } from "../../context/Provider";
import PaginationComp from "../../components/Pagination";
import useOrders from "../../containers/Order/useOrders";
import AddOrdersUI from "../addOrder";

const OrdersUI = () => {
	const form = useOrdersModal();
	const { handleOpenModal, handleRowSelect, activeRowId, handleDeleteRow } =
		form;
	const ordersHook = useOrders();

	const {
		stocksDispatch,
		stocksState: {
			orders: { loading, data, error },
		},
	} = useContext(GlobalContext);

	const handleEditRow = () => {
		const rowData = data.data.items.filter(
			(item) => item.itemId === activeRowId
		)[0];
		handleOpenModal({ isNew: false, data: rowData });
	};

	return (
		<div
			style={{
				background: "#132044 ",
				margin: 0,
				height: "100%",
			}}
		>
			<AddOrdersUI form={form} />
			<Image src={add_orders} width="100%" height="200px" />
			<StyledDiv>
				<Button primary icon onClick={handleOpenModal}>
					<Icon name="add"></Icon>
					Add New Order
				</Button>
				<Button primary icon onClick={handleEditRow} disabled={!activeRowId}>
					<Icon name="edit"></Icon>
					Edit Order
				</Button>
				{
					<Button
						color="red"
						icon
						onClick={handleDeleteRow}
						disabled={!activeRowId}
					>
						<Icon name="delete"></Icon>
						Delete Order
					</Button>
				}
			</StyledDiv>
			<StyledTableDiv>
				<StyledTable celled inverted selectable>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Item Id</Table.HeaderCell>
							<Table.HeaderCell>Item Name</Table.HeaderCell>
							<Table.HeaderCell>Price</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
							<Table.HeaderCell>Email</Table.HeaderCell>
							<Table.HeaderCell>Contact</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{data?.data?.items.map((item) => (
							<StyledTableRow
								key={item.itemId}
								active={item.itemId === activeRowId}
								onClick={() =>
									handleRowSelect(
										item.itemId === activeRowId ? null : item.itemId
									)
								}
								style={
									item.itemId === activeRowId
										? { backgroundColor: "white" }
										: { backgroundColor: "black" }
								}
							>
								<Table.Cell textAlign="center">{item.itemId}</Table.Cell>
								<Table.Cell textAlign="center">{item.itemName}</Table.Cell>
								<Table.Cell textAlign="center">{item.price}</Table.Cell>
								<Table.Cell textAlign="center">{item.status}</Table.Cell>
								<Table.Cell textAlign="center">{item.email}</Table.Cell>
								<Table.Cell textAlign="center">{item.contact}</Table.Cell>
							</StyledTableRow>
						))}
					</Table.Body>
					<Table.Footer>
						<Table.Row>
							<Table.HeaderCell />
							<Table.HeaderCell colSpan="3">
								<PaginationComp form={ordersHook} />
							</Table.HeaderCell>
						</Table.Row>
					</Table.Footer>
				</StyledTable>
			</StyledTableDiv>
		</div>
	);
};

export default OrdersUI;

const StyledDiv = styled.div`
	justify-content: center;
	align-items: center;
	display: flex;
	margin: 10px;
	padding: 10px;
`;

const StyledTableDiv = styled.div`
	justify-content: center;
	align-items: center;
	margin: 0px 10px 0px 10px;
	padding: 0px 10px 0px 10px;
	min-height: 550px !important;
`;

const StyledTable = styled(Table)`
	min-height: 550px !important;
`;

const StyledTableRow = styled(Table.Row)`
	max-height: 40px !important;
`;
