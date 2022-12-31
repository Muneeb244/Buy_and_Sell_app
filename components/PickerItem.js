import React from "react";
import { View, StyleSheet, Text } from "react-native";

function PickerItem({ item, onPress }) {
  return (
          <Text style={styles.text} onPress={onPress}>{item.label}</Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default PickerItem;
