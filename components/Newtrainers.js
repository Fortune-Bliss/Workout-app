import { View, Text } from "react-native";
import React from "react";
import { ImageBackground } from "react-native";

const TabNavigation = () => {
  return (
    <View>
      <ImageBackground></ImageBackground>
      <View>
        <Text>hello</Text>
      </View>
    </View>
  );
};

export default function NewTrainer() {
  return (
    <View>
      <TabNavigation />
    </View>
  );
}
