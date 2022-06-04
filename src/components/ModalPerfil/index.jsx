import "./style.css";
// import triangle from "../../assets/triangle.svg";
// import toEdit from "../../assets/to-edit.svg";
// import exit from "../../assets/exit.svg"

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