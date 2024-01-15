import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth";
import { useContext } from "react";

export const PrivateRoute = ({children}) => {
    const {logged}=useContext(AuthContext);
    console.log("PRIVATE ROUTE");
    console.log(logged);
    return (logged)
    ? children
    : <Navigate to="/login"></Navigate>
}
