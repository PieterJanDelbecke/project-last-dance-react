import { useState } from "react";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

const Container = styled.div`
	padding: 12px;
	grid-column: 1 / span 3;
	grid-row: 2 / span 5;
	background-color: green;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const TopBox = styled.div`
	background-color: white;
	height: 2rem;
`;

const MiddleBox = styled.form`
	padding: 24px;
	background-color: white;
	flex: 1 1 0;
	display: flex;
	flex-direction: column;
	gap: 12px;
`;

const BottomBox = styled.div`
	background-color: white;
	height: 2rem;
`;

const LeftPane = () => {
	const inputForms = [
		{ name: "First Name", id: uuidv4() },
		{ name: "Last Name", id: uuidv4() },
		{ name: "Phone", id: uuidv4() },
		{ name: "Email", id: uuidv4() },
	];

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log("SUBMITTED");
		const formData = new FormData(e.target);
		console.log([...formData.entries()]);
	};
	return (
		<>
			<Container>
				<TopBox>Top</TopBox>
				<MiddleBox onSubmit={handleSubmit}>
					{inputForms.map((form) => (
						<>
							<label htmlFor={form.id}>{form.name}</label>
							<input type="text" name={form.name} id={form.id} />
						</>
					))}

					<button type="submit">Submit</button>
				</MiddleBox>
				<BottomBox>Bottom</BottomBox>
			</Container>
			;
		</>
	);
};

export default LeftPane;
