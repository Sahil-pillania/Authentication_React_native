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

const Signup = ({ navigation }) => {
  const [formdata, setFormdata] = useState({
    name: "",
    email: "",
    dob: "",
    password: "",
    c_password: "",
    address: "",
  });

  const [errorMsg, setErrorMsg] = useState(null);

  // const onChange = (event) => {
  //   let name = event.target.name;
  //   let value = event.target.value;

  //   setFormdata({ ...formdata, [name]: value });
  // };
  const onSubmit = async () => {
    setErrorMsg(null);
    // console.log(formdata);
    if (
      formdata.name == "" ||
      formdata.email === "" ||
      formdata.dob == "" ||
      formdata.password == "" ||
      formdata.c_password == "" ||
      formdata.address == ""
    ) {
      console.log(formdata.password, formdata.c_password);
      setErrorMsg("All fields must be filled.");
      return;
    }
    if (formdata.password != formdata.c_password) {
      // console.log("else if");
      setErrorMsg("Password and confirm password must me same.");
      return;
    } else {
      try {
        console.log("Fetching data...");
        fetch("http://192.168.41.17:3000/verify", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        })
          .then((response) => response.json())
          .then((data) => {
            // return json.movies;
            console.log(data);
            if (
              (data.message = "Verification code sent to your email address")
            ) {
              alert("Verification code sent to your email address.");

              navigation.navigate("verification", { userData: data.user });
            } else {
              console.log(data.error);
            }
          })
          .catch((error) => {
            console.error(error);
            setErrorMsg(error.message);
          });
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_two}>
        <Image style={styles.welImage} source={img} />
      </View>
      <View style={styles.container_form}>
        <ScrollView>
          <Text style={module.head1}>Create a New Account</Text>
          <Text style={module.head2}>Sign up to continue</Text>
          {errorMsg ? (
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                padding: 10,
                margin: 10,
                width: "80%",
                textAlign: "center",
                fontSize: 16,
                backgroundColor: "red",
                borderRadius: 20,
              }}
            >
              {errorMsg}
            </Text>
          ) : null}

          <View style={module.formgroup}>
            <Text style={module.label}>Name</Text>
            <TextInput
              placeholder="Your Name"
              style={module.input}
              onChangeText={(text) => setFormdata({ ...formdata, name: text })}
              // onChangeText={onChange}
              // onChangeText={(data) => setName(data)}
              //name="name"
              // value={formdata.name}
            />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Email</Text>
            <TextInput
              placeholder="Your Email"
              style={module.input}
              onChangeText={(text) => setFormdata({ ...formdata, email: text })}
              //name="email"
              // value={formdata.email}
            />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Date of Birth</Text>
            <TextInput
              placeholder="dd/mm/yyyy"
              style={module.input}
              onChangeText={(text) => setFormdata({ ...formdata, dob: text })}
              //name="dob"
              // value={formdata.dob}
            />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Your Address</Text>
            <TextInput
              placeholder="Your full address"
              style={module.input1}
              onChangeText={(text) =>
                setFormdata({ ...formdata, address: text })
              }
              //name="address"
              // value={formdata.address}
            />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Password</Text>
            <TextInput
              placeholder="Your Password"
              style={module.input}
              secureTextEntry={true}
              onChangeText={(text) =>
                setFormdata({ ...formdata, password: text })
              }
              //name="password"
              // value={formdata.password}
            />
          </View>
          <View style={module.formgroup}>
            <Text style={module.label}>Confirm Password</Text>
            <TextInput
              placeholder="Your confirm Password"
              style={module.input}
              secureTextEntry={true}
              onChangeText={(text) =>
                setFormdata({ ...formdata, c_password: text })
              }
              //name="c_password"
              // value={formdata.c_password}
            />
          </View>
          {/* <View style={module.fp}>
          <Text style={module.link}>Forgot Password?</Text>
        </View> */}
          <View style={module.buttonCont}>
            <TouchableOpacity
              onPress={() => onSubmit()}
              style={styles.buttonContTouch}
            >
              <Text style={module.button1}> Send OTP</Text>
            </TouchableOpacity>
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
  buttonContTouch: {
    alignItems: "center",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    left: 40,
  },
});
