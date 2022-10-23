import styled from "@emotion/styled";
import { useState, useEffect, UseCallback, UseMemo, memo } from "react";

const Container = styled.div`
	grid-column: 4 / span 8;
	grid-row: 2 / span 5;
	background-color: lightseagreen;
`;

const CenterContainer = styled.div`
	box-sizing: border-box;
	margin-inline: auto;
	width: 60%;
	height: 100%;
	border: 3px solid red;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 12px;
`;

const Element = styled.div`
	width: 300px;
	height: 100px;
	background-color: ${(props) => props.color};
`;

const CenterPane = () => {
    const rows = new Map();
    const [rowsArray, setRowsArray] = useState([])
    const [origin, setOrigin] = useState("")
    const [destination, setDestination] =  useState("")

	const initialRows = [
		{ name: "one", info: { order: 1, color: "yellow" } },
		{ name: "two", info: { order: 2, color: "green" } },
		{ name: "three", info: { order: 3, color: "red" } },
		{ name: "four", info: { order: 4, color: "blue" } },
	];

	useEffect(() => {
		for (let row of initialRows) {
			rows.set(row.name, row.info);
		}
        console.log("rows MAP",rows)
        console.log("rows ARRAY",[...rows])
		setRowsArray([...rows]);
	}, []);

	const handleDrag = (name) => {
		// console.log("DRAGGING element => ", name);
        setOrigin(name)
	};

	const handleDrop = (name) => {
		console.log("DROPPING element => ", name);
	};

	const handleDragOver = () => {
		console.log("DRAGGING OVER");
	};

	return (
		<>
			<Container>
				<CenterContainer>
                    {rowsArray.map(row => (
                        <Element draggable key={row[0]} color={row[1].color} onDrag={()=> handleDrag(row[0])} onDragOver={()=> handleDragOver(row[0])} onDrop={handleDrop}>
                            {row[0]}
                        </Element>
                    ))}
                </CenterContainer>
			</Container>
			;
		</>
	);
};

export default CenterPane;
