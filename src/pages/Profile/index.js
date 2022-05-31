import "./style.css";
import { useState, React } from "react";
import Arrow from "../../assets/arrow.svg";
import ModalPerfil from "../../components/ModalPerfil";

function Profile() {
	return (
		<div className='grid-container'>
			<div className="header">
				<h2>Resumo das cobranças</h2>
				<div className="header-menu">
					<ModalPerfil
						surname="LN"
						name="Lorena"
						arrow={Arrow}
					/>
				
				</div>
				
			</div>
		</div>
	);
}

export default Profile;
