import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import img from "../../assets/code.png";
import module from "../common/Button";
const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.container_one}>
        <Text style={styles.welText}>Welcome to</Text>
        {/* <Text style={styles.welText_inner}>CodeX</Text> */}
      </View>
      <View style={styles.container_two}>
        <Image style={styles.welImage} source={img} />
      </View>
      <View style={styles.container_three}>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("login")}
        >
          Login
        </Text>
        <Text
          style={styles.button}
          onPress={() => navigation.navigate("signup")}
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#222",
    paddingTop: 170,
    width: "100%",
  },
  container_one: {
    margin: 5,
    backgroundColor: "#222",
    borderRadius: 15,
  },

  welText: {
    fontSize: 50,
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  welText_inner: {
    fontSize: 80,
    color: "blue",
    textAlign: "center",
    padding: 10,
  },
  container_two: {
    width: "100%",
    height: "20%",
    backgroundColor: "#eee",
    position: "relative",
    borderRadius: 15,
    // alignItems: "left",
  },

  welImage: {
    width: 350,
    height: 60,
    position: "absolute",
    top: 50,
    left: 25,
    borderRadius: 14,
  },
  container_three: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row",
    paddingTop: 80,
    // height: 12,
  },
  button: {
    fontSize: 20,
    color: "white",
    backgroundColor: module.button.backgoundColor,
    padding: 15,
    marginTop: 30,
    marginRight: 30,
    borderRadius: 15,
  },
});
