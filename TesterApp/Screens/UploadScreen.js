import { View, Text, StyleSheet, Modal } from "react-native";
import { useEffect, useState } from "react";
import * as React from "react";

import * as Progress from "react-native-progress";
import LottieView from "lottie-react-native";

export default function uploadScreen({onDone, progress = 0, visible = false }) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        {progress < 1 ? (
          <Progress.Bar progress={progress} width={200} color={"red"} />
        ) : (
          <LottieView
            onAnimationFinish={onDone}
            autoPlay
            loop={false}
            source={require('../../components/done.json')}
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  }
});
