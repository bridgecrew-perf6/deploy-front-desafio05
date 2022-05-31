import "./style.css";

function Btn({type, text}) {
	return (
		<div className='container-form'>
			<button className="btn" type={type}>{text}</button>
		</div>
	);
}

export default Btn;
