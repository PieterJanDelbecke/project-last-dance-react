import styled from "@emotion/styled";
import { useState, useEffect, UseCallback, UseMemo, memo } from "react";

const Container = styled.div`
	grid-column: 4 / span 8;
	grid-row: 2 / span 5;
	background-color: lightseagreen;
`;

const CenterPane = () => {
  return (
    <Container>CenterPane</Container>
  )
}

export default CenterPane