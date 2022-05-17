import React, { useState, useEffect, useContext } from "react";
import { Pagination } from "semantic-ui-react";
import { STOCKS_PAGE_CHANGE } from "../../constants/actionTypes";
import { getStocksData } from "../../context/actions/stocks/getStocks";
import { GlobalProvider } from "../../context/Provider";

const PaginationComp = ({ form: { data, activePage, onPageChange } }) => {
	return (
		<div>
			<Pagination
				activePage={activePage}
				onPageChange={onPageChange}
				totalPages={data?.data?.totalPage || 1}
				boundaryRange={1}
				siblingRange={0}
				ellipsisItem={null}
			/>
		</div>
	);
};

export default PaginationComp;
