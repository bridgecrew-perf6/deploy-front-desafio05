import People from "../../assets/people.svg";
import Close from "../../assets/close.svg";
import Inputs from "../Inputs";
import './style.css';
import { alignProperty } from "@mui/material/styles/cssUtils";

function ClientsModal({ open, handleClose }) {

   async function handleSubmit(e){
        e.preventDefaul()

        // try{
        //     const response = await alignProperty.post('/registerClient', 
        //     {
        //         name: f ,
        //         email: f , 
        //         cpf: f,
        //         phone: f,
        //         adress: f,
        //         complemento: f,
        //         cep: f,
        //         district: f,
        //         city: f,
        //         uf: 
        //     },
        //     {
        //         headers: {
        //             Authorization: `Bearer ${token}` 
        //         }
        //     }
        //     )
        // }catch(error){

        // }
    }
    return (
        <>
            {open &&
                <div className="register-clients">
                    <div className="container">
                        <div className="container-header">
                            <div className="theme-modal">
                                <img src={People} />
                                <h3>Cadastro do Cliente</h3>
                            </div>
                            <img
                                src={Close}
                                onClick={() => handleClose()}
                            />
                        </div>

                        <form>
                            <Inputs 
                                type="text"
                                name="nome"
                                label="Nome*"
                                id="name"
                                placeholder="Digite o nome"
                                style={{ width: "487px" }}
                            />

                            <Inputs
                                type="email"
                                name="email"
                                label="E-mail*"
                                id="email"
                                placeholder="Digite seu e-mail"
                                style={{ width: "487px" }}
                            />
                            <div className="cpf-phone">
                                <Inputs
                                    type="text"
                                    name="cpf"
                                    label="CPF*"
                                    id="cpf"
                                    placeholder="Digite o CPF"
                                    style={{width:"235px"}}

                                />

                                <Inputs
                                    type="text"
                                    name="phone"
                                    label="Telefone*"
                                    id="phone"
                                    placeholder="Digite o telefone"
                                    style={{ width: "235px" }}
                                />
                            </div>
                            <Inputs
                                type="text"
                                name="adress"
                                label="Endereço*"
                                id="adress"
                                placeholder="Digite o endereço"
                                style={{ width: "487px" }}
                            />

                            <Inputs
                                type="text"
                                name="complemento"
                                label="Complemento"
                                id="complemento"
                                placeholder="Digite o complemento" 
                                style={{ width: "487px" }}
                                />
                                

                            <div className="cep-district">
                                <Inputs
                                    type="text"
                                    name="cep"
                                    label="CEP"
                                    id="cep"
                                    placeholder="Digite o CEP" 
                                    style={{ width: "235px" }}
                                    />

                                <Inputs
                                    type="text"
                                    name="district"
                                    label="Bairro"
                                    id="district"
                                    placeholder="Digite o bairro" 
                                    style={{ width: "235px" }}
                                    />
                                    
                            </div>

                            <div className="city-uf">
                                <Inputs
                                    type="text"
                                    name="city"
                                    label="Cidade"
                                    id="city"
                                    placeholder="Digite a cidade" 
                                    style={{ width: "303px" }}
                                    />


                                <Inputs
                                    type="text"
                                    name="uf"
                                    label="UF"
                                    id="uf"
                                    placeholder="Digite a UF" 
                                    style={{ width: "160px" }}
                                    />
                            </div>

                            <div className="buttons">
                                <button className="cancel">Cancelar</button>
                                <button className="apply">Aplicar</button>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    )
}

export default ClientsModal;