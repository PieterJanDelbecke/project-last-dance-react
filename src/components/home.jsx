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
const NavBar = styled.div``;
const LeftPane = styled.div``;
const CenterPane = styled.div``;

const RightPane = styled.div``;

const Home = () => {
	return (
		<Container>
			<NavBar />
			Hello World
		</Container>
	);
};

export default Home;
