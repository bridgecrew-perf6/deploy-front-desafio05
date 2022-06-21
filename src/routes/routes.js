import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Charges from "../pages/Charges";
import Clients from "../pages/Clients";
import Empty from "../pages/Empty";
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
			<Route path='/empty' element={<Empty />} />
			<Route path='/' element={<SignIn />} />
			<Route path='/cadastro' element={<SignUp />} />
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/home' element={<Profile />} />
			</Route>
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/clientes' element={<Clients />} />
			</Route>
			<Route element={<ProtectedRoutes redirectTo='/' />}>
				<Route path='/cobrancas' element={<Charges />} />
			</Route>
		</Routes>
	);
}

export default mainRoutes;
