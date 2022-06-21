import "./style.css";

function ModalPerfil({surname, name, arrow}) {
    return (
        <div className="container">
            <div>
                <strong>{surname}</strong>
                <p>{name}</p>
                <img src={arrow}/>
            </div>
        </div>
    )
}

export default ModalPerfil;