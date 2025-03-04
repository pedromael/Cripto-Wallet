import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
    alignItems: "center",
  },

  /* ================== PERFIL ================== */
  profileHeader: {
    alignItems: "center",
    marginBottom: 20,
  },
  username: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 10,
  },
  balanceContainer: {
    backgroundColor: "#1e1e1e",
    padding: 10,
    alignItems: "center",
    margin: 5,
    marginBottom: 15,
    marginTop: 30,
  },
  viewNotific: {
    borderRadius: 50,
    justifyContent: "center",
    backgroundColor: "none",
  },
  balanceLabel: {
    color: "#bbb",
    fontSize: 16,
  },
  balanceAmount: {
    fontSize: 23,
    fontWeight: "bold",
    color: "#ffcc00",
  },
  assetItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#1e1e1e",
    marginVertical: 5,
    minWidth: "100%",
    borderRadius: 10,
    elevation: 3,
  },
  coinImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  assetName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#ffcc00",
  },
  assetBalance: {
    fontSize: 14,
    color: "#555",
  },
  assetPrice: {
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
  },

  /* ================== DEPÓSITO & SAQUE ================== */
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

  /* ================== CAMPOS DE INPUT ================== */
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

  /* ================== QR CODE (DEPÓSITO) ================== */
  qrCode: {
    width: 150,
    height: 150,
    marginVertical: 20,
  },
  walletLabel: {
    color: "#bbb",
    fontSize: 16,
    marginBottom: 5,
  },
  walletContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1e1e1e",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: "100%",
  },
  walletText: {
    flex: 1,
    color: "#fff",
    fontSize: 14,
  },

  /* ================== BOTÕES ================== */
  actionButtons: {
    flexDirection: "row",
    width: "100%",
    padding: 0,
    margin: 0,
    justifyContent: "space-between",
    marginTop: 20,
    flexWrap: "wrap", // Empilha se necessário
  },
  button: {
    backgroundColor: "#ffcc00",
    paddingVertical: width < 400 ? 10 : 12,
    paddingHorizontal: width < 400 ? 15 : 25,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    minWidth: width < 400 ? "20%" : "30%",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#121212",
    marginLeft: 8,
    display: width < 400 ? "none" : "flex", // Esconde texto em telas pequenas
  },
  confirmButton: {
    marginTop: 20,
    backgroundColor: "#ffcc00",
    paddingVertical: width < 400 ? 10 : 12,
    paddingHorizontal: width < 400 ? 20 : 25,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
  confirmText: {
    fontSize: width < 400 ? 14 : 16,
    fontWeight: "bold",
    color: "#121212",
  },
});
