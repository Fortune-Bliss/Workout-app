import { SafeAreaView } from "react-native";
import AuthNavigation from "./navigations/Authnavigation";
import React from "react";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AuthNavigation />
    </SafeAreaView>
  );
}
