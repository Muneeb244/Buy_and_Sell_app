import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import * as permission from "expo-permissions";
import { Camera, CameraType } from "expo-camera";

function ImageInput({ imageUri, onChangeImage }) {
  // useEffect(() => {
  //     Permission();
  // }, [])

  // const Permission = async () => {
  //     const result = await permission.askAsync(
  //         permission.CAMERA
  //     )
  //     console.log(result.granted)
  //     if (!result.granted) {
  //       alert("Please grant permission to access media");
  //     }
  //     // const variable = await ImagePicker.requestCameraPermissionsAsync();
  //     // if (!variable.granted) {
  //     //   alert("Please grant persmissontto proceed");
  //     // }
  //   };

  const handlePress = () => {
    if (!imageUri) {
      selectImage();
    } else
      Alert.alert("Delete", "Do you want to delete this image", [
        { text: "Yes", onPress: () => onChangeImage(imageUri) },
        { text: "No" },
      ]);
  };

  const selectImage = async () => {
    try {
      const imgSelect = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!imgSelect.canceled) {
        onChangeImage(imgSelect.assets[0].uri);
      }
    } catch (error) {
      console.log("Error loading image --> ", error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => handlePress()}>
      <View style={styles.container}>
        {!imageUri && (
          <MaterialCommunityIcons name="camera" size={70} color={"gray"} />
        )}

        {imageUri && <Image source={{ uri: imageUri }} style={styles.img} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8F8F8",
    borderRadius: 20,
    overflow: "hidden",
  },
  img: {
    width: "100%",
    height: "100%",
  },
});

export default ImageInput;
