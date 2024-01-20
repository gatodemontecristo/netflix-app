import { useLogin } from "../hook/useLogin";
import { AuthContext } from "./AuthContext";

export const AuthProvider = ({ children }) => {
  const { authState, login, logout } = useLogin();

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login: login,
        logout: logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
