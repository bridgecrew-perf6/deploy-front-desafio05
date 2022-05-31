import { useState } from "react";
import { Link } from "react-router-dom";
import Checked from "../../assets/check-white.svg";
import LineGreen from "../../assets/line-green.svg";
import LineWhite from "../../assets/line-white.svg";
import PointedGreen from "../../assets/point-green.svg";
import PointedWhite from "../../assets/point-white.svg";
import Btn from "../../components/Btn";
import CardSignUp from "../../components/CardSignUp";
import CardSucess from "../../components/CardSucess";
import Inputs from "../../components/Inputs";
import Stepper from "../../components/Stepper";
import api from "../../services/api"
import "./style.css";

function SignUp() {
	const [sucesso, setSucesso] = useState(false);
	const [login, setlogin] = useState({
		infos: true,
		password: false, 
	});
    const [error, setError] = useState('Todos os campos são obrigatórios');
	const [forms, setForms] = useState({
        nome: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
	const [countState, setCountState] = useState(0);

	const obj = [
		{
			stepperOne: PointedWhite,
			classChangeOne: "stepper-circle stepper-fill",

			stepperTwo: PointedGreen,
			classChangeTwo: "stepper-circle",

			stepperThree: PointedGreen,
			classChangeThree: "stepper-circle",
		},
		{
			stepperOne: Checked,
			classChangeOne: "stepper-circle stepper-fill",

			stepperTwo: PointedWhite,
			classChangeTwo: "stepper-circle stepper-fill",

			stepperThree: PointedGreen,
			classChangeThree: "stepper-circle",
		},
		{
			stepperOne: Checked,
			classChangeOne: "stepper-circle stepper-fill",

			stepperTwo: Checked,
			classChangeTwo: "stepper-circle stepper-fill",

			stepperThree: Checked,
			classChangeThree: "stepper-circle stepper-fill"
		}
	]

	function handleSubmitRegister(e) {
        e.preventDefault();
		setError('');
        if (!forms.nome || !forms.email ) {
            setError('Todos os campos são obrigatórios');
            console.log(error);
            return;
        }	
		setlogin({
			infos: false,
			password: true, 
		});
		setCountState(countState + 1);
		return;
    }

	function handleSubmitPassword(e){
		e.preventDefault();
		
		setError('');
		if(forms.password.length < 8){
			setError('A senha precisa ter no minimo 8 caracteres');
			console.log(error);
			return;
		}

        if (!forms.password || !forms.confirmPassword ) {
            setError('Todos os campos são obrigatórios');
            console.log(error);
            return;
        }
		if(forms.password !== forms.confirmPassword){
			setError('password não confirmada')
			console.log(error)
			return;
		}
		setSucesso(true);
		setlogin({
			infos: false,
			password: false
		})
		setCountState(countState + 1);
		console.log("Cadastro realizado com sucesso");
		console.log(forms)
		handleApi()

		if(sucesso){
			setForms({
				nome: '',
				email: '',
				password: '',
				confirmPassword: ''
			})
		}
	}

	function handleChangeForm(e) {
        const value = e.target.value;
        setForms({
            ...forms,
            [e.target.name]: value
        });
    }

	async function handleApi() {
        try {
            const response = await api.post('/user', {
                name: forms.nome,
                email: forms.email,
                password: forms.password
            });

            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }

	return (
		<div className='container'>
			
			<Stepper obj={obj} countState={countState} />

				{login.infos ? 
				<form className="div-register" onSubmit={handleSubmitRegister}>
					<div className="center-form">
						<CardSignUp 
						header="Adicione seus dados"
						// esta no lugar errado, olhar figma
					>
						<Inputs 
							type='text'
							name='nome'
							label='Nome*'
							id='nome'
							value={forms.nome}
							handleChangeForm={handleChangeForm}
						/>
						<Inputs 
							type='email'
							name='email'
							label='E-mail*'
							id='email'
							value={forms.email}
							handleChangeForm={handleChangeForm}
						/>
						</CardSignUp> 
						<Btn 
							type='submit'
							text='Continuar'
						/>

<div className="footer-menu-title"><h1 className="menu-title">Já possui uma conta? Faça seu</h1><Link to='/login'><span className="pink menu-title">Login</span></Link></div>

						<div className="lines">
							<img src={LineGreen} alt="" />
							<img src={LineWhite} alt="" />
							<img src={LineWhite} alt="" />	
						</div>					
					</div>
				</form>
			:	login.password ?
				<form className="div-register" onSubmit={handleSubmitPassword}>
					<div className="center-form">
						<CardSignUp
							header="Escolha uma senha"
							footer={<Link to='/login'>Já possui uma conta? Faça seu <span>Login</span></Link>}
						>
							<Inputs 
								type='password'
								name='password'
								label='Senha*'
								placeholder="Digite sua senha"
								id='password'
								value={forms.password}
								handleChangeForm={handleChangeForm}
							/>
							<Inputs 
								type='password'
								name='confirmPassword'
								label='Repita a senha*'
								id='confirmPassword'
								value={forms.confirmPassword}
								handleChangeForm={handleChangeForm}
							/>
						</CardSignUp>
						<Btn 
							type='submit'
							text='Entrar'
						/>
						<div className="lines">
							<img src={LineWhite} alt="" />
							<img src={LineGreen} alt="" />
							<img src={LineWhite} alt="" />	
						</div>
					</div>
				</form>
			: 
				<div className="div-register">
					<div className="column">
					<CardSucess />
					<Btn 
						type='submit'
						text={<Link to='/login'><span className="white">Ir para Login</span></Link>}
					/>
					<div className="lines">
							<img src={LineWhite} alt="" />
							<img src={LineWhite} alt="" />	
							<img src={LineGreen} alt="" />
						</div>
					</div>
						
				</div>
			}
			
		</div>
	);
}

export default SignUp