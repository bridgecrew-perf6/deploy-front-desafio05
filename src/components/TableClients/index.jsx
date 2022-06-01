import "./style.css";

function TableClients({ image }) {
	return (
		<div className='container-table-clients'>
			<div className='row table-charge-div-title'>
				<div className='row ai-center'>
					<img className='margin-right-img' src={image} alt='' />
					<h1 className='table-charge-title'>Cobranças Vencidas</h1>
				</div>
				<span className='table-charge-count'>10</span>
			</div>
			<div className='table-charge-div-subtitle'>
				<h1 className='font-charge-subtitle'>Clientes</h1>
				<h1 className='font-charge-subtitle'>Data de venc.</h1>
				<h1 className='font-charge-subtitle'>Valor</h1>
				<h1 className='font-charge-info'>Sara Silva</h1>
				<h1 className='font-charge-info'>223456787</h1>
				<h1 className='font-charge-info'>R$ 1000,00</h1>
			</div>
			<span className='table-charge-footer'>Ver todos</span>
		</div>
	);
}

export default TableClients;
