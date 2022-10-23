import { useState } from "react";
import styled from "@emotion/styled";

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
	const handleSubmit = (e) => {
        e.preventDefault()
		console.log("SUBMITTED");
		const formData = new FormData(e.target);
		console.log([...formData.entries()]);
	};
	return (
		<>
			<Container>
				<TopBox>Top</TopBox>
				<MiddleBox onSubmit={handleSubmit}>
					<label htmlFor="firstName">First Name</label>
					<input type="text" name="FirstName" id="firstName" />
					<label htmlFor="LastName">Last Name</label>
					<input type="text" name="LastName" id="lastName" />
					<label htmlFor="phone">Phone</label>
					<input type="text" name="Phone" id="phone" />
					<label htmlFor="email">Email</label>
					<input type="text" name="Email" id="email" />
                    <button type="submit">Submit</button>
				</MiddleBox>
				<BottomBox>Bottom</BottomBox>
			</Container>
			;
		</>
	);
};

export default LeftPane;
