import React, { useContext, useEffect, useState } from "react";
import { register } from "../../context/actions/auth/register";
import { GlobalContext } from "../../context/Provider";
import { useNavigate } from "react-router-dom";

export default () => {
	const [form, setForm] = useState({});
	const [fieldErrors, setFieldErrors] = useState({});
	const history = useNavigate();

	const {
		authDispatch,
		authState: {
			auth: { loading, data, error },
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

	//console.log("data", data);
	useEffect(() => {
		if (data) {
			history("/auth/login");
		}
	}, [data]);

	//console.log("fieldErrors", fieldErrors);

	const onChange = (e, { name, value }) => {
		setForm({ ...form, [name]: value });
	};

	const registerValidForm =
		!form.username?.length ||
		!form.firstName?.length ||
		!form.lastName?.length ||
		!form.email?.length ||
		!form.password?.length ||
		!form.termsNCondition === true;

	const onSubmit = () => {
		setFieldErrors({});
		register(form)(authDispatch);
	};

	//console.log(form);
	return { form, onChange, registerValidForm, onSubmit, loading, fieldErrors };
};
