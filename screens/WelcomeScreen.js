import { View, Text, SafeAreaView, ImageBackground } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

const TopNavigation = () => {
  return <View></View>;
};

export default function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      source={require("../assets/profile2.jpg")}
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <View
        style={{
          // flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
          marginTop: 400,
          //color: "white",
          borderRadius: 10,
          padding: 30,
          paddingVertical: 30,
        }}
      >
        <Text
          style={{
            fontSize: 23,
            fontWeight: "500",
            color: "white",
          }}
        >
          Increase your target to
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "400",
            marginVertical: 5,
            color: "white",
          }}
        >
          be healthier to{" "}
        </Text>
        <Text
          style={{
            fontSize: 23,
            fontWeight: "400",
            color: "white",
          }}
        >
          continue exercising
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textTransform: "capitalize",
            marginTop: 20,
            color: "grey",
          }}
        >
          this application can improve yourself
        </Text>
        <Text
          style={{
            fontWeight: "bold",
            textTransform: "capitalize",
            marginTop: 8,
            color: "grey",
          }}
        >
          to have a healthier lifestyle by exercising
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "Center",
            marginTop: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("SignUp")}
            style={{
              backgroundColor: "yellow",
              marginTop: 10,
              borderRadius: 30,
            }}
          >
            <Text
              style={{ paddingHorizontal: 50, padding: 10, fontWeight: "bold" }}
            >
              Get Started{" "}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 10, flexDirection: "row" }}>
          <Text style={{ color: "grey", fontWeight: "bold" }}>
            Already have a account ?
          </Text>
          <TouchableOpacity
            style={{ color: "tomato", fontWeight: "bold" }}
            onPress={() => navigation.navigate("Login")}
          >
            <Text
              style={{
                color: "tomato",
                fontWeight: "bold",
                marginHorizontal: 10,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
