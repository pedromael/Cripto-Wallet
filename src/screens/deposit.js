import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/profile"; // Importando os estilos

export default function DepositScreen() {
    const navigation = useNavigation();
    const [selectedCrypto, setSelectedCrypto] = useState("BTC");
    const walletAddresses = {
    BTC: "1FfmbHfnpaZjKFvyi1okTjJJusN455paPH",
    ETH: "0xAb5801a7D398351b8bE11C439e05C5b3259aeC9B",
    SOL: "3Jn1dTza6oVgj1FvM5i76XyzqP2eQ2m5H7kA4L",
  };

  return (
    <View style={styles.container}>
      {/* Título */}
      <Text style={styles.title}>Depósito de Criptomoeda</Text>

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

      {/* QR Code Simulado */}
      <Image
        source={{ uri: "https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + walletAddresses[selectedCrypto] }}
        style={styles.qrCode}
      />

      {/* Endereço da Carteira */}
      <Text style={styles.walletLabel}>Endereço da Carteira</Text>
      <View style={styles.walletContainer}>
        <TextInput style={styles.walletText} value={walletAddresses[selectedCrypto]} editable={false} />
        <TouchableOpacity onPress={() => alert("Endereço copiado!")}>
          <Ionicons name="copy-outline" size={24} color="#ffcc00" />
        </TouchableOpacity>
      </View>

      {/* Botão de Confirmação */}
      <TouchableOpacity style={styles.confirmButton}>
        <Text style={styles.confirmText}>Confirmar Depósito</Text>
      </TouchableOpacity>
    </View>
  );
}
