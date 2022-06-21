import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import NavLink from "../../components/NavLinks";
import Login from "../../components/Login";
import HomeInactve from "../../assets/home-inactve.svg";
import ProfileImg from "../../assets/profile.svg";
import ChargePink from "../../assets/charge-pink.svg";
import Order from "../../assets/order.svg";
import ImgProfile from "../../assets/img-profile.png";
import ArrowImg from "../../assets/arrow.svg";
import ImgEdit from "../../assets/to-edit.svg";
import ImgLogout from "../../assets/exit.svg";
import Charge from "../../assets/charges.svg";
import EditCharge from "../../assets/edit-charger.svg";
import Filter from "../../assets/filter.svg";
import Lupa from "../../assets/search.svg";
import Delete_Charge from "../../assets/delete-charge.svg";
import ModalDelete from "../../components/ModalDelete";
import ModalChargeEdit from "../../components/ModalChargeEdit";
import Search  from "../../components/Search";
// import DeleteError from "../../components/DeleteError";
// import DeleteSuccess from "../../components/DeleteSuccess";

import "./style.css";


function Charges() {
    const [chargesClients, setchargesClients] = useState([]);
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [openEditModal, setOpenEditModal] = useState(false);
    const [openDeleteModal, setOpenDeleteModal] = useState(false);
    const [search, setSearch] = useState('')

    async function loadCharges() {
        try {
            const response = await api.get('/transaction/all');
            setchargesClients(response.data);

        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        loadCharges();
    }, [])

    return (
        <div className="page-charges">
            <nav className='container-navbar-items'>
                <Link to='/home'>
                    <NavLink
                        image={HomeInactve}
                        text='Home'
                        color='color-navbar-text-default'
                        display='hidden'
                    />
                </Link>
                <Link to='/clientes'>
                    <NavLink
                        image={ProfileImg}
                        text='Clientes'
                        color='color-navbar-text-default'
                        display='hidden'
                    />
                </Link>
                <NavLink image={ChargePink} text='Cobranças' color='main-pink' />
            </nav>

            <div className="page-charge-rigth">
                <header>
                    <p>Cobranças</p>
                    <div className="page-charge-header">
                        <Login
                            image={ImgProfile}
                            imageArrow={ArrowImg}
                            imageEdit={ImgEdit}
                            imageLogout={ImgLogout}
                            setOpenProfileModal={setOpenProfileModal}
                        />
                    </div>
                </header>

                <hr className='hr-charge-botton-header' />

                <div className="centralize-charge">
                    <div className='charge-area-header'>
                        <div className='img-h3-charge-header'>
                            <img src={Charge} alt='' />
                            <h3>Cobranças</h3>
                        </div>
                        <div className='charge-interaction-img-input'>
                            <img src={Filter} alt='' />
                            <div className='charge-centralize-position-relative'>
                                <input
                                    placeholder='Pesquisa'
                                    value={search}
                                    onChange={(ev) => setSearch(ev.target.value)} />
                                <img src={Lupa} alt='' />
                            </div>
                        </div>
                    </div>
                    <div className="table-charge">
                        <table>
                            <thead>
                                <tr>
                                    <th className='center-order'>
                                        <img src={Order} alt='' />
                                        Cliente
                                    </th>
                                    <th className='center-order'>
                                        <img src={Order} alt='' />
                                        ID Cob.
                                    </th>
                                    <th>Valor</th>
                                    <th>Data de venc.</th>
                                    <th>Status</th>
                                    <th>Descrição</th>
                                </tr>
                            </thead>
                            {chargesClients.length === 0 ? <tr><td colSpan={"6"}><Search /></td></tr>  : 
                            chargesClients.map((charge) => (
                                <tbody key={charge.id}>
                                    <tr>
                                        <td>{charge.name}</td>
                                        <td>{charge.id}</td>
                                        <td>{charge.value}</td>
                                        <td>{charge.date}</td>
                                        <td>
                                            <span className='status'>{charge.status}</span>
                                        </td>
                                        <td>{charge.description}</td>

                                        <td>
                                            <div className="img-charge-table">
                                                <img
                                                    className="edit-charge-button"
                                                    src={EditCharge}
                                                    alt=''
                                                    onClick={() => setOpenEditModal(true)}

                                                />
                                                <img
                                                    className="delete-charge-button"
                                                    src={Delete_Charge}
                                                    alt=""
                                                    onClick={() => setOpenDeleteModal(true)}
                                                />
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                    </div>

                    {openEditModal && (
                        <ModalChargeEdit setOpenEditModal={setOpenEditModal} />
                    )}
                    {openDeleteModal && (
                        <ModalDelete setOpenDeleteModal={setOpenDeleteModal} />
                    )}

                </div>

            </div>
        </div>
    )
}
export default Charges;