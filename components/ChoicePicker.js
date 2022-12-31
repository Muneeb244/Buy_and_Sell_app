import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Modal,
  Button,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlatList } from "react-native-gesture-handler";

import PickerItem from "./PickerItem";
import ListItem from "./ListItem";

// <ChoicePicker
//         name="apps"
//         size={20}
//         placeholder={"Category"}
//         selectedItem={category}
//         onSelectItem={item => {setCategory(item); console.log("here --> " + item.label)}}
//         list={categories}
//       />

function ChoicePicker({
  name,
  size,
  placeholder,
  list,
  selectedItem,
  onSelectItem,
  numberOfColumns = 1,
  PickerItemComponent = PickerItem,
}) {
  const [visBool, setVisBool] = useState(false);

  return (
    <React.Fragment>
      <TouchableWithoutFeedback
        underlayColor="#f1c40f"
        onPress={() => {
          setVisBool(true);
        }}
        style={{ backgroundColor: "red" }}
      >
        <View style={styles.container}>
          <MaterialCommunityIcons
            name={name}
            size={size}
            style={{ marginRight: 7 }}
          />
          <Text style={{ flex: 1, fontSize: 20 }}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons name="chevron-down" size={size} />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={visBool}
        animationType="slide"
      >
        <Button title="Close" onPress={() => setVisBool(false)} />
        <FlatList
          // style={{backgroundColor: 'red'}}
          data={list}
          keyExtractor={(item) => item.value.toString()}
          numColumns={numberOfColumns}
          renderItem={({ item }) => {
            return (
              <PickerItemComponent
                item={item}
                label={item.label}
                onPress={() => {
                  setVisBool(false);
                  onSelectItem(item);
                }}
              />
              
              // <Text style={styles.listData} onPress={() => console.log(item)}>{item.label}</Text>
            );
          }}
        />
      </Modal>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#ccc",
    borderRadius: 25,
    padding: 10,
    alignItems: "center",
  },
  listData: {
    fontSize: 20,
    padding: 10,
  },
});

export default ChoicePicker;
