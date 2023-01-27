import { StyleSheet, Text, View, StatusBar } from "react-native";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Welcome from "./src/screens/Welcome";
import Homepage from "./src/screens/Homepage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Verification from "./src/screens/Verification";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="welcome">
        <Stack.Screen
          name="welcome"
          component={Welcome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={Homepage}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="verification"
          component={Verification}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

    // {/* <Welcome /> */}
    // {/* <Login /> */}
    // {/* <Signup /> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
  },
});
