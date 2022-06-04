import "./style.css";

function Inputs({ type, name, label, id, value, handleChangeForm, placeholder, style }) {
    return (
        <div className="column">
             <label className="data-label" htmlFor={id}>{label}</label>
            <input className="input"
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => handleChangeForm(e)}
                placeholder={placeholder}
                style= {style}
            />
        </div>
    )
}

export default Inputs