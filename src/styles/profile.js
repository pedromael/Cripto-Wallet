import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#ffcc00",
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  balanceContainer: {
    backgroundColor: "#1e1e1e",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  balanceLabel: {
    color: "#bbb",
    fontSize: 16,
  },
  balanceAmount: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffcc00",
  },
  assetItem: {
    backgroundColor: "#1e1e1e",
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  assetName: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  assetBalance: {
    color: "#bbb",
    fontSize: 14,
  },
  assetPrice: {
    color: "#ffcc00",
    fontSize: 16,
    fontWeight: "bold",
  },
  actionButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  button: {
    backgroundColor: "#ffcc00",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121212",
    marginLeft: 8,
  },
});
