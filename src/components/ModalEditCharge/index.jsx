import CloseCharges from "../../assets/close-charges.svg";
import Charges from "../../assets/charges.svg";
import "./style.css";

function ModalEditChage({ setOpenEditModal }) {
    return (
        <div className="modal-edit-charge">
            <div className="conteiner-edit-chage-white">
                <img
                    className="close-modal-chage"
                    src={CloseCharges}
                    alt=""
                    onClick={() => setOpenEditModal(false)}
                />
                <div className="theme-edit-charge-modal">
                    <img src={Charges} alt="" />
                    <h3>Edição de Cobrança</h3>
                </div>

                <form>
                    <label>Nome*</label>
                    <input className="input-charges" />

                    <label>Descrição*</label>
                    <input className="description" placeholder="Digite a descrição" />

                    <label>Vencimento*</label>
                    <input className="input-charges" placeholder="Data de vencimento" />

                    <label>Valor*</label>
                    <input className="input-charges" placeholder="Digite valor" />

                    <label>Status*</label>
                    <div className="select-input-charges">
                        <div className="status-charge-input-select">
                            <input type="checkbox"/>
                            <label>Cobrança Paga</ label>
                        </ div>
                        <div className="status-charge-input-select">
                            <input type="checkbox"/>
                            <label>Cobrança Pendete</ label>
                        </ div>
                    </div>

                    <div className="button-edit-charge-modal">
                        <button className="cancel">Cancelar</button>
                        <button className="next">Aplicar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalEditChage;