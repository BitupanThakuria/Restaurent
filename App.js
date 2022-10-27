import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={{ padding: 16 }}>
        <Text>Search bar</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        Home
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
