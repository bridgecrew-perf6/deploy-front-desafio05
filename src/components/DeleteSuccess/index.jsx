import DeleteSucessCharge from "../../assets/delete-sucess-charge-ok.svg";
import CloseDelete from "../../assets/close-delete-sucess.svg";
import "./style.css";

function DeleteSucess({ setOpenSucessDelete }) {
    return (
        <div className="delete-sucess-charges-blue">
            <div className="containe-sucess-delete">
                <img className="v-sucess" src={DeleteSucessCharge} alt="" />
                <p>Cobrança excluída com sucesso!</p>
                <img
                    className="x-delete"
                    src={CloseDelete}
                    alt=""
                    onClick={() => setOpenSucessDelete()}
                />
            </div>
        </div>
    )
}

export default DeleteSucess;