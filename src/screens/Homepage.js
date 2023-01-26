import { StyleSheet, Text, View } from "react-native";
import React from "react";
import module from "../common/formcss";

const Homepage = ({ navigation }) => {
  return (
    <View>
      <Text style={module.head1}>Homepage</Text>
      <TouchableOpacity style={styles.buttonContTouch}>
        <Text
          style={module.button1}
          onPress={() => {
            navigation.navigate("login");
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Homepage;

const styles = StyleSheet.create({
  buttonContTouch: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: 40,
  },
});
