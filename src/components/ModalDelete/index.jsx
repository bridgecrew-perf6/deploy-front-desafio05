import Close from "../../assets/close.svg";
import Esclamacao from "../../assets/!.svg";
import "./style.css";

function ModalDelete(){
    return(
        <div className="modal-delete">
            <img src={Close} alt="" />
            <img src={Esclamacao} alt="" />
            <p>Tem certeza que deseja excluir esta cobrança?</p>
            <div className="buttons-yes-no">
                <button className="No">Não</button>
                <button className="yes">Sim</button>
            </div>


        </div>
    )
}

export default ModalDelete;