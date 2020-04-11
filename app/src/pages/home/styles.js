import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
	},
	imageBg: {
		flex: 1,
		resizeMode: "cover",
		padding: 15,
	},
	tituloApp: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
	},
	campanhas: {
		display: "flex",
		flexDirection: "row",
	},
});

export default styles;
