import "./style.css";

function TableCharge() {
	return (
		<div className='container-table-charge'>
			<div className='row table-charge-div-title'>
				<h1 className='table-charge-title'>Cobranças Vencidas</h1>
				<span className='table-charge-count'>10</span>
			</div>
			<div className='table-charge-div-subtitle'>
				<h1 className='font-charge-subtitle'>Cliente</h1>
				<h1 className='font-charge-subtitle'>ID da cob.</h1>
				<h1 className='font-charge-subtitle'>Valor</h1>
				<h1 className='font-charge-info'>Sara Silva</h1>
				<h1 className='font-charge-info'>223456787</h1>
				<h1 className='font-charge-info'>R$ 1000,00</h1>
			</div>
			<span className='table-charge-footer'>Ver todos</span>
		</div>
	);
}

export default TableCharge;
