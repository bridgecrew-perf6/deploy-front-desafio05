import { useState } from "react";
import Close from "../../assets/close.svg";
import api from "../../services/api";
import Inputs from "../Inputs";
import "./style.css";

function ProfileModal({ handleClose }) {
	const [errorName, setErrorName] = useState("");
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");
	const [errorConfirmPassword, setErrorConfirmPassword] = useState("");
	const [errorCpf, setErrorCpf] = useState("");
	const [errorPhone, setErrorPhone] = useState("");

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
		if (!form.password) {
			setErrorPassword("O campo senha é obrigatório");
			return;
		}
		setErrorPassword("");
		if (!form.confirmPassword) {
			setErrorConfirmPassword("O campo confirmar senha é obrigatório");
			return;
		}
		setErrorConfirmPassword("");

		console.log(form);
		try {
			const response = await api.put("/user", {
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
				<div className='container-profile-modal-title'>
					<div>
						<h3 className='font-theme-modal'>Edite seu cadastro</h3>
					</div>
					<img
						className='position-close-modal'
						src={Close}
						alt=''
						onClick={() => handleClose()}
					/>
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
						type='password'
						name='password'
						label='Nova Senha*'
						id='password'
						placeholder='••••••••'
						error={errorPassword}
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>

					<Inputs
						type='password'
						name='confirmPassword'
						label='Confirmar Senha*'
						id='confirmPassword'
						placeholder='••••••••'
						error={errorConfirmPassword}
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
