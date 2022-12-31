import React from "react";

import { useFormikContext } from "formik";
import ErrorMessage from "./ErrorMessage";
import ImageInputList from "./ImageInputList";

export default function FormImagePicker({name}) {

    const { errors, setFieldValue, touched, values } = useFormikContext();
    const imgUris = values[name];

    const handleAdd = (uri) => {
        setFieldValue(name, [...imgUris, uri]);
      };
    
      const handleRemove = (uri) => {
        setFieldValue(name, imgUris.filter((imageUri) => imageUri !== uri));
      };

  return (
    <>
      <ImageInputList
        imgUris={imgUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}
