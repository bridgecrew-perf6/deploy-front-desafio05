import DocumentImg from "../../assets/documents.svg";
import HomeImg from "../../assets/home.svg";
import ProfileImg from "../../assets/profile.svg";
import NavLink from "../../components/NavLinks";
import People from "../../assets/people.svg";
import Filter from "../../assets/filter.svg";
import Order from "../../assets/order.svg";
import Charge from "../../assets/charge.svg"
import "./style.css";
import ClientsModal from "../../components/ClientsModal";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import api from "../../services/api"

function Clients() {
	const [openClientsModal, setOpenClientsModal] = useState(false)
	const [clients, setClients] = useState();

	useEffect(() => {
		async function handleGetClients() {
			try {
				const response = await api.get("/clients");

				setClients(response.data);
			} catch (error) {
				console.log(error.message)
			}
		}
		handleGetClients();
	}, []);

	return (
		<div className='row'>
			<div className='column ai-center gap-nav-items'>
				<Link to="/home">
					<NavLink image={HomeImg} text='Home' color='main-pink' />
				</Link>
				<NavLink
					image={ProfileImg}
					text='Clientes'
					color='color-navbar-text-default'
					display='hidden'
				/>
				<NavLink
					image={DocumentImg}
					text='Cobranças'
					color='color-navbar-text-default'
					display='hidden'
				/>
			</div>

			<div className="centralize">
				<header>
					<p>Clientes</p>
					<div className="id">
						<div className="initials">LR</div>
						<p>Lorena</p>
					</div>
				</header>

				<div className="client-area">
					<div className="client-area-header">
						<div className="theme">
							<img src={People} alt="" />
							<h3>Clientes</h3>
						</div>
						<div className="customer-interaction">
							<button
								onClick={() => setOpenClientsModal(true)}
							>
								+Adicionar cliente
							</button>
							<img src={Filter} alt="" />
							<input
								placeholder="Pesquisa"
							//imagem da lupa
							/>
						</div>
					</div>
					<div className="line-with-titles">
						<table>
							<thead>
								<tr>
									<th className="center-order"><img src={Order} alt="" />Cliente</th>
									<th>CPF</th>
									<th>E-mail</th>
									<th>Telefone</th>
									<th >Status</th>
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
											<td className="status">Inadiplente</td>
											<td><img src={Charge} alt="" /></td>
										</tr>
									</tbody>
								))}
						</table>
					</div>
					{openClientsModal && <ClientsModal
						handleClose={() => setOpenClientsModal(false)}
					/>}					

				</div>

			</div>
		</div>
	);
}

export default Clients;
