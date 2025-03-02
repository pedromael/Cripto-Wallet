import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    alignItems: "center",
  },

  /* ================== PERFIL ================== */
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
