import {
	REGISTER_ERROR,
	REGISTER_LOADING,
	REGISTER_SUCCESS,
	LOGIN_LOADING,
	LOGIN_SUCCESS,
	LOGIN_ERROR,
} from "../../constants/actionTypes";

const auth = (state, { payload, type }) => {
	switch (type) {
		case REGISTER_LOADING:
			return {
				...state,
				auth: {
					...state.auth,
					error: false,
					loading: true,
				},
			};

		case LOGIN_LOADING:
			return {
				...state,
				loginAuth: {
					...state.loginAuth,
					error: false,
					loading: true,
				},
			};

		case REGISTER_SUCCESS:
			return {
				...state,
				auth: {
					...state.auth,
					loading: false,
					data: payload,
				},
			};

		case LOGIN_SUCCESS:
			return {
				...state,
				loginAuth: {
					...state.loginAuth,
					loading: false,
					data: payload,
				},
			};

		case REGISTER_ERROR || LOGIN_ERROR:
			return {
				...state,
				auth: {
					...state.auth,
					loading: false,
					error: payload,
				},
			};

		case LOGIN_ERROR:
			return {
				...state,
				loginAuth: {
					...state.loginAuth,
					loading: false,
					error: payload,
				},
			};
		default:
			return state;
	}
};

export default auth;
