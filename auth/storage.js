import * as SecureStore from "expo-secure-store";

const key = "logindetails";
const storeLogin = async (loginDetails) => {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(loginDetails));
  } catch (error) {
    console.log("Cannot store auth token", error);
  }
};

const getLogin = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Cannot get auth token", error);
  }
};

const removeLogin = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Cannot remove auth token", error);
  }
};

export default {
  storeLogin,
  getLogin,
  removeLogin,
};
