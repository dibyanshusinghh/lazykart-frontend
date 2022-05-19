import React, { useContext, useState } from "react";
import { Card, Icon, Table } from "semantic-ui-react";
import { Link } from "react-router-dom";
import add_stock from "../../assets/images/add_stock.svg";
import {
	Button,
	Checkbox,
	Form,
	Grid,
	GridColumn,
	Header as SemanticHeader,
	Image,
	Message,
	Ref,
	Segment,
} from "semantic-ui-react";
import styled, { css } from "styled-components";
import useModal from "../../containers/Stock/useModal";
import addStockUI from "../addStock";
import AddStockUI from "../addStock";
import { GlobalContext } from "../../context/Provider";
import PaginationComp from "../../components/Pagination";
import useStocks from "../../containers/Stock/useStocks";

const StocksUI = () => {
	const form = useModal();
	const { handleOpenModal, handleRowSelect, activeRowId, handleDeleteRow } =
		form;
	const stocksHook = useStocks();

	const {
		stocksDispatch,
		stocksState: {
			stocks: { loading, data, error },
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
				//background: "#132044 ",
				margin: 0,
				height: "100%",
			}}
		>
			<AddStockUI form={form} />
			<StyledImage src={add_stock} width="100%" height="200px" />
			<StyledDiv>
				<Button primary icon onClick={handleOpenModal}>
					<Icon name="add"></Icon>
					Add New Item
				</Button>
				<Button primary icon onClick={handleEditRow} disabled={!activeRowId}>
					<Icon name="edit"></Icon>
					Edit Item
				</Button>
				{
					<Button
						color="red"
						icon
						onClick={handleDeleteRow}
						disabled={!activeRowId}
					>
						<Icon name="delete"></Icon>
						Delete Item
					</Button>
				}
			</StyledDiv>
			<StyledTableDiv>
				<StyledTable celled inverted selectable unstackable>
					<Table.Header>
						<Table.Row>
							<Table.HeaderCell>Item Id</Table.HeaderCell>
							<Table.HeaderCell>Item Name</Table.HeaderCell>
							<Table.HeaderCell>Price</Table.HeaderCell>
							<Table.HeaderCell>Status</Table.HeaderCell>
						</Table.Row>
					</Table.Header>

					<Table.Body>
						{data?.data?.items.map((item) => (
							<Table.Row
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
							</Table.Row>
						))}
					</Table.Body>
					<Table.Footer>
						<Table.Row>
							<Table.HeaderCell />
							<Table.HeaderCell colSpan="4">
								<PaginationComp form={stocksHook} />
							</Table.HeaderCell>
						</Table.Row>
					</Table.Footer>
				</StyledTable>
			</StyledTableDiv>
		</div>
	);
};

export default StocksUI;

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

const StyledImage = styled(Image)`
	background-color: #123456 !important;
`;
