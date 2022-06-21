import Success from "../../assets/final-check.svg";
import "./style.css";

function CardSucess() {
	return (
		<div className='container-form bg-success'>
			<img className='resize-img' src={Success} alt='' />
			<h1 className='data-title'>Cadastro realizado com sucesso!</h1>
		</div>
	);
}

export default CardSucess;
