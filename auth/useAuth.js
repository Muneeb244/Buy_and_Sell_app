import { useContext } from "react";
import AuthContext from "./context";
import AuthStorage from "./storage";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    AuthStorage.removeLogin();
  };

  return { user, setUser, logout };
};
