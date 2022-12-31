import React from "react";
import { View } from "react-native";

import AppTextInput from "./AppTextInput";
import ErrorMessage from "./ErrorMessage";

import { useFormikContext } from "formik";

function AppFormField({fieldName, ...otherProps}) {

    const {handleChange,setFieldValue, values,  errors, setFieldTouched, touched} = useFormikContext();

  return (
    <>
      <AppTextInput
        // name="email"
        // placeholder="Email"
        // autoCapitalize="none"
        // autoCorrect={false}
        // keyboardType="email-address"
        {...otherProps}
        onChangeText={text => setFieldValue(fieldName, text)}
        value={values[fieldName]}
        onBlur={() => setFieldTouched(fieldName)}
      />
      <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
    </>
  );
}

export default AppFormField;
