import "./style.css";

function Card({children, header}) {
	return (
		<div className='container-form'>
			<h1 className="data-title">{header}</h1>
			{children}
		</div>
	);
}

export default Card;
