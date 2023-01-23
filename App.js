import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./src/screens/Login";
import Welcome from "./src/screens/Welcome";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Welcome /> */}
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
