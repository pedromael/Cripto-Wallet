import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../styles/profile";

const assets = [
  { id: "1", name: "Bitcoin", symbol: "BTC", balance: "0.253", price: "45,000" },
  { id: "2", name: "Ethereum", symbol: "ETH", balance: "1.5", price: "3,200" },
  { id: "3", name: "Solana", symbol: "SOL", balance: "10", price: "95" },
];

export default function ProfileScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {/* Avatar e Nome */}
      <View style={styles.profileHeader}>
        <Image source={{ uri: "https://i.pravatar.cc/150?img=12" }} style={styles.avatar} />
        <Text style={styles.username}>Pedro Manuel</Text>
      </View>

      {/* Saldo Total */}
      <View style={styles.balanceContainer}>
        <Text style={styles.balanceLabel}>Saldo Total</Text>
        <Text style={styles.balanceAmount}>$ 12,500.00</Text>
      </View>

      {/* Lista de Criptomoedas */}
      <FlatList
        data={assets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.assetItem}>
            <Text style={styles.assetName}>{item.name} ({item.symbol})</Text>
            <Text style={styles.assetBalance}>{item.balance} {item.symbol}</Text>
            <Text style={styles.assetPrice}>${item.price} USD</Text>
          </View>
        )}
      />

      {/* Botões de Ação */}
      <View style={styles.actionButtons}>
        <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Deposit")}
        >
          <Ionicons name="arrow-down-circle" size={24} color="white" />
          <Text style={styles.buttonText}>Depositar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}
        onPress={() => navigation.navigate("Withdraw")}
        >
          <Ionicons name="arrow-up-circle" size={24} color="white" />
          <Text style={styles.buttonText}>Sacar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button}>
          <Ionicons name="settings-outline" size={24} color="white" />
          <Text style={styles.buttonText}>Configurações</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
