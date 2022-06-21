import React from "react";
import ReactDOM from "react-dom/client";
import "./global/index.css";
import Routes from "./routes/routes";
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ToastContainer position="bottom-right" />
		<BrowserRouter>
			<Routes />
	    </BrowserRouter>
	</React.StrictMode>
);
