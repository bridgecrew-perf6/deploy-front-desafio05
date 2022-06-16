import Close from "../../assets/close.svg";
import Warning from "../../assets/warning.svg";
import "./style.css";

function ModalDelete({setOpenDeleteModal}) {
    return (
        <div className="modal-del-charge">
            <div className="container-white-del">
                <img
                    className="close-charge-delete"
                    src={Close}
                    alt=""
                    onClick={() => setOpenDeleteModal(false)}
                />
                <div className="warning-del-charge">
                    <img src={Warning} alt="" />
                    <p>Tem certeza que deseja excluir esta cobrança?</p>
                    <div className="buttons-yes-no">
                        <button className="no">Não</button>
                        <button className="yes">Sim</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalDelete;