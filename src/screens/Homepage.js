import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React from "react";
import module from "../common/formcss";

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={module.head1}>Homepage</Text>
      <View style={module.buttonCont}>
        <TouchableOpacity style={styles.buttonContTouch}>
          <Text
            style={module.button2}
            onPress={() => {
              navigation.navigate("login");
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // paddingTop: 170,
    // width: "100%",
  },
  buttonContTouch: {
    alignItems: "center",
    width: "100%",
    // flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    // left: 40,
  },
});
