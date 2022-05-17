import React from "react";
import {
	Modal,
	Button,
	Form,
	Message,
	Dropdown,
	Input,
} from "semantic-ui-react";
import styled from "styled-components";

const statusOptions = [
	{
		key: "Sold",
		text: "Sold",
		value: "Sold",
	},
	{
		key: "Not Sold",
		text: "Not Sold",
		value: "Not Sold",
	},
];

const AddStockUI = ({
	form: {
		modal,
		onChange,
		onSubmit,
		modalValidForm,
		isOpen,
		handleClose,
		error,
		fieldErrors,
		isNew,
	},
}) => {
	return (
		<Modal dimmer="inverted" open={isOpen}>
			<Modal.Header>{isNew ? "Add" : "Edit"} Item</Modal.Header>
			<Modal.Content>
				<Form onSubmit={onSubmit}>
					{error && <Message content={error?.data} negative />}
					<Form.Field>
						<Form.Input
							value={modal.itemId || ""}
							onChange={onChange}
							name="itemId"
							placeholder="itemId"
							label="Item Id"
							error={
								fieldErrors.itemId && {
									content: fieldErrors.itemId,
									pointing: "below",
								}
							}
							type="number"
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							value={modal.itemName || ""}
							onChange={onChange}
							name="itemName"
							placeholder="itemName"
							label="Item Name"
							error={
								fieldErrors.itemName && {
									content: fieldErrors.itemName,
									pointing: "below",
								}
							}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							value={modal.price || ""}
							onChange={onChange}
							name="price"
							placeholder="price"
							label="price"
							type="number"
							error={
								fieldErrors.price && {
									content: fieldErrors.price,
									pointing: "below",
								}
							}
						/>
					</Form.Field>
					<Form.Field>
						<label>Status</label>
						<Dropdown
							placeholder="Select Status"
							name="status"
							label="status"
							onChange={onChange}
							fluid
							selection
							options={statusOptions}
						/>
					</Form.Field>
					<StyledDiv>
						<Button
							// onClick={onSubmit}
							disabled={modalValidForm}
							//loading={loading}
							//fluid
							primary
							type="submit"
						>
							{isNew ? "Add" : "Update"}
						</Button>
						<Button
							onClick={handleClose}
							//disabled={modalValidate || loading}
							//loading={loading}
							//fluid
							primary
							type="button"
						>
							cancel
						</Button>
					</StyledDiv>
				</Form>
			</Modal.Content>
		</Modal>
	);
};

export default AddStockUI;

const StyledDiv = styled.div`
	display: flex;
	align-items: right;
	justify-content: right;
`;
