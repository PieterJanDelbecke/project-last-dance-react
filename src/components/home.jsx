import { useState } from "react";
import styled from "@emotion/styled";
import { grid } from "../styles/theme";

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(12, 1fr);
  grid-template-rows: repeat(6,1fr);
  column-gap: ${grid.desktop.gutter};
  row-gap:${grid.desktop.gutter};
	background-color: yellow;
	width: 100vw;
	height: 100vh;
`;
const NavBar = styled.div`
  grid-column: 1 /span 12;
  grid-row: 1/span 1;
  background-color: orange;
`;
const LeftPane = styled.div`
  grid-column: 1/ span 2;
  grid-row: 2/span 5;
  background-color: green;
`;
const CenterPane = styled.div`
  grid-column: 3/span 8;
  grid-row: 2/ span 5;
  background-color: red;
`;

const RightPane = styled.div`
  grid-column: 11/ span 2;
  grid-row: 2/span 5;
  background-color: blue;
`;

const Home = () => {
	return (
		<Container>
			<NavBar />
      <LeftPane />
      <CenterPane/>
      <RightPane />
		</Container>
	);
};

export default Home;
