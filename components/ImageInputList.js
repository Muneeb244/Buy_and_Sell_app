import React, { useRef } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import ImageInput from "./ImageInput";

function ImageInputList({ imgUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();

  return (
    <ScrollView
      horizontal
      ref={scrollView}
      onContentSizeChange={() => scrollView.current.scrollToEnd()}
    >
      <View style={styles.container}>
        {imgUris.map((uri) => (
          <View key={uri} style={styles.image}>
            <ImageInput
              imageUri={uri}
              onChangeImage={(uri) => onRemoveImage(uri)}
            />
          </View>
        ))}
        <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  image: {
    marginRight: 7,
  },
});

export default ImageInputList;
