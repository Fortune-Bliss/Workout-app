import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import TrainerScreen from "../components/Trainers";
import { ScrollView } from "react-native";
import WorkoutScreen from "./workoutVideo";

const TopNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <View>
          <Image
            style={{ width: 50, height: 50, borderRadius: 25 }}
            source={require("../assets/first1.jpg")}
          />
        </View>
        <View style={{ marginHorizontal: 10 }}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Good Morning{" "}
          </Text>
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Ibinabo Bliss
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 8 }}>
        <Ionicons
          name="notifications-outline"
          size={24}
          color="white"
          style={{ backgroundColor: "grey", padding: 5, borderRadius: 17 }}
        />
      </View>
    </View>
  );
};

const SecondNavigation = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <Text style={{ color: "white", fontSize: 30, fontWeight: "bold" }}>
        You can do better today By achieving your exercise goals
      </Text>
    </View>
  );
};

const ThirdNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        backgroundColor: "#212121",
        padding: 20,
        borderRadius: 25,
      }}
    >
      <View
        style={{
          marginTop: 5,
          // backgroundColor: "lightgreen",
          // padding: 5,
          // borderRadius: 10,
        }}
      >
        <FontAwesome5
          name="running"
          size={24}
          color="white"
          style={{
            backgroundColor: "grey",
            padding: 15,
            borderRadius: 25,
            fontWeight: "600",
          }}
        />
      </View>
      <View style={{}}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "700" }}>
          Running 7 Days
        </Text>
        <Text style={{ color: "grey", marginTop: 10 }}>
          1 Day. 7.65km . 01:12:00{" "}
        </Text>
      </View>
      <View
        style={{
          marginTop: 10,
          // backgroundColor: "grey",
          // padding: 5,
          // borderRadius: 10,
        }}
      >
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
  );
};

const ForthNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
      }}
    >
      <Text style={{ color: "white", fontSize: 24, fontWeight: "500" }}>
        Workout Programs
      </Text>
      <Text style={{ color: "lightgreen", fontWeight: "500", marginTop: 10 }}>
        See all
      </Text>
    </View>
  );
};

const FifhtNavigation = () => {
  return (
    <View>
      {/* <WorkoutScreen />/>*/}
      <TrainerScreen />
    </View>
  );
};

const BottomNaB = () => {
  return <View></View>;
};
export default function MainScreen({ navigation }) {
  const [bgColor, setBgColor] = useState("grey");

  return (
    <ScrollView style={{ padding: 30, flex: 1, backgroundColor: "black" }}>
      <TopNavigation />
      <SecondNavigation />
      <ThirdNavigation />
      <ForthNavigation />
      <FifhtNavigation />
      <BottomNaB />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor: "#212121",
          padding: 25,
          borderRadius: 40,
          marginVertical: 70,
        }}
      >
        <TouchableOpacity onPress={() => setBgColor("grey")}>
          <AntDesign
            name="home"
            size={24}
            style={{
              color: bgColor === "grey" ? "lightgreen" : "white",
              fontWeight: bgColor === "grey" ? "700" : "400",
              fontSize: bgColor === "grey" ? 33 : 25,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPressIn={() => navigation.navigate("Workout")}
          onPress={() => setBgColor("white")}
        >
          <MaterialIcons
            name="fitness-center"
            size={24}
            color="lightgreen"
            style={{
              color: bgColor === "white" ? "lightgreen" : "white",
              fontWeight: bgColor === "white" ? "700" : "400",
              fontSize: bgColor === "white" ? 33 : 25,
            }}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setBgColor("tomato")}>
          <AntDesign
            name="user"
            size={24}
            style={{
              color: bgColor === "tomato" ? "lightgreen" : "white",
              fontWeight: bgColor === "tomato" ? "700" : "400",
              fontSize: bgColor === "tomato" ? 33 : 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
