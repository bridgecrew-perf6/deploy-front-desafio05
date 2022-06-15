import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
import DeleteCharge from "../../assets/delete-charge.svg";
import "./style.css";


function Charges() {
    const [openProfileModal, setOpenProfileModal] = useState(false);
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
                                <input placeholder='Pesquisa' />
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
                            <tbody>
                                <tr>
                                    <td>Sara</td>
                                    <td>4564512</td>
                                    <td>R$ 500,00</td>
                                    <td>26/01/2021</td>
                                    <td>
                                        <span className='status'>Vencida</span>
                                    </td>
                                    <td>rftaeryadfgfdgtaretgtghydrtuyru</td>

                                    <td>
                                        <div className="img-charge-table">
                                        <img src={EditCharge} alt='' />
                                        <img src={DeleteCharge} alt="" />
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Charges;