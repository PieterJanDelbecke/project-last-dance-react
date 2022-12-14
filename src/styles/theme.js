const colors = {
	gray: {
		100: "#FAFAFA",
		200: "#F5F5F5",
		300: "#F0F0F0",
		400: "#E9E9E9",
		500: "#D2D2D2",
		600: "#B3B3B2",
		700: "#757575",
		800: "#636362",
		900: "#444443",
		1000: "#282827",
	},
	purple: {
		100: "#FFF9FF",
		200: "#FAF2FE",
		300: "#F6ECFE",
		400: "#F2E4FE",
		500: "#E2C8FE",
		600: "#CC9FFE",
		700: "#A239FF",
		800: "#842AEA",
		900: "#562B91",
		1000: "#301E4C",
	},
	green: {
		100: "#EBFFEC",
		200: "#DCFFE0",
		300: "#C5FDCB",
		400: "#B9F8C0",
		500: "#8FE697",
		600: "#5AC961",
		700: "#008800",
		800: "#007400",
		900: "#0E4F04",
		1000: "#0F2E09",
	},
	navy: {},
	red: {
		100: "#FFF8F8",
		200: "#FFF3F2",
		300: "#FDEBEA",
		400: "#FDE4E4",
		500: "#FFC4C2",
		600: "#FF9592",
		700: "#DC3332",
		800: "#BC2928",
		900: "#7F221E",
		1000: "#471915",
	},
	orange: {
		100: "#FFFAEE",
		200: "#FFF6E2",
		300: "#FFEFCB",
		400: "#FFE6B0",
		500: "#FFC96B",
		600: "#FF9B20",
		700: "#BB5914",
		800: "#9C4D18",
		900: "#663818",
	},
	cyan: {
		100: "#E2FFFF",
		200: "#D0FFFF",
		300: "#A8FFFF",
		400: "#56FFFF",
		500: "#24E8E8",
		600: "#37C5C5",
		700: "#407F7E",
		800: "#3C6A6A",
		900: "#2F4848",
		1000: "#1F2A2A",
	},
	blue: {
		100: "#F7FAFF",
		200: "#EDF7FF",
		300: "#E0F1FF",
		400: "#D4ECFF",
		500: "#A8D7FE",
		600: "#6CB8FF",
		700: "#006BFF",
		800: "#004CFF",
		900: "#1700E3",
		1000: "#090091",
	},
	mauve: {},
	bg: {
		100: "#FCFCFF",
		200: "#FAFAFF",
		300: "#F7F7FF",
		400: "#F5F5FF",
		500: "#F2F2FF",
	},
	facebook: {
		100: "#F9FBFF",
		200: "#F0F6FE",
		300: "#E7F1FE",
		400: "#DBEAFD",
		500: "#B7D5FB",
		600: "#83B6F8",
		700: "#1671E6",
		800: "#1361C3",
		900: "#0D4287",
		1000: "#082750",
	},
	twitter: {
		100: "#F4FAFE",
		200: "#EDF7FE",
		300: "#E1F2FD",
		400: "#D5ECFC",
		500: "#A7D8F9",
		600: "#64BBF4",
		700: "#167ABD",
		800: "#1367A0",
		900: "#0D476E",
		1000: "#082A41",
	},
	linkedIn: {
		100: "#F5FAFD",
		200: "#EFF7FB",
		300: "#E5F2F9",
		400: "#D7ECF6",
		500: "#ADD8EE",
		600: "#73BCE2",
		700: "#057BB8",
		800: "#0067A2",
		900: "#004774",
		1000: "#002A47",
	},
};

const typography = {
	fonts: ['"Sofia Pro"', "sans-serif"].join(", "),
	size: {
		s1: "12px",
		s2: "14px",
		s3: "16px",
		m1: "20px",
		m2: "24px",
		m3: "28px",
		l1: "32px",
		l2: "36px",
		l3: "40px",
		l4: "48px",
	},
	letterSpacing: { regular: "0.1px", wide: "2px" },
	defaultColor: colors.gray[900],
};

const spacers = {
	desktop: {
		xxs: "4px",
		xs: "8px",
		s: "16px",
		m: "32px",
		l: "40px",
		xl: "64px",
		xxl: "96px",
	},
	tablet: {},
	mobile: {},
};

const grid = {
	xl: {
		min: "1520px",
		max: "2152px",
		cols: 12,
		gutter: "24px",
		margin: "32px",
	},
	desktop: {
		min: "1096px",
		max: "1280px",
		cols: 12,
		gutter: "24px",
		margin: "32px",
	},
	tablet: {
		min: "720px",
		max: "1096px",
		cols: 8,
		gutter: "16px",
		margin: "24px",
	},
	mobile: {
		min: "375px",
		max: "720px",
		cols: 4,
		gutter: "12px",
		margin: "16px",
	},
};

const elevation = {
	100: "0px 1px 3px 1px #8B92A21A, 0px 1px 2px 0px #8B92A21A",
	200: "0px 2px 6px 2px #8B92A21A, 0px 1px 2px 0px #8B92A21A",
	300: "0px 1px 3px 0px #8B92A21A, 0px 4px 8px 3px #8B92A21A",
	leftSettingsDrawer:
		"2px 1px 3px -2px #8b92a21a, 2px 4px 8px 0px #8b92a21a, inset 2px 1px 3px -2px #8b92a21a, inset 2px 4px 8px 0px #8b92a21a",
};

const constants = {
	sideMenuWidth: "89px",
};

export { colors, typography, spacers, grid, elevation, constants };
