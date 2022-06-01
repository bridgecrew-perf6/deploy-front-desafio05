import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Clients from "../pages/Clients";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import { getItem } from "../utils/storage";
import "./style.css";

function mainRoutes() {
	function ProtectedRoutes({ redirectTo }) {
		const isAuthenticated = getItem("token");

		return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
	}
	return (
		<Routes>
			<Route path='/' element={<SignUp />} />
			<Route path='/login' element={<SignIn />} />
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/profile' element={<Profile />} />
			</Route>
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/clients' element={<Clients />} />
			</Route>
		</Routes>
	);
}

export default mainRoutes;
