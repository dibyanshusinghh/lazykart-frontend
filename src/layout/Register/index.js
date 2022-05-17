import React from "react";
import {
	Button,
	Checkbox,
	Form,
	Grid,
	GridColumn,
	Header as SemanticHeader,
	Segment,
} from "semantic-ui-react";

import Header from "../../components/Header";

const RegisterUI = ({
	form: { onChange, form, registerValidForm, onSubmit, loading, fieldErrors },
}) => {
	return (
		<div>
			<Header />
			<Grid centered>
				<GridColumn style={{ maxWidth: 550, marginTop: 20 }}>
					<SemanticHeader>Signup here</SemanticHeader>
					<Segment>
						<Form>
							<Form.Field>
								<Form.Input
									value={form.firstName || ""}
									onChange={onChange}
									name="firstName"
									placeholder="First Name"
									label="First Name"
									error={
										fieldErrors.first_name && {
											content: fieldErrors.first_name,
											pointing: "below",
										}
									}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.lastName || ""}
									onChange={onChange}
									name="lastName"
									placeholder="Last Name"
									label="Last Name"
									error={
										fieldErrors.last_name && {
											content: fieldErrors.last_name,
											pointing: "below",
										}
									}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.username || ""}
									onChange={onChange}
									name="username"
									placeholder="Username"
									label="Username"
									error={
										fieldErrors.username && {
											content: fieldErrors.username,
											pointing: "below",
										}
									}
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={form.email || ""}
									onChange={onChange}
									name="email"
									type="email"
									placeholder="email"
									label="email"
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
									value={form.password || ""}
									onChange={onChange}
									name="password"
									type="password"
									placeholder="password"
									label="password"
									error={
										fieldErrors.password && {
											content: fieldErrors.password,
											pointing: "below",
										}
									}
								/>
							</Form.Field>
							<Form.Field>
								<Checkbox
									checked={form.termsNCondition || false}
									onChange={(e, data) => {
										onChange(e, { name: data.name, value: data.checked });
									}}
									name="termsNCondition"
									label="I agree to the Terms and Conditions"
								/>
							</Form.Field>
							<Button
								onClick={onSubmit}
								disabled={registerValidForm || loading}
								loading={loading}
								fluid
								primary
								type="submit"
							>
								Register
							</Button>
						</Form>
					</Segment>
				</GridColumn>
			</Grid>
		</div>
	);
};

export default RegisterUI;
