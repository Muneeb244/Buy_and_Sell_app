import { useEffect, useState } from "react";
import * as location from "expo-location";

const useLocation = () => {
  const [userlocation, setLocation] = useState();
  
  const getLocation = async () => {
      try {
      const result = await location.requestForegroundPermissionsAsync();
      if (result.granted) {
        const {
          coords: { latitude, longitude },
        } = await location.getCurrentPositionAsync();
        setLocation({ latitude, longitude });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return userlocation;
};


export default useLocation;
