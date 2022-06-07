import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ArrowImg from "../../assets/arrow.svg";
import Charge from "../../assets/charge.svg";
import ClientsPink from "../../assets/clients-pink.svg";
import DocumentImg from "../../assets/documents.svg";
import ImgLogout from "../../assets/exit.svg";
import Filter from "../../assets/filter.svg";
import HomeInactve from "../../assets/home-inactve.svg";
import ImgProfile from "../../assets/img-profile.png";
import Order from "../../assets/order.svg";
import People from "../../assets/people.svg";
import Lupa from "../../assets/search.svg";
import ImgEdit from "../../assets/to-edit.svg";
import ClientsModal from "../../components/ClientsModal";
import Login from "../../components/Login";
import NavLink from "../../components/NavLinks";
import api from "../../services/api";
import "./style.css";

function Clients() {
	const [openClientsModal, setOpenClientsModal] = useState(false);
	const [clients, setClients] = useState();

	useEffect(() => {
		async function handleGetClients() {
			try {
				const response = await api.get("/clients");

				setClients(response.data);
			} catch (error) {
				console.log(error.message);
			}
		}
		handleGetClients();
	}, []);

	return (
		<div className='row'>
			<nav className='container-navbar-items'>
				<Link to='/home'>
					<NavLink
						image={HomeInactve}
						text='Home'
						color='color-navbar-text-default'
						display='hidden'
					/>
				</Link>
				<NavLink image={ClientsPink} text='Clientes' color='main-pink' />
				<NavLink
					image={DocumentImg}
					text='Cobranças'
					color='color-navbar-text-default'
					display='hidden'
				/>
			</nav>

			<div className='clients-container'>
				<header>
					<p>Clientes</p>
					<div className='container-clients-margin'>
						<Login
							image={ImgProfile}
							imageArrow={ArrowImg}
							imageEdit={ImgEdit}
							imageLogout={ImgLogout}
						/>
					</div>
				</header>

				<hr className='hr-clients' />

				<div className='client-area'>
					<div className='clients-container-area-header'>
						<div className='theme'>
							<img src={People} alt='' />
							<h3>Clientes</h3>
						</div>
						<div className='customer-interaction'>
							<button onClick={() => setOpenClientsModal(true)}>
								+Adicionar cliente
							</button>
							<img src={Filter} alt='' />
							<div className='clients-container-relative'>
								<input placeholder='Pesquisa' />
								<img src={Lupa} alt='' />
							</div>
						</div>
					</div>

					<div className='line-with-titles'>
						<table>
							<thead>
								<tr>
									<th className='center-order'>
										<img src={Order} alt='' />
										Cliente
									</th>
									<th>CPF</th>
									<th>E-mail</th>
									<th>Telefone</th>
									<th>Status</th>
									<th>Criar Cobrança</th>
								</tr>
							</thead>
							{clients &&
								clients.map((cliente) => (
									<tbody key={cliente.id}>
										<tr>
											<td>{cliente.name}</td>
											<td>{cliente.cpf}</td>
											<td>{cliente.email}</td>
											<td>{cliente.phone}</td>
											<td className='status'>Inadiplente</td>
											<td>
												<img src={Charge} alt='' />
											</td>
										</tr>
									</tbody>
								))}
						</table>
					</div>
					{openClientsModal && (
						<ClientsModal handleClose={() => setOpenClientsModal(false)} />
					)}
				</div>
			</div>
		</div>
	);
}

export default Clients;
