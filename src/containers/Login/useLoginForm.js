import React, { useContext, useEffect, useState } from "react";
import { login } from "../../context/actions/auth/login";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

export default () => {
	const [loginForm, setLoginForm] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});
	const history = useNavigate();

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

	console.log("login data", data, "error", error);
	useEffect(() => {
		if (data) {
			history("/");
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

	console.log(loginForm);
	return {
		loginForm,
		onChange,
		loginValidForm,
		onSubmit,
		loading,
		fieldErrors,
		error,
	};
};
