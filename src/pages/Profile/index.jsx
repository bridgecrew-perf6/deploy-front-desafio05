import { useEffect, useState } from "react";
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
import api from "../../services/api";
import "./style.css";
function Profile() {
	const [openProfileModal, setOpenProfileModal] = useState(false);
	const [pendent, setPendent] = useState();
	const [onDay, setOnDay] = useState();
	const [transaction, settransaction] = useState();

	useEffect(() => {
		async function handleGet() {
			const pendent = await api.get("/transaction/pendent");
			const onDay = await api.get("/transaction/payd");
			const transaction = await api.get("/transaction/all");

			setPendent(pendent.data);
			setOnDay(onDay.data);
			settransaction(transaction.data);
		}
		handleGet();
	}, []);
	let clientsPendentAll = [];
	let clientsOnDayAll = [];

	if (transaction) {
		for (let i = 0; i <= transaction.length - 1; i++) {
			if (transaction[i].onday === false) {
				clientsPendentAll.push(transaction[i]);
			}
			clientsOnDayAll.push(transaction[i]);
		}
	}

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
					{pendent && (
						<TableCharge
							text='Cobranças Vencidas'
							obj={pendent}
							countStyleColor='table-charge-count-danger'
						/>
					)}
					{transaction && (
						<TableCharge
							text='Cobranças Previstas'
							obj={transaction}
							countStyleColor='table-charge-count-caution'
						/>
					)}
					{onDay && (
						<TableCharge
							text='Cobranças Pagas'
							obj={onDay}
							countStyleColor='table-charge-count-success'
						/>
					)}
				</div>
				<div className='container-profile-cards '>
					{transaction && (
						<TableClients
							text='Clientes Inadimplentes'
							image={ClientDanger}
							obj2={clientsPendentAll}
							countStyleColor='table-charge-count-danger'
						/>
					)}
					{transaction && (
						<TableClients
							text='Clientes em dia'
							image={ClientSuccess}
							obj2={clientsOnDayAll}
							countStyleColor='table-charge-count-success'
						/>
					)}
				</div>
				{openProfileModal && (
					<ProfileModal handleClose={() => setOpenProfileModal(false)} />
				)}
			</div>
		</div>
	);
}

export default Profile;
