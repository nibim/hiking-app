import { useContext } from "react";
import { AuthContext } from "./Authcontext";




export const useUser = () => {
  const { user, setUser } = useContext(AuthContext);

  const addUser = (user) => {
    setUser(user);
  };

  const removeUser = () => {
    setUser(null);
  };

  return { user, addUser, removeUser, setUser };
};
