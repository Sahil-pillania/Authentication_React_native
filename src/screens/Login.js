import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import img from "../../assets/code.png";
import module from "../common/Button";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_two}>
        <Image style={styles.welImage} source={img} />
      </View>
      <View style={styles.container_form}></View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    // paddingTop: 170,
    width: "100%",
  },
  container_two: {
    width: "100%",
    // height: "50%",
    backgroundColor: "#fff",
    position: "relative",
    borderRadius: 15,
    height: "50%",
    // paddingTop: 200,
    // alignItems: "left",
  },

  welImage: {
    width: 350,
    height: 60,
    position: "absolute",
    bottom: 180,
    left: 25,
    borderRadius: 14,
  },
  container_form: {
    width: "100%",
    height: "50%",

    backgroundColor: "red",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
