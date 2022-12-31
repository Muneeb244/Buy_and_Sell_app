import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import ListItem from "../../components/ListItem";

function ListDetailScreen({ route }) {
  const listing = route.params;
  console.log(listing);
  return (
    <View style={styles.mainContainer}>
      <Image
        style={styles.img}
        source={{uri: listing.images[0].url}}
      />
      <View style={styles.detailContainer}>
        <Text style={styles.title}>{listing.title}</Text>
        <Text style={styles.price}>${listing.price}</Text>
      </View>
      <View style={styles.listItem}>
      <ListItem image={require("../assetsImage/muneeb.jpg")} title="Muneeb Ahmad" subtitle="5 Listings"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: 350,
    backgroundColor: "grey",
  },
  title: {
    fontSize: 25,
    marginVertical: 3,
  },
  price: {
    fontSize: 20,
    color: "#228B22",
    fontWeight: "bold",
  },
  detailContainer: {
    padding: 10,
  },
  listItem: {
    marginVertical: 30,
  }
});

export default ListDetailScreen;
