import { Route, Routes, Outlet, Navigate } from "react-router-dom";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import "./style.css";
import { getItem } from '../utils/storage'

function mainRoutes() {
	  function ProtectedRoutes({ redirectTo }) {
	    const isAuthenticated = getItem('token');

	    return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />
	  }
	return (
		<Routes>
			<Route path='/' element={<SignUp />} />
			<Route path='/login' element={<SignIn />} />
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
}

export default mainRoutes;
