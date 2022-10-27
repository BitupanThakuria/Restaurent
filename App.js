import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  StatusBar,
} from "react-native";
const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={{ padding: 16, backgroundColor: "green" }}>
        <Text>Search bar</Text>
      </View>
      <View style={{ flex: 1, padding: 16, backgroundColor: "blue" }}>
        <Text>Home</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
