import React, { startTransition } from "react";
import { ImageBackground, View, StyleSheet, Text, Image } from "react-native";
import AppButton from "../../components/AppButton";

function WelcomeScreen({navigation}) {
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        style={styles.image}
        source={require("./background.jpg")}
        blurRadius={5}
      >
        <View style={styles.item}>
          <View style={styles.upperItem}>
            <Image
              style={styles.logo}
              source={require("../assetsImage/logo-red.png")}
            />
            <Text style={styles.text}>Sell what you don't need</Text>
          </View>
          <View style={styles.subItem}>
            <AppButton title="Login" bgcolor='red' BtnStyle={[styles.btn, styles.btn1]} onPress={() => {navigation.navigate("Login")}}/>
            <AppButton title="Sign Up" bgcolor='#228B22' BtnStyle={[styles.btn, styles.btn2]} onPress={() => {navigation.navigate("Register")}}/>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: 'grey',
    height: '100%',
    width: '100%',
  },
  image: {
    width: "100%",
    height: "100%",
  },
  btn: {
    width: "90%",
    borderRadius: 25,
    padding: 15,
    marginTop: 20,
    textAlign: "center",
    justifyContent: 'center',
    alignItems: 'center',
    color: "#fff",
    fontSize: 20,
  },
  btn1: {
    backgroundColor: "red",
    // marginTop: 150,
  },
  btn2: {
    backgroundColor: "#228B22",
  },
  item: {
    width: '100%',
    height: '100%',
    // flex: 1,
    // justifyContent: 'space-evenly',
    // alignItems: 'flex-start',
  },
  text: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'notoserif',
  },
  subItem: {
    width: "100%",
    height: '30%',
    // flex: 1,
    // backgroundColor: 'grey',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  upperItem: {
    width: "100%",
    height: "70%",
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: 'blue',
  },
  logo: {
    width: "30%",
    height: "25%",
    resizeMode: 'contain',
  },
});

export default WelcomeScreen;
