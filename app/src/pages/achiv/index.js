import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";
import IconModal from "../../components/IconModal";

// class Achievements extends React.Component {
// 	render() {
const Achievements = () => {
	return (
		<ScrollView style={styles.container}>
			<View style={styles.linha}>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/new.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a primeira vez!"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/new.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a primeira vez!"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/new.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a primeira vez!"
				/>
			</View>
			<View style={styles.linha}>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/new.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a primeira vez!"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/new.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a primeira vez!"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/sticker.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a segunda vez!"
				/>
			</View>
			<View style={styles.linha}>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/sticker.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a segunda vez!"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/sticker.png")}
					textoModal="Parabéns você conseguiu essa insígnia por ter doado a segunda vez!"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
			</View>
			<View style={styles.linha}>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
			</View>
			<View style={styles.linha}>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
			</View>
			<View style={styles.linha}>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
				<IconModal
					caminhoIcone={require("./../../assets/images/conquistas/drawable-mdpi/question.png")}
					textoModal="Bloqueada ;-;"
				/>
			</View>
		</ScrollView>
	);
};
// }

export default Achievements;
