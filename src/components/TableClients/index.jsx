import "./style.css";

function TableClients({ image, obj2, countStyleColor, text }) {
	return (
		<div className='container-table-clients'>
			<div className='row table-charge-div-title'>
				<div className='row ai-center'>
					<img className='margin-right-img' src={image} alt='' />
					<h1 className='table-charge-title'>{text}</h1>
				</div>
				<span className={`table-charge-count ${countStyleColor}`}>10</span>
			</div>
			<div className='table-charge-div-subtitle'>
				<h1 className='font-charge-subtitle'>Clientes</h1>
				<h1 className='font-charge-subtitle'>Data de venc.</h1>
				<h1 className='font-charge-subtitle'>Valor</h1>
				{obj2
					.map((value) => {
						return (
							<div key={value.id}>
								<h1 className='font-charge-info'>{value.name}</h1>
								<h1 className='font-charge-info'>{value.expiration}</h1>
								<h1 className='font-charge-info'>{value.amount}</h1>
							</div>
						);
					})
					.filter((value, index) => index < 4)}
			</div>
			<span className='table-charge-footer'>Ver todos</span>
		</div>
	);
}

export default TableClients;
