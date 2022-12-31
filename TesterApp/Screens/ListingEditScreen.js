import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";
import * as location from "expo-location";
// import Geolocation from 'react-native-geolocation-service';

import AppForm from "../../components/AppForm";
import AppFormField from "../../components/AppFormField";
import AppFormPicker from "../../components/AppFormPicker";
import AppTextInput from "../../components/AppTextInput";
import SubmitButton from "../../components/SubmitButton";
import CategoryPickerItem from "../../components/CategoryPickerItem";
import FormImagePicker from "../../components/FormImagePicker";
import useLocation from "../../hooks/useLocation";
import listingsApi from "../../api/listings";
import UploadScreen from "./UploadScreen";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "PLease select at least one image"),
});

const categories = [
  {
    backgroundcolor: "#fc5c65",
    name: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundcolor: "#fd9644",
    name: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundcolor: "#fed330",
    name: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundcolor: "#26de81",
    name: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundcolor: "#2bcbba",
    name: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundcolor: "#45aaf2",
    name: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundcolor: "#4b7bec",
    name: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundcolor: "#a55eea",
    name: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundcolor: "#778ca3",
    name: "application",
    label: "Other",
    value: 9,
  },
];

function ListingEditScreen(props) {
  const userlocation = useLocation();

  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const handleSubmit = async (listing, { resetForm }) => {
    setProgress(0);
    setVisible(true);
    const result = await listingsApi.addListing({
      ...listing,
      location: userlocation,
    },
    
    (progress) => {setProgress(progress);});
    // setVisible(false);
    // console.log(result.ok);

    // if (!result.ok) return alert("Could not save the listing");
    // alert("Successfully added the listing");
    resetForm();
  };

  return (
    <View style={{ padding: 10 }}>
      <UploadScreen onDone={() => setVisible(false)} progress={progress} visible={visible} />
      <AppForm
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <AppFormField maxLength={255} fieldName="title" placeholder="title" />
        <AppFormField
          keyboardType="numeric"
          maxLength={8}
          fieldName="price"
          placeholder="price"
        />
        <View style={{ marginTop: 10 }}>
          <AppFormPicker
            item={categories}
            numberOfColumns={3}
            placeholder="category"
            name="category"
            PickerItemComponent={CategoryPickerItem}
          />
        </View>
        <AppFormField
          multiline
          numberOfLines={3}
          maxLength={255}
          fieldName="Description"
          placeholder="Description"
        />
        <SubmitButton title="Post" bgcolor="red" style={styles.btn} />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: 20,
  },
});

export default ListingEditScreen;
