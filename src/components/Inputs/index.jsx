import "./style.css";

function Inputs({
	type,
	name,
	label,
	id,
	placeholder,
	value,
	handleChangeForm,
	error,
	border,
}) {
	return (
		<div className='column'>
			<label className='data-label' htmlFor={id}>
				{label}
			</label>
			<input
				className={`input ${border}`}
				type={type}
				name={name}
				id={id}
				placeholder={placeholder}
				value={value}
				onChange={(e) => handleChangeForm(e)}
			/>
			{error && (
				<span className='font-form-error align-form-error'>{error}</span>
			)}
		</div>
	);
}

export default Inputs;
