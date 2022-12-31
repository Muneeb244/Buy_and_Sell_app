import React, { useEffect } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Icon from "../../components/Icon";
import ListItem from "../../components/ListItem";
import useAuth from "../../auth/useAuth";

function AccountScreen({ navigation }) {
  let { user, logout } = useAuth();
  if(typeof(user) === "string"){
    user = JSON.parse(user);
  }
  const menuItems = [
    {
      id: 1,
      title: "My Listings",
      icon: {
        name: "format-list-bulleted",
        backgroundColor: "red",
      },
    },
    {
      id: 2,
      title: "My Messages",
      icon: {
        name: "email",
        backgroundColor: "#228B22",
      },
      targetScreen: "Messages",
    },
  ];


  return (
    <View style={styles.screen}>
      <View style={styles.info}>
        <ListItem
          title={user.name}
          subtitle={user.email}
          image={require("../assetsImage/muneeb.jpg")}
        />
      </View>

      <View style={styles.lst}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.id.toString()}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundcolor={item.icon.backgroundColor}
                />
              }
              onPress={() => navigation.navigate(item.targetScreen)}
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundcolor="#ffe66d" />}
        onPress={logout}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "#f8f4f4",
  },
  info: {
    marginBottom: 50,
  },
  lst: {
    marginBottom: 50,
  },
});

export default AccountScreen;
