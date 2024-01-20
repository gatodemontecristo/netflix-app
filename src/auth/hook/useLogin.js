import { authReducer } from "../context";
import { types } from "../types/types";
import { useReducer } from "react";
const init = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return {
    logged: !!user,
    user: user,
  };
};
export const useLogin = () => {
  const [authState, dispatch] = useReducer(authReducer, {}, init);
  const login = (name = "", avatar = "") => {
    const user = { id: "ABC", name, avatar };
    const action = {
      type: types.login,
      payload: user,
    };
    localStorage.setItem("user", JSON.stringify(user));
    dispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    dispatch(action);
  };

  return {
    authState,
    login,
    logout
  };
};
