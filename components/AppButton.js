import { Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

function AppButton({title, onPress, bgcolor, BtnStyle}) {
  return(
  <TouchableOpacity onPress={onPress} style={[ BtnStyle, {backgroundColor: bgcolor}]}>
      <Text style={styles.text} onPress={onPress}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
    // backgroundColor: '#228B22',
  },
  text: {
    textAlign: 'center',
    color: "#fff",
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;