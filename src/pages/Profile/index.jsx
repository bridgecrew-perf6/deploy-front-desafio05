import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowImg from "../../assets/arrow.svg";
import ClientDanger from "../../assets/client-danger.svg";
import ClientSuccess from "../../assets/client-success.svg";
import DocumentImgCaution from "../../assets/document-caution.svg";
import DocumentImgDanger from "../../assets/document-danger.svg";
import DocumentImgSuccess from "../../assets/document-success.svg";
import DocumentImg from "../../assets/documents.svg";
import ImgLogout from "../../assets/exit.svg";
import HomeImg from "../../assets/home.svg";
import ImgProfile from "../../assets/img-profile.png";
import ProfileImg from "../../assets/profile.svg";
import ImgEdit from "../../assets/to-edit.svg";
import CardCharge from "../../components/CardCharge";
import Login from "../../components/Login";
import NavLink from "../../components/NavLinks";
import ProfileModal from "../../components/ProfileModal";
import TableCharge from "../../components/TableCharge";
import TableClients from "../../components/TableClients";
import "./style.css";

function Profile() {
	const [openProfileModal, setOpenProfileModal] = useState(false);
	const obj = [
		{
			clientName: "Sara Silva",
			clientIdCharge: 223456781,
			clientValueCharge: "R$ 1000,00",
		},
		{
			clientName: "Carlos Prado",
			clientIdCharge: 223456782,
			clientValueCharge: "R$ 400,00",
		},
		{
			clientName: "Lara Brito",
			clientIdCharge: 223456783,
			clientValueCharge: "R$ 900,00",
		},
		{
			clientName: "Soraya Neves",
			clientIdCharge: 223456784,
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientIdCharge: 223456784,
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientIdCharge: 223456784,
			clientValueCharge: "R$ 700,00",
		},
	];
	const obj2 = [
		{
			clientName: "Sara Silva",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 1000,00",
		},
		{
			clientName: "Carlos Prado",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 400,00",
		},
		{
			clientName: "Lara Brito",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 900,00",
		},
		{
			clientName: "Soraya Neves",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 700,00",
		},
		{
			clientName: "Soraya Neves",
			clientDueDate: "03/02/2021",
			clientValueCharge: "R$ 700,00",
		},
	];

	return (
		<div className='container-profile'>
			<nav className='container-navbar-items'>
				<NavLink image={HomeImg} text='Home' color='main-pink' />
				<Link to='/clientes'>
					<NavLink
						image={ProfileImg}
						text='Clientes'
						color='color-navbar-text-default'
						display='hidden'
					/>
				</Link>
				<Link to='/cobrancas'>
					<NavLink
						image={DocumentImg}
						text='Cobranças'
						color='color-navbar-text-default'
						display='hidden'
					/>
				</Link>
			</nav>

			<div className='container-profile-dashboard'>
				<div className='container-profile-user'>
					<h1 className='title-main-table'>Resumo de cobranças</h1>
					<Login
						image={ImgProfile}
						imageArrow={ArrowImg}
						imageEdit={ImgEdit}
						imageLogout={ImgLogout}
						setOpenProfileModal={setOpenProfileModal}
					/>
				</div>
				<hr className='divisor-profile' />

				<div className='container-profile-cards '>
					<CardCharge
						bgColor='bg-card-default'
						image={DocumentImgSuccess}
						text='Cobranças Vencidas
'
					/>
					<CardCharge
						bgColor='bg-card-danger'
						image={DocumentImgCaution}
						text='Cobranças Previstas'
					/>
					<CardCharge
						bgColor='bg-card-caution'
						image={DocumentImgDanger}
						text='Cobranças Pagas'
					/>
				</div>
				<div className='container-profile-cards '>
					<TableCharge
						text='Cobranças Vencidas'
						obj={obj}
						countStyleColor='table-charge-count-danger'
					/>
					<TableCharge
						text='Cobranças Previstas'
						obj={obj}
						countStyleColor='table-charge-count-caution'
					/>
					<TableCharge
						text='Cobranças Pagas'
						obj={obj}
						countStyleColor='table-charge-count-success'
					/>
				</div>
				<div className='container-profile-cards '>
					<TableClients
						image={ClientDanger}
						obj2={obj2}
						countStyleColor='table-charge-count-danger'
					/>
					<TableClients
						image={ClientSuccess}
						obj2={obj2}
						countStyleColor='table-charge-count-success'
					/>
				</div>
				{openProfileModal && (
					<ProfileModal handleClose={() => setOpenProfileModal(false)} />
				)}
			</div>
		</div>
	);
}

export default Profile;
