import "./style.css";

function CardCharge({ image, bgColor, text }) {
	return (
		<div className={`row ${bgColor} container-card-charge jc-center ai-center`}>
			<img src={image} alt='' />
			<div className={`column ai-center`}>
				<h2 className='card-charge-title'>{text}</h2>
				<h1 className='card-charge-subtitle'>R$ 30.000</h1>
			</div>
		</div>
	);
}

export default CardCharge;
