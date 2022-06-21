import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/sign-in-img.png";
import Btn from "../../components/Btn";
import CardSignUp from "../../components/CardSignUp";
import Inputs from "../../components/Inputs";
import api from "../../services/api";
import {getItem, setItem} from "../../utils/storage";
import "./style.css";

function SignIn() {
	const navigate = useNavigate();
	const [error, setError] = useState("Todos os campos são obrigatórios");
	const [forms, setForms] = useState({
		email: "",
		password: "",
	});

	function handleSubmitLogin(e) {
		e.preventDefault();
		setError("");
		if (!forms.email || !forms.password) {
			setError("Todos os campos são obrigatórios");
			console.log(error);
			return;
		}
		handleLogin();
		return;
	}

	useEffect(() => {
		const token = getItem('token');

		if(token){
			navigate('/profile')
		}
	});

	async function handleLogin(){
		try {
			const response = await api.post('/login', {
				email: forms.email,
				password: forms.password
			});
			
			const {token} = response.data;
			setItem('token', token);
			navigate('/profile');

		} catch (error) {
			console.log(error.message);
		}
	}

	function handleChangeForm(e) {
		const value = e.target.value;
		setForms({
			...forms,
			[e.target.name]: value,
		});
	}

	return (
		<div className='container'>
			<img className="img-position" src={Image} alt="" />
			<form className="div-register" onSubmit={handleSubmitLogin}>
				<div className="center-form">
					
					<CardSignUp
						header='Faça seu login!'
					>
						<Inputs
							type='email'
							name='email'
							label='E-mail'
							id='email'
							value={forms.email}
							handleChangeForm={handleChangeForm}
						/>
						<Inputs
							type='password'
							name='password'
							label='Senha'
							id='password'
							value={forms.password}
							handleChangeForm={handleChangeForm}
						/>
					</CardSignUp>
					<Btn type='submit' text='Continuar' />

					<div className='footer-menu-title'>
						<h1 className='menu-title'>Ainda não possui uma conta? Faça seu</h1>
						<Link to='/'>
							<span className='pink menu-title'>Cadastre-se</span>
						</Link>
					</div>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
