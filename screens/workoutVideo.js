import { View, Text, Image } from "react-native";
import React from "react";
import { ScrollView } from "react-native";
import { ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import muscle from "../utils/muscle";
import VideoScreen from "../components/videoscreen";

const SecondBackground = () => {
  return (
    <View
      style={{
        paddingVertical: 10,
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 20,
        borderTopLeftRadius: 10,
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 23,
          fontWeight: "700",
        }}
      >
        Full Body Workout
      </Text>
      <Text
        style={{
          color: "lightgreen",
          marginVertical: 10,
          textTransform: "capitalize",
        }}
      >
        excersise 1 out of 10
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
        backgroundColor: "#212121",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          borderRadius: 10,
          flexDirection: "row",
          //justifyContent:"space-between"
        }}
      >
        <View style={{}}>
          <Image
            source={require("../assets/first1.jpg")}
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            Bench Press
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            set 1 . 12 Reps
          </Text>
        </View>
      </View>
      <TouchableOpacity style={{}}>
        <AntDesign
          name="playcircleo"
          size={24}
          color="white"
          style={{
            marginTop: 10,
            borderColor: "black",
            borderWidth: 4,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const ForthNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#212121",
        marginHorizontal: 30,
        padding: 15,
        marginVertical: 20,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          borderRadius: 10,
          flexDirection: "row",
          //justifyContent:"space-between"
        }}
      >
        <View style={{}}>
          <Image
            source={require("../assets/first1.jpg")}
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            Overhead Press
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            set 2 . 12 Reps
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <AntDesign
          name="playcircleo"
          size={24}
          color="white"
          style={{
            marginTop: 10,
            borderColor: "black",
            borderWidth: 4,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const FifthNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#212121",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
      }}
    >
      <View
        style={{
          borderRadius: 10,
          flexDirection: "row",
          //justifyContent:"space-between"
        }}
      >
        <View style={{}}>
          <Image
            source={require("../assets/first1.jpg")}
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            Back Squat
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            set 3 . 12 Reps
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <AntDesign
          name="playcircleo"
          size={24}
          color="white"
          style={{
            marginTop: 10,
            borderColor: "black",
            borderWidth: 4,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const SixthNavigation = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#212121",
        marginHorizontal: 30,
        padding: 15,
        borderRadius: 10,
        marginVertical: 19,
      }}
    >
      <View
        style={{
          borderRadius: 10,
          flexDirection: "row",
          //justifyContent:"space-between"
        }}
      >
        <View style={{}}>
          <Image
            source={require("../assets/first1.jpg")}
            style={{
              width: 60,
              height: 60,
              resizeMode: "cover",
            }}
          />
        </View>
        <View
          style={{
            marginHorizontal: 10,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: 23,
            }}
          >
            Front Squat
          </Text>
          <Text
            style={{
              color: "gray",
              fontWeight: "bold",
              marginTop: 7,
            }}
          >
            set 3 . 12 Reps
          </Text>
        </View>
      </View>
      <TouchableOpacity>
        <AntDesign
          name="playcircleo"
          size={24}
          color="white"
          style={{
            marginTop: 10,
            borderColor: "black",
            borderWidth: 4,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

const BottomBotton = () => {
  return (
    <View>
      <TouchableOpacity
        style={{ marginTop: 10, paddingHorizontal: 30, alignItems: "center" }}
      >
        <Text
          style={{
            backgroundColor: "#ede7f6",
            paddingHorizontal: 60,
            padding: 10,
            color: "black",
            fontWeight: "bold",
            fontSize: 21,
          }}
        >
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default function WorkoutScreen({ navigation }) {
  const data = muscle;

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "black" }}>
      <View>
        <ImageBackground
          source={require("../assets/first1.jpg")}
          style={{ width: "100%", height: 350 }}
        >
          <View
            style={{ justifyContent: "space-between", flexDirection: "row" }}
          >
            <TouchableOpacity
              style={{ margin: 20 }}
              onPress={() => navigation.navigate("Main")}
            >
              <Ionicons
                name="arrow-back"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#212121",
                  padding: 10,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 20 }}>
              <Entypo
                name="dots-three-vertical"
                size={24}
                color="white"
                style={{
                  backgroundColor: "#212121",
                  padding: 10,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 100,
            }}
          >
            <Text style={{ color: "white" }}>hello</Text>
          </View>
        </ImageBackground>
      </View>
      <SecondBackground />
      <ThirdNavigation />
      {data.map((item, index) => {
        return <VideoScreen key={index} item={item} />;
      })}
      {/* <ForthNavigation /> */}
      {/* <FifthNavigation /> */}
      {/* <SixthNavigation /> */}
      <BottomBotton />
    </ScrollView>
  );
}
