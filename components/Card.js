import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

function Card({ image, title, price }) {
  return (
    <View style={styles.cardContainer}>
      <Image source={image} style={styles.img} />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    width: "100%",
    height: "40%",
    backgroundColor: "#F8F4F4",
    overflow: "hidden",
    borderRadius: 15,
    // marginTop:30

  },
  img: {
    width: "100%",
    height: "73%",
    overflow: "hidden",
    borderTopEndRadius: 200,
  },
  title: {
    fontSize: 18,
    marginVertical: 3,
  },
  price: {
    fontSize: 18,
    color: "#228B22",
    fontWeight: "bold",
  },
  detailContainer: {
    padding: 10,
  },
});

export default Card;
