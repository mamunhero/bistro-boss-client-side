import { createContext, useEffect, useState } from "react";
import auth from './../Config/Firebase/Firebase-config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  // createUser
  const createUser = (email, password) => {
    setIsLoading(true)
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signInUser
  const signInUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
  }
  // logout
  const logout = () => {
    setIsLoading(true)
    return signOut(auth)
  }
  useEffect(()=> {
    const unSubscribe = onAuthStateChanged(auth, currentUser=> {
      setUser(currentUser)
      console.log("current user", currentUser);
      setIsLoading(false)
    });
    return ()=> {
      unSubscribe();
    }
  },[user])
  const authInfo = {
    user,
    isLoading,
    createUser,
    signInUser,
    logout
  }
  
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;


