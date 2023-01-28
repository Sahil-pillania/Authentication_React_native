import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import img from "../../assets/code.png";
import module from "../common/formcss";

const Verification = ({ navigation, route }) => {
  const { userData } = route.params;
  // console.log(userData);
  // console.log("from verification page : ", userData[0]?.code);

  const [userCode, setUserCode] = useState("XXXX");
  const [actualCode, setActualCode] = useState("");
  const [error, setError] = useState(null);
  // console.log(data);

  useEffect(() => {
    setActualCode(userData[0]?.code);
  }, []);

  const onsubmit = () => {
    // console.log(data);
    if (userCode == "XXXX" || actualCode == "") {
      setError("Please enter a valid code.");
      return;
    } else if (userCode != actualCode) {
      console.log("Please enter a valid code.");
    } else if (userCode == actualCode) {
      console.log("Correct code");
      const fData = {
        email: userData[0].email,
        password: userData[0].password,
        name: userData[0].name,
        address: userData[0].address,
        dob: userData[0].dob,
      };

      fetch("http://192.168.41.17:3000/signup", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fData),
      })
        .then((response) => response.json())
        .then((data) => {
          // return json.movies;
          console.log(data);
          if (data.data == "User created successfully.") {
            alert(data.data);
            navigation.navigate("login");
          } else {
            alert("Something went wrong! Try again later");
          }
        });
    }
    // setError("error occured");
  };
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.container_two}>
        <Image style={styles.welImage} source={img} />
      </View>
      <View style={styles.container_form}>
        <ScrollView>
          <Text style={module.head1}>Verification</Text>
          <Text style={module.head2}>Code has been sent to your Email</Text>
          {error != null ? <Text style={styles.warning}>{error}</Text> : null}

          <View style={module.formgroup}>
            <Text style={module.label}>Verify your OTP to continue</Text>
            <TextInput
              placeholder="Enter 6 digit verification code"
              style={module.input}
              onChangeText={(text) => setUserCode(text)}
              onPressIn={() => setError(null)}
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
              <Text style={module.button1}>Verify</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Verification;

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
  warning: {
    backgroundColor: "gray",
    color: "red",
    textAlign: "center",
    fontSize: 21,
    width: "80%",
    borderRadius: 15,
    alignSelf: "center",
    padding: 5,
    fontWeight: "bold",
  },
});
