import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Clients from "../pages/Clients";
import Profile from "../pages/Profile";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Charges from "../pages/Charges";
import { getItem } from "../utils/storage";
import "./style.css";

function mainRoutes() {
	function ProtectedRoutes({ redirectTo }) {
		const isAuthenticated = getItem("token");

		return isAuthenticated ? <Outlet /> : <Navigate to={redirectTo} />;
	}
	return (
		<Routes>
			<Route path='/' element={<SignIn />} />
			<Route path='/cadastro' element={<SignUp />} />
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/home' element={<Profile />} />
			</Route>
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/clientes' element={<Clients />} />
			</Route>
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/cobranca' element={<Charges />} />
			</Route>
		</Routes>
	);
}

export default mainRoutes;
