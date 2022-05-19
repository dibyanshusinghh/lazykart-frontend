import React, { useContext, useEffect, useState } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";
import { LOGOUT_USER } from "../../constants/actionTypes";

export default () => {
	const [loginForm, setLoginForm] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});
	const navigate = useNavigate();

	const {
		authDispatch,
		authState: {
			loginAuth: { loading, data, error },
		},
	} = useContext(GlobalContext);

	useEffect(() => {
		if (error) {
			for (const item in error) {
				setFieldErrors((prevErrors) => ({
					...prevErrors,
					[item]: error[item][0],
				}));
			}
		}
	}, [error]);

	//console.log("login data", data, "error", error);
	useEffect(() => {
		if (data && localStorage.getItem("token")) {
			navigate("/");
		}
	}, [data]);

	//console.log("fieldErrors", fieldErrors);

	const onChange = (e, { name, value }) => {
		setLoginForm({ ...loginForm, [name]: value });
	};

	const loginValidForm =
		!loginForm.username?.length || !loginForm.password?.length;

	const onSubmit = () => {
		setFieldErrors({});
		login(loginForm)(authDispatch);
	};

	const handleLogout = () => {
		//the below call will change the contacts state if any
		localStorage.removeItem("token");
		authDispatch({
			type: LOGOUT_USER,
		});
		//logout()(contactsDispatch);
		console.log(`User Data Deleted`);
		navigate("/auth/login");
	};

	//console.log(loginForm);
	return {
		loginForm,
		onChange,
		loginValidForm,
		onSubmit,
		loading,
		fieldErrors,
		error,
		handleLogout,
	};
};
