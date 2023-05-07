import React, { useState, useEffect } from "react";
import { TouchableOpacity } from "react-native";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Button,
} from "react-native";
import MainScreen from "../screens/Mainscreen";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  useEffect(() => {
    //const unsubscribe = auth.onAuthStateChanged((authUser) => {
    //  if (authUser) {
    //    navigation.replace("Home");
    //  }
    //});
    //return unsubscribe;
  }, []);

  return (
    <KeyboardAvoidingView
      style={{
        backgroundColor: "white",
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={{ marginVertical: 17 }}>
        <Image
          source={require("../assets/logo.jpg")}
          style={{
            width: 200,
            height: 200,
            borderRadius: 100,
          }}
        />
      </View>
      <View style={{ paddingVertical: 3 }}>
        <TextInput
          placeholder="Enter your Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={{
            paddingHorizontal: 30,
            borderBottomColor: "black",
            padding: 10,
            borderBottomWidth: 2,
            backgroundColor: "white",
            borderColor: "white",
            color: "black",
            fontWeight: "500",
          }}
        />
      </View>
      <View style={{ paddingVertical: 3 }}>
        <TextInput
          placeholder="Password"
          value={Password}
          onChangeText={(text) => setPassword(text)}
          style={{
            paddingHorizontal: 30,
            padding: 10,
            borderBottomWidth: 2,
            color: "black",
            fontWeight: "500",
          }}
          secureTextEntry
        />
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Home")}
        style={{ marginVertical: 5 }}
      >
        <Text
          style={{
            backgroundColor: "black",
            color: "white",
            padding: 15,
            fontWeight: "bold",
            paddingHorizontal: 50,
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Back to Login")}
        style={{ marginVertical: 2 }}
      >
        <Text
          style={{
            backgroundColor: "#ede7f6",
            color: "black",
            padding: 15,
            fontWeight: "800",
            paddingHorizontal: 40,
          }}
        >
          Register
        </Text>
      </TouchableOpacity>
      <View style={{ marginVertical: 100 }} />
    </KeyboardAvoidingView>
  );
}
