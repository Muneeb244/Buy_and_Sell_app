import React from "react";
import LottieView from "lottie-react-native";

export default function ActivityIndicator({ visible = false }) {
  if (!visible) return null;
  else
    return (
      <LottieView
        autoPlay
        loop
        source={require("./loading3.json")}
      />
    );
}
