import "./style.css";

function TableCharge({ obj, countStyleColor, text }) {
	return (
		<div className='container-table-charge'>
			<div className='row table-charge-div-title'>
				<h1 className='table-charge-title margin-text-charge'>{text}</h1>
				<span className={`table-charge-count ${countStyleColor}`}>
					{obj.length}
				</span>
			</div>
			<div className='table-charge-div-subtitle'>
				<h1 className='font-charge-subtitle'>Cliente</h1>
				<h1 className='font-charge-subtitle'>ID da cob.</h1>
				<h1 className='font-charge-subtitle'>Valor</h1>
				{obj
					.map((value) => {
						return (
							<>
								<h1 className='font-charge-info'>{value.clientName}</h1>
								<h1 className='font-charge-info'>{value.clientIdCharge}</h1>
								<h1 className='font-charge-info'>{value.clientValueCharge}</h1>
							</>
						);
					})
					.filter((value, index) => index < 4)}
			</div>
			<span className='table-charge-footer'>Ver todos</span>
		</div>
	);
}

export default TableCharge;
