import "./style.css";

function NavLink({ image, text, color }) {
	return (
		<div className='container-navlink'>
			<img src={image} alt='clientes' />
			<h2 className={`navlink-font ${color}`}>{text}</h2>
		</div>
	);
}

export default NavLink;
