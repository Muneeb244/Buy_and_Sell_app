import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppButton from "../../components/AppButton";
import AppTextInput from "../../components/AppTextInput";
import ErrorMessage from "../../components/ErrorMessage";

import AppFormField from "../../components/AppFormField";
import AppForm from "../../components/AppForm";
import SubmitButton from "../../components/SubmitButton";
import authApi from "../../api/authApi";
import AuthContext from "../../auth/context";
import Authstorage from "../../auth/storage";

import { Formik } from "formik";
import * as Yup from "yup";

const loginDetails = [
  {
    name: "Muneeb Ahmad",
    email: "muneeb@gmail.com",
    password: "12345",
  },
  {
    name: "Ahmad Muneeb",
    email: "ahmad@gmail.com",
    password: "12345",
  },
];

function LoginScreen(props) {
  const authContext = useContext(AuthContext);
  const [loginError, setLoginError] = useState(false);

  const handleSubmit = async ({ name, email, password }) => {
    loginDetails.map((result) => {
      if (result.email === email && result.password === password) {
        setLoginError(false);
        authContext.setUser({ name: result.name, email: email, password: password });
        Authstorage.storeLogin({ name: result.name, email: email, password: password });
      }
      return setLoginError(true);
    });

    // ************************ cause server won't work because it's decayed

    // const result = await authApi.login(email, password);
    // console.log("here", result);
    // if (!result.ok) return setLoginError(true);
    // setLoginError(false);
    // console.log("(((", result.data);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(5).max(12).label("Password"),
  });

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assetsImage/logo-red.png")}
      />

      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="Invalid email or/and password"
          visible={loginError}
        />
        <AppFormField
          fieldName="email"
          name="email"
          placeholder="Email"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          // onChangeText={handleChange("email")}
          // onBlur={() => setFieldTouched("email")}
        />
        <AppFormField
          fieldName="password"
          name="lock"
          placeholder="password"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="default"
          secureTextEntry
          // onChangeText={handleChange("password")}
          // onBlur={() => setFieldTouched("password")}
        />
        <SubmitButton
          title="Login"
          bgcolor="red"
          style={styles.btn}
          // style={styles.btn1}
        />
      </AppForm>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  img: {
    height: 70,
    width: 70,
    alignSelf: "center",
    marginTop: 40,
    marginBottom: 10,
  },
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
  btn1: {
    backgroundColor: "red",
  },
});

export default LoginScreen;
