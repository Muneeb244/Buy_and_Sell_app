import React from "react";
import { View, StyleSheet } from "react-native";
import * as Yup from "yup";

import AppFormField from "../../components/AppFormField";
import AppForm from "../../components/AppForm";
import SubmitButton from "../../components/SubmitButton";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <AppForm
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCorrect={false}
          name="account"
          fieldName="name"
          placeholder="Name"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="email"
          keyboardType="email-address"
          fieldName="email"
          placeholder="Email"
          textContentType="emailAddress"
        />
        <AppFormField
          autoCapitalize="none"
          autoCorrect={false}
          name="lock"
          fieldName="password"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <SubmitButton title="Register" style={styles.btn} bgcolor={'red'}/>
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  btn: {
    width: "100%",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    color: "#fff",
    fontSize: 20,
  }
});

export default RegisterScreen;
