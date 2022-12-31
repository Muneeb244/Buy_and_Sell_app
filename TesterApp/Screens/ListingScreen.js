import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";

import Card from "../../components/Card";
import Card2 from "../../components/Card2";
import ListItem from "../../components/ListItem";
import routes from "../../navigation/routes";
import listingAPI from "../../api/listings";
import AppButton from "../../components/AppButton";
import ActivityIndicator from "../../components/ActivityIndicator";
import useApi from "../../hooks/useApi";

function ListingScreen({ navigation }) {
  const {data: listings , error: listingError, loading, request: loadListings} = useApi(listingAPI.getListings);

  // const [listings, setData] = useState([]);
  // const [listingError, setListingError] = useState(false);
  // const [loading, isLoading] = useState(true);

  // const request = async () => {
  //   console.log("request");
  //   isLoading(true);
  //   const response = await listingAPI.getListings();
  //   isLoading(false);
  //   if (!response.ok) {
  //     return setListingError(true);
  //   }
  //   3;
  //   setListingError(false);
  //   setData(response.data);
  // };
  useEffect(() => {
    loadListings();
  }, []);

  return (
    <View style={styles.container}>
      {listingError && (
        <>
          <Text style={styles.text}>Couldn't retrieve listings.</Text>
          <AppButton
            bgcolor={"red"}
            title="retry"
            onPress={loadListings()}
            BtnStyle={styles.btn}
          />
        </>
      )}

      {loading && <ActivityIndicator visible={loading} />}

      <FlatList
        style={styles.list}
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card2
            title={item.title}
            subTitle={"$" + item.price}
            imageURL={item.images[0].url}
            onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
          />
          // <Card
          //   title={item.title}
          //   price={item.price}
          //   image={item.image}
          // />
        )}
        // ItemSeparatorComponent={() => (
        //   <View
        //     style={{ width: "100%", height: 2, backgroundColor: "#F8F4F4" }}
        //   />
        // )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    padding: 10,
  },
  list: {
    width: "100%",
    height: "10%",
    // flex: 1,
    // backgroundColor: 'red',
  },
  text: {
    textAlign: "center",
  },
  btn: {
    padding: 10,
    marginTop: 20,
    borderRadius: 30,
  },
});

export default ListingScreen;
