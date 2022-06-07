import { useState } from "react";
import Close from "../../assets/close.svg";
import People from "../../assets/people.svg";
import api from "../../services/api";
import Inputs from "../Inputs";
import "./style.css";

function ClientsModal({ handleClose }) {
	const [form, setForm] = useState({
		name: "",
		email: "",
		cpf: "",
		phone: "",
		cep: "",
		address: "",
		complement: "",
		district: "",
		city: "",
		state: "",
	});

	function handleChangeForm(e) {
		const value = e.target.value;
		setForm({
			...form,
			[e.target.name]: value,
		});
	}

	async function handleSubmit(e) {
		e.preventDefault();
		if (!form.name || !form.email || !form.cpf || !form.phone) {
			console.log("campos obrigatórios");
			return;
		}
		console.log(form);
		try {
			const response = await api.post("/client", {
				name: form.name,
				email: form.email,
				cpf: form.cpf,
				phone: form.phone,
				cep: form.cep,
				address: form.address,
				complement: form.complement,
				district: form.district,
				city: form.city,
				state: form.state,
			});

			console.log(response);
		} catch (error) {
			console.log(error.message);
		}
	}

	return (
		<div className='register-clients'>
			<div className='container'>
				<div className='container-header'>
					<div className='theme-modal'>
						<img src={People} alt='' />
						<h3>Cadastro do Cliente</h3>
					</div>
					<img src={Close} alt='' onClick={() => handleClose()} />
				</div>

				<form onSubmit={handleSubmit}>
					<Inputs
						type='text'
						name='name'
						label='Nome*'
						id='name'
						placeholder='Digite o nome'
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<Inputs
						type='email'
						name='email'
						label='E-mail*'
						id='email'
						placeholder='Digite seu e-mail'
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>
					<div className='cpf-phone'>
						<Inputs
							type='text'
							name='cpf'
							label='CPF*'
							id='cpf'
							placeholder='Digite o CPF'
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
						/>

						<Inputs
							type='text'
							name='phone'
							label='Telefone*'
							id='phone'
							placeholder='Digite o telefone'
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
						/>
					</div>
					<Inputs
						type='text'
						name='address'
						label='Endereço*'
						id='address'
						placeholder='Digite o endereço'
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<Inputs
						type='text'
						name='complement'
						label='Complemento*'
						id='complement'
						placeholder='Digite o complemento'
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<div className='cep-district'>
						<Inputs
							type='text'
							name='cep'
							label='CEP'
							id='cep'
							placeholder='Digite o CEP'
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
						/>

						<Inputs
							type='text'
							name='district'
							label='Bairro'
							id='district'
							placeholder='Digite o bairro'
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
						/>
					</div>

					<div className='city-uf'>
						<Inputs
							type='text'
							name='city'
							label='Cidade'
							id='city'
							placeholder='Digite a cidade'
							style={{ width: "303px" }}
							handleChangeForm={handleChangeForm}
						/>

						<Inputs
							type='text'
							name='state'
							label='UF'
							id='uf'
							placeholder='Digite a UF'
							style={{ width: "160px" }}
							handleChangeForm={handleChangeForm}
						/>
					</div>

					<div className='buttons'>
						<button className='cancel'>Cancelar</button>
						<button type='submit' className='apply'>
							Aplicar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default ClientsModal;
