import React from "react";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "../styles/profile";

const assets = [
  { id: "1", name: "Bitcoin", symbol: "BTC", balance: 0.5, price: 45000, image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png?v=025" },
  { id: "2", name: "Ethereum", symbol: "ETH", balance: 2, price: 3000, image: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025" },
  { id: "3", name: "Cardano", symbol: "ADA", balance: 150, price: 1.2, image: "https://cryptologos.cc/logos/cardano-ada-logo.png?v=025" },
  { id: "4", name: "Solana", symbol: "SOL", balance: 10, price: 150, image: "https://cryptologos.cc/logos/solana-sol-logo.png?v=025" },
  { id: "5", name: "XRP", symbol: "XRP", balance: 500, price: 0.8, image: "https://cryptologos.cc/logos/xrp-xrp-logo.png?v=025" },
];

export default function ProfileScreen() {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>

        {/* Saldo Total */}
        <View style={{ display: "flex", flexDirection: "row" }}>
          <View style={{ ...styles.balanceContainer, width: "80%" }}>
            <Text style={styles.balanceLabel}>Saldo Total</Text>
            <Text style={styles.balanceAmount}>$ 500.00</Text>
          </View>
          <View style={{ ...styles.balanceContainer, ...styles.viewNotific, width: "20%" }}>
            <Ionicons name="notifications-outline" size={35} color="white" />
          </View>
        </View>
        <View>
            <TouchableOpacity
              style ={{backgroundColor: "#1e1e1e",
                minWidth: "100%",
                marginBottom: 10,
                borderRadius: 10,
                alignItems: "center",
                padding: 10,

              }}
              onPress={()=> navigation.navigate()}
            >
                <Ionicons name="search-outline" size={20} color="#fff"/>
                <Text style={{
                  fontSize: 15,
                  color: "#FFF",}}
                >Explorar Activos</Text>
            </TouchableOpacity>
        </View>
        {/* Lista de Criptomoedas */}
        <FlatList
        data={assets}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View style={styles.assetItem}>
            {/* Imagem da moeda */}
            <Image source={{ uri: item.image }} style={styles.coinImage} />

            <View>
              <Text style={styles.assetName}>{item.name} ({item.symbol})</Text>
              <Text style={styles.assetBalance}>{item.balance} {item.symbol}</Text>
              <Text style={styles.assetPrice}>${item.price} USD</Text>
            </View>
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
