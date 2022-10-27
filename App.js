import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        Working test
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({});
