import React from "react";
import { StyleSheet, ImageBackground, View } from "react-native";

import {MaterialCommunityIcons} from '@expo/vector-icons';

function Temp(props) {
  return (
    <ImageBackground
      style={styles.image}
      source={require("../assetsImage/chair.jpg")}
      resizeMode="contain"
    >
      <View style={styles.btns}>
        <View style={styles.back}>
          <MaterialCommunityIcons name="close" color="#fff" size={30}/>
        </View>
        <View style={styles.del}>
        <MaterialCommunityIcons name="trash-can-outline" color="#fff" size={30}/>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  back: {
    // width: 50,
    // height: 50,
    // backgroundColor: "red",
    marginLeft: 20,
  },
  del: {
    // width: 50,
    // height: 50,
    // backgroundColor: "skyblue",
    marginRight: 20,
  },
  btns: {
    // flex: 1,
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Temp;
