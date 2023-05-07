import { View, Text, TextInput, SafeAreaView, Image } from "react-native";
import React, { useState } from "react";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { KeyboardAvoidingView } from "react-native";

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ImageBackground
      source={require("../assets/fitness.jpg")}
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <KeyboardAvoidingView style={{ backgroundColor: "black", padding: 60 }}>
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 28,
              fontWeight: "600",
            }}
          >
            FILL IN YOUR DETAILS
          </Text>
        </View>
        <TextInput
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
          style={{
            padding: 10,
            // backgroundColor: "grey",
            borderWidth: 2,
            borderColor: "grey",
            marginVertical: 5,
            flex: 1,
            color: "white",
            fontWeight: "300",
            fontStyle: "italic",
          }}
        />
        <TextInput
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
          style={{
            padding: 10,
            // backgroundColor: "grey",
            borderWidth: 2,
            borderColor: "grey",
            marginVertical: 5,
            flex: 1,
            color: "white",
            fontWeight: "300",
            fontStyle: "italic",
          }}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholder="Password"
          style={{
            padding: 10,
            // backgroundColor: "grey",
            borderWidth: 2,
            borderColor: "grey",
            marginVertical: 5,
            flex: 1,
            color: "white",
            fontWeight: "300",
            fontStyle: "italic",
          }}
        />

        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          placeholder="Confirm password"
          style={{
            padding: 10,
            // backgroundColor: "grey",
            borderWidth: 2,
            borderColor: "grey",
            marginVertical: 5,
            flex: 1,
            color: "white",
            fontWeight: "300",
            fontStyle: "italic",
          }}
        />
        <TouchableOpacity
          style={{
            alignItems: "center",
            // justifyContent: "center",
            marginTop: 17,
          }}
          onPress={() => navigation.navigate("Main")}
        >
          <Text
            style={{
              backgroundColor: "tomato",
              padding: 10,
              borderRadius: 20,
              color: "black",
              fontWeight: "bold",
              paddingHorizontal: 50,
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}
