import React from "react";
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";
import undraw_analytics2 from "../../assets/images/undraw_analytics2.svg";
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
import Header from "../../components/Header";
import SideBar from "../../components/Sidebar";
import styled, { css } from "styled-components";

const DashboardUI = ({ form: { stocksData, salesData } }) => {
	return (
		<div
			style={{
				//background: "#123456",
				margin: 0,
				padding: 0,
				height: "91.8vh",
			}}
		>
			<StyledImage src={undraw_analytics2} width="100%" height="200px" />
			<StyledDiv>
				<StyledCard
					href="/stocks"
					header={
						<h1>
							{stocksData?.data?.length > 0 ? stocksData.data[0].amount : 0}
						</h1>
					}
					description={<h3>Stocks Amount</h3>}
				/>
				<StyledCard
					href="/stocks"
					header={
						<h1>
							{stocksData?.data?.length > 0 ? stocksData.data[0].count : 0}
						</h1>
					}
					description={<h3>{"\n"}Stocks Count</h3>}
				/>
			</StyledDiv>
			<StyledDiv>
				<StyledCard
					href="/orders"
					header={
						<h1>
							{salesData?.data?.length > 0 ? salesData.data[0].amount : 0}
						</h1>
					}
					description={<h3>{"\n"}Sales Amount</h3>}
					//extra="yes"
				/>
				<StyledCard
					href="/orders"
					header={
						<h1>{salesData?.data?.length > 0 ? salesData.data[0].count : 0}</h1>
					}
					description={<h3>Sales Count</h3>}
				/>
			</StyledDiv>
		</div>
	);
};

export default DashboardUI;

const StyledCard = styled(Card)`
	width: 500px !important;
	height: 150px;
	background-color: #43c6db !important;
	color: white !important;
	margin: 2rem !important;
	justify-content: center;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
		rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
		rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
		rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
		rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px !important;
	border-radius: 1rem !important;
`;

const StyledDiv = styled.div`
	display: flex;
	margin-top: 0;
	justify-content: center;
	align-items: center;
`;

const StyledImage = styled(Image)`
	background-color: #123456 !important;
`;
