import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/Provider";
import LoginUI from "../../layout/Login";
import useLoginForm from "./useLoginForm";

const LoginContainer = () => {
	const {
		authDispatch,
		authState: {
			auth: { loading, data, error },
		},
	} = useContext(GlobalContext);

	return <LoginUI form={useLoginForm()} />;
};

export default LoginContainer;

/*<div>
			<h1>{data ? `Welcome ${data.username}` : `Login Here`}</h1>
			<Link to="/auth/register">Register</Link>
		</div>*/
