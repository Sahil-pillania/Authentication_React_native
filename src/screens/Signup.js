import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  ScrollView,
} from "react-native";
import React from "react";
import img from "../../assets/code.png";
import module from "../common/formcss";

const Signup = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container_two}>
        <Image style={styles.welImage} source={img} />
      </View>
      <View style={styles.container_form}>
        <ScrollView>
          <Text style={module.head1}>Create a New Account</Text>
          <Text style={module.head2}>Sign up to continue</Text>

          <View style={module.formgroup}>
            <Text style={module.label}>Name</Text>
            <TextInput placeholder="Your Name" style={module.input} />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Email</Text>
            <TextInput placeholder="Your Email" style={module.input} />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Date of Birth</Text>
            <TextInput placeholder="dd/mm/yyyy" style={module.input} />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Your Address</Text>
            <TextInput placeholder="Your full address" style={module.input1} />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Password</Text>
            <TextInput placeholder="Your Password" style={module.input} />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Confirm Password</Text>
            <TextInput
              placeholder="Your confirm Password"
              style={module.input}
            />
          </View>
          {/* <View style={module.fp}>
          <Text style={module.link}>Forgot Password?</Text>
        </View> */}
          <View style={module.buttonCont}>
            <Text style={module.button1}>Login</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
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
    height: "15%",
    // paddingTop: 200,
    // alignItems: "left",
  },

  welImage: {
    width: 350,
    height: 60,
    position: "absolute",
    bottom: 30,
    left: 25,
    borderRadius: 14,
  },
  container_form: {
    // flex: 1,
    // justifyContent: "flex-start",
    width: "100%",
    height: "85%",
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
});
