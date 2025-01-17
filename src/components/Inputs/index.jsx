import InputMask from "react-input-mask";
import "./style.css";

function Inputs({
	type,
	name,
	label,
	id,
	value,
	handleChangeForm,
	placeholder,
	style,
	error,
	reveal,
	mask,
}) {
	function handleVisible() {
		const inputType = document.getElementById(id);
		if (inputType.type === "password") {
			return (inputType.type = "text");
		}
		return (inputType.type = "password");
	}
	return (
		<div className='column'>
			<label className='data-label' htmlFor={id}>
				{label}
			</label>
			<div className='container-component-input'>
				<InputMask
					className={`input ${error === "" ? null : `danger-border-error`}`}
					type={type}
					name={name}
					id={id}
					value={value}
					onChange={(e) => handleChangeForm(e)}
					placeholder={placeholder}
					style={style}
					mask={mask}
				/>
				{reveal && (
					<img
						className='component-position-img'
						src={reveal}
						alt=''
						onClick={handleVisible}
					/>
				)}
			</div>
			{error && (
				<span className='font-form-error align-form-error'>{error}</span>
			)}
		</div>
	);
}

export default Inputs;
