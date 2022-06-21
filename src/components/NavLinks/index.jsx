import "./style.css";

function NavLink({ image, text, color, display}) {
	return (
		<div className='container-navlink'>
			<div className='container-items'>
				<img src={image} alt='clientes' />
				<h2 className={`navlink-font ${color}`}>{text}</h2>
			</div>
			<hr className={`${display}`} />
		</div>
	);
}

export default NavLink;
