import React, { useContext } from "react";
import { Image, Menu, Button, Icon } from "semantic-ui-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/cart_logo.png";
import { GlobalContext } from "../../context/Provider";
import { logout } from "../../context/actions/auth/logout";
import styled from "styled-components";
import useLoginForm from "../../containers/Login/useLoginForm";

const Header = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	//console.log("pathname", pathname);

	const { handleLogout } = useLoginForm();

	return (
		<StyledMenu secondary pointing padding={0} margin={0}>
			<Image src={logo} width={60} />
			<Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
				LazyKart
			</Menu.Item>
			{pathname !== "/auth/login" && pathname !== "/auth/register" && (
				<Menu.Item position="right">
					<Button onClick={handleLogout} color="red" basic icon>
						<Icon name="log out"></Icon>
						Logout
					</Button>
				</Menu.Item>
			)}
		</StyledMenu>
	);
};

export default Header;

const StyledMenu = styled(Menu)`
	margin-bottom: 0px !important;
	position: sticky;
`;
