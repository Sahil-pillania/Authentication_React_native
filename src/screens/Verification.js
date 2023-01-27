import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";
import module from "../common/formcss";

const Verification = ({ navigation, route }) => {
  const { userData } = route.params;
  console.log(userData);
  console.log("from verification page : ", userData[0]?.code);
  return (
    <View style={styles.container}>
      <StatusBar />
      <Text style={module.head1}>Verification page</Text>
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

export default Verification;

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
