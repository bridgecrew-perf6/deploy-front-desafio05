import { useState } from "react";
import Close from "../../assets/close.svg";
import File from "../../assets/file.svg";
import api from "../../services/api";
import Inputs from "../Inputs";
import "./style.css";

function ModalCharge({ handleClose }) {
	const [errorName, setErrorName] = useState("");
	const [errorDescription, setErrorDescription] = useState("");
	const [errorDueDate, setErrorDueDate] = useState("");
	const [errorValue, setErrorValue] = useState("");
	const [chargeOk, setChargeOk] = useState(false);
	const [chargePendent, setChargePendent] = useState(false);

	const [form, setForm] = useState({
		name: "",
		description: "",
		dueDate: "",
		value: "",
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
		if (!form.description) {
			setErrorDescription("O campo descrição é obrigatório");
			return;
		}
		setErrorDescription("");
		if (!form.dueDate) {
			setErrorDueDate("O campo vencimento é obrigatório");
			return;
		}
		setErrorDueDate("");
		if (!form.value) {
			setErrorValue("O campo valor é obrigatório");
			return;
		}
		setErrorValue("");

		console.log(form);
		try {
			const response = await api.post("/client", {
				client: form.name,
				description: form.description,
				expiration: form.dueDate,
				amount: form.value,
			});
			handleClose();
			console.log(response);
		} catch (error) {
			console.log(error.message);
		}
	}

	function markOk() {
		setChargeOk(!chargeOk);

		if (markPendent) {
			setChargePendent(false);
		}
	}

	function markPendent() {
		setChargePendent(!chargePendent);

		if (markOk) {
			setChargeOk(false);
		}
	}

	return (
		<div className='register-clients'>
			<div className='container'>
				<div className='container-header'>
					<div className='theme-modal'>
						<img src={File} alt='' />
						<h3>Edição de Cobrança</h3>
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
						type='description'
						name='description'
						label='Descrição*'
						id='description'
						placeholder='Digite a descrição'
						error={errorDescription}
						style={{ width: "487px" }}
						handleChangeForm={handleChangeForm}
					/>
					<div className='cpf-phone'>
						<Inputs
							type='text'
							name='dueDate'
							label='Vencimento*'
							id='dueDate'
							placeholder='Data de Vencimento'
							error={errorDueDate}
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
							mask='99/99/9999'
						/>

						<Inputs
							type='number'
							name='value'
							label='Valor*'
							id='value'
							placeholder='Digite o valor'
							error={errorValue}
							style={{ width: "235px" }}
							handleChangeForm={handleChangeForm}
						/>
					</div>

					<div className='radio-main'>
						<h1 className='data-label'>Status:*</h1>
						<div className='radio-align'>
							<label htmlFor='' className='label-container'>
								<input type='checkbox' checked={chargeOk && "checked"} />
								<span className='font-radio' onClick={markOk}>
									Cobrança Paga
								</span>
								<span className='checkmark' onClick={markOk}></span>
							</label>
						</div>
						<div className='radio-align'>
							<label htmlFor='' className='label-container'>
								<input type='checkbox' checked={chargePendent && "checked"} />
								<span className='font-radio' onClick={markPendent}>
									Cobrança Pendente
								</span>
								<span className='checkmark' onClick={markPendent}></span>
							</label>
						</div>
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

export default ModalCharge;
