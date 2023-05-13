import { View, Text, useWindowDimensions } from "react-native";
import * as React from "react";
import { WebView } from "react-native-webview";

export default function VideoScreen({ item }) {
  const { width, height } = useWindowDimensions();
  return (
    <WebView
      style={{ width: width, height: width }}
      source={{ uri: "https://expo.dev" }}
    />
  );
}
