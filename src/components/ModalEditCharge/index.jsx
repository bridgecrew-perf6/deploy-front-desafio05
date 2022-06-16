import Close from "../../assets/close.svg";
import Charges from "../../assets/charges.svg";
import "./style.css";

function ModalEditChage() {
    return (
        <div className="modal-edit-charge">
            <div className="conteiner-edit-chage-white">
                <img className="close-modal-chage" src={Close} alt="" />
                <div className="theme-edit-charge-modal">
                    <img src={Charges} alt="" />
                    <h3>Edição de Cobrança</h3>
                </div>

                <form>
                    <label>Nome*</label>
                    <input/>

                    <label>Descrição*</label>
                    <input placeholder="Digite a descrição"/>

                    <label>Vencimento*</label>
                    <input placeholder="Data de vencimento"/>

                    <label>Valor*</label>
                    <input placeholder="Digite valor" />

                    <label>Status*</label>
                    <select name="status" id="">
                        <option value="status1">Cobrança Paga</option>
                        <option value="status2">Cobrança Pendete</option>
                    </select>

                    <div className="button-edit-charge-modal">
                        <button>Cancelar</button>
                        <button>Aplicar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ModalEditChage;