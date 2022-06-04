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
import { useState } from "react";

function Clients() {
	const [openClientsModal, setOpenClientsModal] = useState(false)

	function handleEditClient() {setOpenClientsModal(true)}

	return (
		<div className='row'>
			<div className='column ai-center gap-nav-items'>
				<NavLink image={HomeImg} text='Home' color='main-pink' />
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
							<img src={People} />
							<h3>Clientes</h3>
						</div>
						<div className="customer-interaction">
							<button
								onClick={() => setOpenClientsModal(true)}
							>
								+Adicionar cliente
							</button>
							<img src={Filter} />
							<input
								placeholder="Pesquisa"
							//imagem da lupa
							/>
						</div>
					</div>
					<ClientsModal
						open={openClientsModal}
						handleClose={() => setOpenClientsModal(false)}
					/>
					<div className="line-with-titles">
						<table>
							<thead>
								<tr>
									<th className="center-order"><img src={Order} />Cliente</th>
									<th>CPF</th>
									<th>E-mail</th>
									<th>Telefone</th>
									<th >Status</th>
									<th>Criar Cobrança</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>Sara da Silva</td>
									<td>054 356 255 87</td>
									<td>sarasilva@cubos.io</td>
									<td>71 9 9462 8654</td>
									<td className="status">Inadiplente</td>
									<td><img src={Charge} /></td>
								</tr>
							</tbody>
						</table>
					</div>


				</div>

			</div>
		</div>
	);
}

export default Clients;
