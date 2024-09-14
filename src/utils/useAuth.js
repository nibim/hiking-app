import { useUser } from "./useUser";
import { signInWithEmailAndPassword,getAuth,signOut } from "firebase/auth";

export const useAuth = () => {
  // we can re export the user methods or object from this hook
  const { user, addUser, removeUser, setUser } = useUser();
  let auth = getAuth()
  const login = async (user) => {
      await signInWithEmailAndPassword(auth, user.email, user.password);
      auth = getAuth();
      addUser(auth.currentUser);
  };

  const logout = () => {
    signOut(auth)
    removeUser();
  };

  return { user, login, logout, setUser };
};