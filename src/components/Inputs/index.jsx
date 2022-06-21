import "./style.css";

function Inputs({ type, name, label, id, value, handleChangeForm }) {
    return (
        <div className="column">
             <label className="data-label" htmlFor={id}>{label}</label>
            <input className="input"
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={(e) => handleChangeForm(e)}
            />
        </div>
    )
}

export default Inputs