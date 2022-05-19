import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Checkbox,
	Grid,
	Header,
	Icon,
	Image,
	Menu,
	Ref,
	Segment,
	Sidebar,
} from "semantic-ui-react";
import styled from "styled-components";

const SideBar = ({ children }) => {
	const [visible, setVisible] = React.useState(false);
	const segmentRef = React.useRef();
	return (
		<StyledDiv>
			<div
				style={{
					position: "absolute",
					top: visible ? "5rem" : "5rem",
					left: visible ? "150px" : "0.5rem",
					zIndex: "2",
					background: "white",
					borderRadius: "0.5rem",
				}}
			>
				<Button
					onClick={() => setVisible(!visible)}
					className="medium ui button"
					basic
					color="black"
					icon
					style={{ margin: "0" }}
				>
					<Icon name={visible ? "close" : "list layout"}></Icon>
				</Button>
			</div>
			<StyledGrid columns={1}>
				<StyledGridColumn>
					<Sidebar.Pushable as={StyledSegmentGroup} raised>
						<Sidebar
							as={Menu}
							animation="overlay"
							icon="labeled"
							onHide={() => setVisible(false)}
							vertical
							inverted
							target={segmentRef}
							visible={visible}
							width="thin"
						>
							<Menu.Item as={Link} to="/">
								Dashboard
							</Menu.Item>
							<Menu.Item as={Link} to="/orders">
								Orders
							</Menu.Item>
							<Menu.Item as={Link} to="/stocks">
								Stock
							</Menu.Item>
						</Sidebar>

						<Ref innerRef={segmentRef}>{children}</Ref>
					</Sidebar.Pushable>
				</StyledGridColumn>
			</StyledGrid>
		</StyledDiv>
	);
};

export default SideBar;

const StyledGrid = styled(Grid)`
	padding: 0 !important;
	margin: 0 !important;
	height: 80% !important;
`;

const StyledGridColumn = styled(Grid.Column)`
	padding: 0 !important;
	margin: 0 !important;
	height: 80% !important;
`;

const StyledDiv = styled.div`
	height: 80% !important;
`;

const StyledSegmentGroup = styled(Segment.Group)`
	height: 90% !important;
`;
