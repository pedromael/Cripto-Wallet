import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  cryptoSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  cryptoButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
  },
  selectedCrypto: {
    backgroundColor: "#ffcc00",
  },
  cryptoText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  label: {
    color: "#bbb",
    fontSize: 16,
    marginBottom: 5,
    alignSelf: "flex-start",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
    marginBottom: 15,
  },
  input: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
  },
  currency: {
    color: "#ffcc00",
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#ffcc00",
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  confirmText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121212",
  },
});
