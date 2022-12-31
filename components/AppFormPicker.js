import React from "react";
import { View } from "react-native";

import { useFormikContext } from "formik";
import ChoicePicker from "./ChoicePicker";
import ErrorMessage from "./ErrorMessage";

function AppFormPicker({ item, name, placeholder, PickerItemComponent, numberOfColumns }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <View>
      <ChoicePicker
        list={item}
        placeholder={placeholder}
        PickerItemComponent={PickerItemComponent}
        onSelectItem={(item) => setFieldValue(name, item)}
        selectedItem={values[name]}
        numberOfColumns={numberOfColumns}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </View>
  );
}

export default AppFormPicker;
