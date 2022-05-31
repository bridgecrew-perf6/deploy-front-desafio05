import "./style.css";

function Stepper({ obj, countState }) {
	return (
		<>
			<div className='div-stepper'>
				<div className='column'>
					<div className='row'>
						<div className='column ai-center'>
							<span className={`row ${obj[countState].classChangeOne}`}>
								<img src={obj[countState].stepperOne} alt='' />
							</span>
							<span className='line-down'></span>
						</div>
						<div className='column mg-left-24'>
							<h1 className='stepper-title'>Cadastre-se</h1>
							<h2 className='stepper-text'>
								Por favor, escreva seu nome e e-mail
							</h2>
						</div>
					</div>
					<div className='row'>
						<div className='column ai-center'>
							<span className={`row ${obj[countState].classChangeTwo}`}>
								<img src={obj[countState].stepperTwo} alt='' />
							</span>
							<span className='line-down'></span>
						</div>
						<div className='column mg-left-24'>
							<h1 className='stepper-title'>Escolha uma senha</h1>
							<h2 className='stepper-text'>Escolha uma senha segura</h2>
						</div>
					</div>
					<div className='row'>
						<div className='column ai-center'>
							<span className={`row ${obj[countState].classChangeThree}`}>
								<img src={obj[countState].stepperThree} alt='' />
							</span>
						</div>
						<div className='column mg-left-24'>
							<h1 className='stepper-title'>Cadastro realizado com sucesso</h1>
							<h2 className='stepper-text'>
								E-mail e senha cadastrados com sucesso
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Stepper;
