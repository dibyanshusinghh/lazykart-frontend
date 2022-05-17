import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Checkbox,
	Form,
	Grid,
	GridColumn,
	Header as SemanticHeader,
	Message,
	Segment,
} from "semantic-ui-react";
import Header from "../../components/Header";

const LoginUI = ({
	form: { onChange, loginForm, loginValidForm, onSubmit, loading, error },
}) => {
	return (
		<div>
			<Header />
			<Grid centered>
				<GridColumn style={{ maxWidth: 550, marginTop: 20 }}>
					<SemanticHeader>Login here</SemanticHeader>
					<Segment>
						<Form>
							{error && <Message content={error.msg} negative />}
							<Form.Field>
								<Form.Input
									value={loginForm.username || ""}
									onChange={onChange}
									name="username"
									placeholder="username"
									label="username"
								/>
							</Form.Field>
							<Form.Field>
								<Form.Input
									value={loginForm.password || ""}
									onChange={onChange}
									name="password"
									placeholder="password"
									label="password"
								/>
							</Form.Field>
							<Button
								onClick={onSubmit}
								disabled={loginValidForm || loading}
								loading={loading}
								fluid
								primary
								type="submit"
							>
								Login
							</Button>
							<h5>
								Not a user? <Link to="/auth/register"> Signup</Link>
							</h5>
						</Form>
					</Segment>
				</GridColumn>
			</Grid>
		</div>
	);
};

export default LoginUI;
