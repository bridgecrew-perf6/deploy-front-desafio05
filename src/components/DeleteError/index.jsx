import DeleteErrorCharge from "../../assets/error-delete-charge.svg";
import CloseDelete from "../../assets/close-delete-charge-error.svg";
import "./style.css";

function DeleteError({ setOpenErrorDelete }) {
    return (
        <div className="delete-error-charges-red">
            <div className="containe-error-delete">
                <img className="x-error" src={DeleteErrorCharge} alt="" />
                <p>Esta cobrança não pode ser excluída!</p>
                <img
                    className="x-close"
                    src={CloseDelete}
                    onClick={() => setOpenErrorDelete(false)}
                    alt="" />
            </div>
        </div>
    )
}

export default DeleteError;