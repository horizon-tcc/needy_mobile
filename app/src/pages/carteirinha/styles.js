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
    width: width * 0.9,
    height: height * 0.75,
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

  whiteBorder: {
    width: "80%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    height: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    backgroundColor: "#fff",
  },

  cardContainer: {
    width: "100%",
    height: "60%",
    backgroundColor: "#fff",
    marginTop: 80,
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },

  profilePic: {
    backgroundColor: "#979797",
    marginLeft: 0,
    height: 120,
    borderBottomRightRadius: 30,
    width: 120,
  },

  title: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#ca2929",
  },

  column: {
    display: "flex",
    marginTop: 30,
    marginLeft: 30,
    flexDirection: "column",
  },

  row: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    paddingRight: 150,
  },

  infoContainer: {
    alignSelf: "center",
    marginBottom: 50,
    width: "90%",
    height: "50%",
    backgroundColor: "#fff",
  },
});

export default styles;
