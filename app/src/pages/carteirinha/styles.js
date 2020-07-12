import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },

  carteirinha: {
    margin: 50,
    marginBottom: 30,
    width: width * 0.9,
    height: height * 0.75,
  },

  whiteBorder: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    textAlign: "center",
    height: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#fff",
  },

  cardContainer: {
    width: "100%",
    height: "100%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    alignItems: "center",
    justifyContent: "flex-start",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 40,
    borderWidth: 0.5,
    borderColor: "#000",
    backgroundColor: "#ca2929",
  },
});

export default styles;
