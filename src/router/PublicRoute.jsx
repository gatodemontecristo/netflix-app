import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { AuthContext } from "../auth"

export const PublicRoute = ({children}) => {

    const {logged} = useContext(AuthContext)
        console.log("PUBLICO ROUTE");
        console.log(logged);

    return (!logged)
    ? children
    : <Navigate to="/movies"></Navigate>
}
