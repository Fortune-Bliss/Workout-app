import { View, Text, ImageBackground, Image, SafeAreaView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { ScrollView } from "react-native";

export default function TrainerScreen() {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={{ marginTop: 20, borderRadius: 10, marginHorizontal: 10 }}
    >
      <ImageBackground
        source={require("../assets/profile2.jpg")}
        style={{
          width: 270,
          height: 340,
          alignItems: "Center",
          borderRadius: 50,
          marginHorizontal: 10,
        }}
      >
        <SafeAreaView>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                backgroundColor: "#212121",
                padding: 5,
                borderRadius: 20,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={require("../assets/first2.jpg")}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{ color: "white", fontSize: 19, fontWeight: "bold" }}
                >
                  Bobby Calvin
                </Text>
                <Text style={{ color: "lightgray", fontWeight: "bold" }}>
                  Personal Trainer{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              borderRadius: 10,
              paddingVertical: 9,
              backgroundColor: "#212121",
              marginTop: 180,
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                Full body
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Workout
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontWeight: "bold", color: "lightgray" }}
              >
                24 hrs
              </Text>
            </View>
            <View style={{ paddingRight: 16 }}>
              <MaterialIcons
                name="fitness-center"
                size={24}
                color="lightgreen"
                style={{
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRadius: 10,
                  fontWeight: "600",
                  color: "black",
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/profilepic.jpg")}
        style={{
          width: 270,
          height: 340,
          alignItems: "Center",
          borderRadius: 50,
          marginHorizontal: 10,
        }}
      >
        <SafeAreaView>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                backgroundColor: "#212121",
                padding: 5,
                borderRadius: 20,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={require("../assets/first1.jpg")}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{ color: "white", fontSize: 19, fontWeight: "bold" }}
                >
                  Ibinabo Bliss
                </Text>
                <Text style={{ color: "lightgray", fontWeight: "bold" }}>
                  Personal Trainer{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              borderRadius: 10,
              paddingVertical: 9,
              backgroundColor: "#212121",
              marginTop: 180,
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                Full body
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Workout
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontWeight: "bold", color: "lightgray" }}
              >
                2 Days
              </Text>
            </View>
            <View style={{ paddingRight: 16 }}>
              <MaterialIcons
                name="fitness-center"
                size={24}
                color="lightgreen"
                style={{
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRadius: 10,
                  fontWeight: "600",
                  color: "black",
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/first1.jpg")}
        style={{
          width: 270,
          height: 340,
          alignItems: "Center",
          borderRadius: 50,
          marginHorizontal: 10,
        }}
      >
        <SafeAreaView>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                backgroundColor: "#212121",
                padding: 5,
                borderRadius: 20,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={require("../assets/profile.jpg")}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{ color: "white", fontSize: 19, fontWeight: "bold" }}
                >
                  Paul Mayham
                </Text>
                <Text style={{ color: "lightgray", fontWeight: "bold" }}>
                  Personal Trainer{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              borderRadius: 10,
              paddingVertical: 9,
              backgroundColor: "#212121",
              marginTop: 180,
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                Hips Joint
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Workout
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontWeight: "bold", color: "lightgray" }}
              >
                3 Weeks
              </Text>
            </View>
            <View style={{ paddingRight: 16 }}>
              <MaterialIcons
                name="fitness-center"
                size={24}
                color="lightgreen"
                style={{
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRadius: 10,
                  fontWeight: "600",
                  color: "black",
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <ImageBackground
        source={require("../assets/first2.jpg")}
        style={{
          width: 270,
          height: 340,
          alignItems: "Center",
          borderRadius: 50,
          marginHorizontal: 10,
        }}
      >
        <SafeAreaView>
          <View>
            <View
              style={{
                flexDirection: "row",
                marginTop: 5,
                backgroundColor: "#212121",
                padding: 5,
                borderRadius: 20,
              }}
            >
              <View>
                <Image
                  style={{ width: 50, height: 50, borderRadius: 25 }}
                  source={require("../assets/profilepic.jpg")}
                />
              </View>
              <View style={{ marginHorizontal: 10 }}>
                <Text
                  style={{ color: "white", fontSize: 19, fontWeight: "bold" }}
                >
                  ibiso Bliss
                </Text>
                <Text style={{ color: "lightgray", fontWeight: "bold" }}>
                  Personal Trainer{" "}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              borderRadius: 10,
              paddingVertical: 9,
              backgroundColor: "#212121",
              marginTop: 180,
              justifyContent: "space-between",
            }}
          >
            <View style={{ paddingLeft: 16 }}>
              <Text
                style={{ color: "white", fontSize: 15, fontWeight: "bold" }}
              >
                Full body
              </Text>
              <Text
                style={{ color: "white", fontSize: 20, fontWeight: "bold" }}
              >
                Workout
              </Text>
              <Text
                numberOfLines={2}
                style={{ fontWeight: "bold", color: "lightgray" }}
              >
                7 Days
              </Text>
            </View>
            <View style={{ paddingRight: 16 }}>
              <MaterialIcons
                name="fitness-center"
                size={24}
                color="lightgreen"
                style={{
                  backgroundColor: "lightgreen",
                  padding: 10,
                  borderRadius: 10,
                  fontWeight: "600",
                  color: "black",
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </ScrollView>
  );
}
