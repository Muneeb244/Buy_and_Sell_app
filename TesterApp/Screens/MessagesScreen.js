import { React, useState } from "react";
import { View, FlatList } from "react-native";

import Card from "../../components/Card";
import ListItem from "../../components/ListItem";
import ListItemDeleteAction from "../../components/ListItemDeleteAction";


function MessagesScreen(props) {
  const data = [
    {
      id: "1",
      name: "fbajbfjabfjhs jadsfbalsdhbf alsdbfasjdbf asdbfjabsldf;kn;ka oisdj;foiad oiads;nfaoksdnfo",
      description: "fbajbfjabfjhs jadsfbalsdhbf alsdbfasjdbf asdbfjabsldf;kn;ka oisdj;foiad oiads;nfaoksdnfo",
      image: require("../assetsImage/muneeb.jpg"),
    },
    {
      id: "2",
      name: "t2",
      description: "d2",
      image: require("../assetsImage/muneeb.jpg"),
    },
    {
      id: "3",
      name: "t3",
      description: "d3",
      image: require("../assetsImage/muneeb.jpg"),
    },
  ];

  const [prevData, setData] = useState(data);
  const [refreshing, setRefreshing] = useState(false);

  const deleteItem = (temp) => {
    setData(prevData.filter((m) => m.id != temp.id));
  };

  return (
    <View>
      <FlatList
        data={prevData}
        keyExtractor={(prevData) => prevData.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            image={item.image}
            title={item.name}
            onPress={() => {}}
            subtitle={item.description}
            numberOfLines={1}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => deleteItem(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => (
          <View
            style={{ width: "100%", height: 2, backgroundColor: "#f8f4f4" }}
          />
        )}
        refreshing={refreshing}
        onRefresh={() => {
          setData(data);
        }}
      />
    </View>
  );
}

export default MessagesScreen;
