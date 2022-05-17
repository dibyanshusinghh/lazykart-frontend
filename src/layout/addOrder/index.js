import React from "react";
import {
	Modal,
	Button,
	Form,
	Message,
	Dropdown,
	Input,
	Icon,
} from "semantic-ui-react";
import styled from "styled-components";

const statusOptions = [
	{
		key: "Delivered",
		text: "Delivered",
		value: "Delivered",
	},
	{
		key: "Dispatched",
		text: "Dispatched",
		value: "Dispatched",
	},
	{
		key: "Ready to dispatch",
		text: "Ready to dispatch",
		value: "Ready to dispatch",
	},
];

const AddOrdersUI = ({
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
		addOrderFetchById,
	},
}) => {
	return (
		<Modal dimmer="inverted" open={isOpen}>
			<Modal.Header>{isNew ? "Add" : "Edit"} Order</Modal.Header>
			<Modal.Content>
				<Form onSubmit={onSubmit}>
					{error && <Message content={error?.data} negative />}
					<Form.Field>
						<Form.Input
							control={Input}
							value={modal?.itemId || ""}
							onChange={onChange}
							name="itemId"
							placeholder="itemId"
							label="Order Id"
							error={
								fieldErrors.itemId && {
									content: fieldErrors.itemId,
									pointing: "below",
								}
							}
							type="number"
						>
							<input />
							<Button onClick={addOrderFetchById} type="button" icon primary>
								<Icon name="search"></Icon>
								Search in Stock
							</Button>
						</Form.Input>
					</Form.Field>
					<Form.Field>
						<Form.Input
							value={modal?.itemName || ""}
							onChange={onChange}
							name="itemName"
							placeholder="itemName"
							label="Order Name"
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
							label="Price"
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
							label="Status"
							onChange={onChange}
							fluid
							selection
							options={statusOptions}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							value={modal.email || ""}
							onChange={onChange}
							name="email"
							placeholder="Email"
							label="Email"
							type="email"
							error={
								fieldErrors.email && {
									content: fieldErrors.email,
									pointing: "below",
								}
							}
						/>
					</Form.Field>
					<Form.Field>
						<Form.Input
							value={modal.contact || ""}
							onChange={onChange}
							name="contact"
							placeholder="contact"
							label="Contact"
							error={
								fieldErrors.contact && {
									content: fieldErrors.contact,
									pointing: "below",
								}
							}
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

export default AddOrdersUI;

const StyledDiv = styled.div`
	display: flex;
	align-items: right;
	justify-content: right;
`;
