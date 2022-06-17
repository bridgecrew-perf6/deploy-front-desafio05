import { useState } from "react";
import Close from "../../assets/close.svg";
import Warning from "../../assets/warning.svg";
import DeleteError from "../DeleteError";
import DeleteSuccess from "../DeleteSuccess";
import "./style.css";

function ModalDelete({ setOpenDeleteModal }) {
    const [openErroDelete, setOpenErrorDelete] = useState(false);
    const [openSucessDelete, setOpenSucessDelete] = useState(false);
    const [chargesClients, setchargesClients] = useState([]);

    async function deleteCharge() {

        try {

        } catch (error) {

        }
    }

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
                        <button
                            className="no"
                            onClick={() => setOpenDeleteModal(false)}
                        >Não
                        </button>
                        {chargesClients.map((charge) =>
                            <button key={charge.id}
                                className="yes"
                                onClick={() =>  deleteCharge()}
                            // onClick={() => setOpenSucessDelete(true) && setOpenDeleteModal(false)}
                            >Sim
                    </button>
                        )}
                </div>
            </div>
        </div>
            {
        openErroDelete && (
            <DeleteError setOpenErrorDelete={setOpenErrorDelete} />
        )
    }
    {
        openSucessDelete && (
            <DeleteSuccess setOpenSucessDelete={setOpenSucessDelete} />
        )
    }
        </div >
    )
}

export default ModalDelete;