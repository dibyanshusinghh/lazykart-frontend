import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import stocksInitialState from "./initialstates/stocksInitialState";
import auth from "./reducers/auth";
import stocks from "./reducers/stocks";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
	const [authState, authDispatch] = useReducer(auth, authInitialState);
	const [stocksState, stocksDispatch] = useReducer(stocks, stocksInitialState);

	return (
		<GlobalContext.Provider
			value={{
				authState,
				authDispatch,
				stocksState,
				stocksDispatch,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
