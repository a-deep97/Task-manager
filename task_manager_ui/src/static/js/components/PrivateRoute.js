import { Route, Navigate, Routes } from "react-router-dom";
import LoginPage from "../login";

function PrivateRoute(props){

   
    return (props.isAuthenticated ? 
    <Routes><Route  path={props.path} element={props.element} /></Routes>: <Navigate to='/login'/>);
}

export default PrivateRoute;