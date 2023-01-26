import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import img from "../../assets/code.png";
import module from "../common/formcss";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onsubmit = () => {
    if (data.email == "" || data.password == "") {
      console.log("empty fields");
      return;
    }
    console.log(data);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        if (json.error) {
        } else {
          console.log("success");
          Navigation.navigate("Home");
          alert("Logged in successfully");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_two}>
        <Image style={styles.welImage} source={img} />
      </View>
      <View style={styles.container_form}>
        <ScrollView>
          <Text style={module.head1}>Login</Text>
          <Text style={module.head2}>Sign In to continue</Text>
          <View style={module.formgroup}>
            <Text style={module.label}>Email</Text>
            <TextInput
              placeholder="Your Email"
              style={module.input}
              onChangeText={(text) => setData({ ...data, email: text })}
            />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Password</Text>
            <TextInput
              placeholder="Your Password"
              style={module.input}
              onChangeText={(text) => setData({ ...data, password: text })}
              secureTextEntry={true}
            />
          </View>
          {/* <View style={module.fp}>
          <Text style={module.link}>Forgot Password?</Text>
        </View> */}
          <View style={module.buttonCont}>
            <TouchableOpacity
              onPress={() => onsubmit()}
              style={styles.buttonContTouch}
            >
              <Text style={module.button1}>Login</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#fff",
    // paddingTop: 170,
    width: "100%",
  },
  container_two: {
    width: "100%",
    // height: "50%",
    backgroundColor: "#fff",
    position: "relative",
    // borderRadius: 15,
    height: "50%",
    // paddingTop: 200,
    // alignItems: "left",
  },

  welImage: {
    width: 350,
    height: 60,
    position: "absolute",
    bottom: 150,
    left: 25,
    borderRadius: 14,
  },
  container_form: {
    // flex: 1,
    // justifyContent: "flex-start",
    width: "100%",
    height: "50%",
    paddingTop: 10,
    backgroundColor: "#ccc",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  button1: {
    backgoundColor: "#f50057",
    width: "80%",
    marginHorizontal: 10,
  },
  buttonContTouch: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: 40,
  },
});
