import { useState } from "react";
import Close from "../../assets/close.svg";
import People from "../../assets/people.svg";
import api from "../../services/api";
import Inputs from "../Inputs";
import "./style.css";

function ProfileModal({ handleClose }) {
	const [form, setForm] = useState({
		name: "",
		email: "",
		cpf: "",
		phone: "",
		password: "",
		confirmPassword: "",
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
		if (
			!form.name ||
			!form.email ||
			!form.cpf ||
			!form.phone ||
			!form.password ||
			!form.confirmPassword
		) {
			console.log("campos obrigatórios");
			return;
		}
		console.log(form);
		try {
			const response = await api.post("/client", {
				name: form.name,
				email: form.email,
				password: form.password,
				phone: form.phone,
				cpf: form.cpf,
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
							mask='999.999.999-99'
						/>

						<Inputs
							type='text'
							name='phone'
							label='Telefone*'
							id='phone'
							placeholder='Digite o telefone'
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
							mask='(99) 9999-9999'
						/>
					</div>
					<Inputs
						type='password'
						name='password'
						label='Nova Senha*'
						id='password'
						placeholder='••••••••'
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<Inputs
						type='password'
						name='confirmPassword'
						label='Confirmar Senha*'
						id='confirmPassword'
						placeholder='••••••••'
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

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

export default ProfileModal;
