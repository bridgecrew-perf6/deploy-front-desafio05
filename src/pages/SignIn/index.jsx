import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ImgEye from "../../assets/reveal-password.svg";
import Image from "../../assets/sign-in-img.png";
import Btn from "../../components/Btn";
import CardSignUp from "../../components/CardSignUp";
import Inputs from "../../components/Inputs";
import api from "../../services/api";
import { getItem, setItem } from "../../utils/storage";
import "./style.css";

function SignIn() {
	const navigate = useNavigate();
	const [errorEmail, setErrorEmail] = useState("");
	const [errorPassword, setErrorPassword] = useState("");

	const [forms, setForms] = useState({
		email: "",
		password: "",
	});

	function handleSubmitLogin(e) {
		e.preventDefault();
		if (!forms.email) {
			setErrorEmail("O campo e-mail é obrigatório!");
			return;
		}
		setErrorEmail("");

		if (!forms.password) {
			setErrorPassword("O campo senha é obrigatório!");
			return;
		}
		setErrorPassword("");

		handleLogin();
		return;
	}

	useEffect(() => {
		const token = getItem("token");

		if (token) {
			navigate("/home");
		}
	});

	async function handleLogin() {
		try {
			const response = await api.post("/login", {
				email: forms.email,
				password: forms.password,
			});

			const { token } = response.data;
			setItem("token", token);
			navigate("/home");
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
		<div className='row'>
			<img className='img-position' src={Image} alt='' />
			<form className='container-sign-in' onSubmit={handleSubmitLogin}>
				<CardSignUp header='Faça seu login!'>
					<Inputs
						type='email'
						name='email'
						label='E-mail'
						id='email'
						placeholder='Digite seu e-mail'
						value={forms.email}
						handleChangeForm={handleChangeForm}
						error={errorEmail}
					/>
					<Inputs
						type='password'
						name='password'
						label='Senha'
						id='password'
						placeholder='Digite sua senha'
						value={forms.password}
						handleChangeForm={handleChangeForm}
						error={errorPassword}
						reveal={ImgEye}
					/>
				</CardSignUp>
				<Btn type='submit' text='Continuar' />

				<div className='footer-menu-title'>
					<h1 className='menu-title'>Ainda não possui uma conta? Faça seu</h1>
					<Link to='/'>
						<span className='pink menu-title '>Cadastre-se</span>
					</Link>
				</div>
			</form>
		</div>
	);
}

export default SignIn;
