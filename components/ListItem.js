import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
} from "react-native";

import {
  Swipeable,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  image,
  title,
  subtitle,
  IconComponent,
  onPress,
  renderRightActions,
  numberOfLines = 1,
}) {
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={"#f8f4f4"} onPress={onPress}>
          <View style={styles.mainContainer}>
            {IconComponent}
            {image && <Image style={styles.img} source={image} />}
            <View style={styles.detailContainer}>
              <Text style={styles.title} numberOfLines={numberOfLines}>{title}</Text>
              {subtitle && <Text style={styles.subtitle} numberOfLines={numberOfLines+1}>{subtitle}</Text>}
            </View>
            <MaterialCommunityIcons name="chevron-right" size={25} />
          </View>
        </TouchableHighlight>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 5,
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 40,
    marginRight: 10,
  },
  detailContainer: {
    width: "100%",
    height: 70,
    justifyContent: "center",
    marginLeft: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    color: "#808080",
    fontSize: 16,
  },
});

export default ListItem;
