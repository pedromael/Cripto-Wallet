import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/withdraw"; // Importando os estilos

export default function WithdrawScreen() {
  const navigation = useNavigation();
  const [selectedCrypto, setSelectedCrypto] = useState("BTC");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleWithdraw = () => {
    if (!walletAddress || !amount) {
      Alert.alert("Erro", "Preencha todos os campos antes de continuar.");
      return;
    }
    Alert.alert(
      "Confirmação",
      `Você deseja sacar ${amount} ${selectedCrypto} para o endereço:\n${walletAddress}?`,
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Confirmar", onPress: () => alert("Saque realizado com sucesso!") },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Saque de Criptomoeda</Text>

      {/* Seleção de Criptomoeda */}
      <View style={styles.cryptoSelector}>
        {["BTC", "ETH", "SOL"].map((crypto) => (
          <TouchableOpacity
            key={crypto}
            style={[
              styles.cryptoButton,
              selectedCrypto === crypto && styles.selectedCrypto,
            ]}
            onPress={() => setSelectedCrypto(crypto)}
          >
            <Text style={styles.cryptoText}>{crypto}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Endereço de Destino */}
      <Text style={styles.label}>Endereço de Destino</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Cole o endereço da carteira"
          placeholderTextColor="#999"
          value={walletAddress}
          onChangeText={setWalletAddress}
        />
        <Ionicons name="wallet-outline" size={24} color="#ffcc00" />
      </View>

      {/* Valor do Saque */}
      <Text style={styles.label}>Valor</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o valor"
          placeholderTextColor="#999"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
        <Text style={styles.currency}>{selectedCrypto}</Text>
      </View>

      {/* Botão de Confirmação */}
      <TouchableOpacity style={styles.confirmButton} onPress={handleWithdraw}>
        <Text style={styles.confirmText}>Confirmar Saque</Text>
      </TouchableOpacity>
    </View>
  );
}
