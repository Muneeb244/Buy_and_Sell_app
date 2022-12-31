import React from "react";
import { View, StyleSheet, Text } from "react-native";

import Icon from "./Icon";

function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <Icon name={item.name} backgroundcolor={item.backgroundcolor} size={80} />
      <Text style={styles.text} onPress={onPress}>
        {item.label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 2,
    paddingVertical: 15,
    alignItems: "center",
    width: '33%'
  },
  text: {
    fontSize: 20,
    padding: 10,
  },
});

export default CategoryPickerItem;
