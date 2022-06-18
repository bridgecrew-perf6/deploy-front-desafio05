import { useState } from "react";
import Close from "../../assets/close.svg";
import People from "../../assets/people.svg";
import api from "../../services/api";
import Inputs from "../Inputs";
import "./style.css";

function ClientsModal({ handleClose }) {
	const [errorName, setErrorName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorCpf, setErrorCpf] = useState("");
	const [errorPhone, setErrorPhone] = useState("");
	const [errorCep, setErrorCep] = useState("");
	const [errorAddress, setErrorAddress] = useState("");
	const [errorComplement, setErrorComplement] = useState("");
	const [errorDistrict, setErrorDistrict] = useState("");
	const [errorCity, setErrorCity] = useState("");
	const [errorState, setErrorState] = useState("");

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
		if (!form.name) {
			setErrorName("O campo nome é obrigatório");
			return;
		}
		setErrorName("");
		if (!form.email) {
			setErrorEmail("O campo e-mail é obrigatório");
			return;
		}
		setErrorEmail("");
		if (!form.cpf) {
			setErrorCpf("O campo CPF é obrigatório");
			return;
		}
		setErrorCpf("");
		if (!form.phone) {
			setErrorPhone("O campo telefone é obrigatório");
			return;
		}
		setErrorPhone("");
		if (!form.address) {
			setErrorAddress("O campo endereço é obrigatório");
			return;
		}
		setErrorAddress("");
		if (!form.complement) {
			setErrorComplement("O campo complemento é obrigatório");
			return;
		}
		setErrorComplement("");
		if (!form.cep) {
			setErrorCep("O campo CEP é obrigatório");
			return;
		}
		setErrorCep("");
		if (!form.district) {
			setErrorDistrict("O campo distrito é obrigatório");
			return;
		}
		setErrorDistrict("");
		if (!form.city) {
			setErrorCity("O campo cidade é obrigatório");
			return;
		}
		setErrorCity("");
		if (!form.state) {
			setErrorState("O campo estado é obrigatório");
			return;
		}
		setErrorState("");

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
			handleClose();
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
						<h3>Editar Cliente</h3>
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
						error={errorName}
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<Inputs
						type='email'
						name='email'
						label='E-mail*'
						id='email'
						placeholder='Digite seu e-mail'
						error={errorEmail}
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
							error={errorCpf}
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
							mask='999.999.999-99'
						/>

						<Inputs
							type='text'
							name='phone'
							label='Telefone*'
							id='phone'
							placeholder='Digite o telefone'
							error={errorPhone}
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
							mask='(99) 9999-9999'
						/>
					</div>
					<Inputs
						type='text'
						name='address'
						label='Endereço*'
						id='address'
						placeholder='Digite o endereço'
						error={errorAddress}
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<Inputs
						type='text'
						name='complement'
						label='Complemento*'
						id='complement'
						placeholder='Digite o complemento'
						error={errorComplement}
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
							error={errorCep}
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
							mask='99999-999'
						/>

						<Inputs
							type='text'
							name='district'
							label='Bairro'
							id='district'
							placeholder='Digite o bairro'
							error={errorDistrict}
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
							error={errorCity}
							style={{ width: "303px" }}
							handleChangeForm={handleChangeForm}
						/>

						<Inputs
							type='text'
							name='state'
							label='UF'
							id='uf'
							placeholder='Digite a UF'
							error={errorState}
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
