import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: "column",
		backgroundColor: '#fff'
	},
	imageBg: {
		flex: 1,
		resizeMode: "cover",
	},
	tituloApp: {
		color: "#fff",
		fontSize: 30,
		fontWeight: "bold",
		padding: 15,
		marginTop:10,
	},
	campanhas: {
		display: "flex",
		flexDirection: "row",
	},
});

export default styles;
