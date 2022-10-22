import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import * as theme from "./styles/theme";


import Home from "./components/home";

function App() {
	return (
		<ThemeProvider theme={theme}>

			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
}

export default App;
