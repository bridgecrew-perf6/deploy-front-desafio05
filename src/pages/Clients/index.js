import DocumentImg from "../../assets/documents.svg";
import HomeImg from "../../assets/home.svg";
import ProfileImg from "../../assets/profile.svg";
import NavLink from "../../components/NavLinks";
import People from "../../assets/people.svg";
import Filter from "../../assets/filter.svg";
import Order from "../../assets/order.svg";
import Charge from "../../assets/charge.svg"
import "./style.css";

function Clients() {
	return (
		<div className='row'>
			<navbar className='column ai-center gap-nav-items'>
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
			</navbar>

			<div>
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
							<h3>Clients</h3>
						</div>
						<div className="customer-interaction">
							<button>+Adicionar cliente</button>
							<img src={Filter}/>
							<input 
							placeholder="Pesquisa"
							//imagem da lupa
							/>
						</div>
					</div>
					<div className="customer-registration">
						<div className="line-with-titles">
							<p><img src={Order}/>Cliente</p>
							<p>CPF</p>
							<p>E-mail</p>
							<p>Telefone</p>
							<p>Status</p>
							<p>Criar Cobbrança</p>
						</div>
						<div className="clients">
							<p>Sara da Silva</p>
							<p>054 356 255 87</p>
							<p>sarasilva@cubos.io</p>
							<p>71 9 9462 8654</p>
						</div>
						<div className="status">Inadiplente</div>
						<div className="charge">
							<img src={Charge}/>
							<p>Cobrança</p>
						</div>
					</div>
				</div>

			</div>
		</div>
	);
}

export default Clients;
