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
import Filter from "../../assets/filter.svg";
import Lupa from "../../assets/search.svg";
import "./style.css";


function Charges() {
    const [openProfileModal, setOpenProfileModal] = useState(false);
    return (
        <div className="page-charges">
            <nav className='container-navbar-items'>
                <Link to='/cobranca'>
                    <NavLink
                        image={HomeInactve}
                        text='Home'
                        color='color-navbar-text-default'
                        display='hidden'
                    />
                </Link>
                <NavLink
                    image={ProfileImg}
                    text='Clientes'
                    color='color-navbar-text-default'
                    display='hidden'
                />
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
                <div className='clients-container-area-header'>
                    <div className='theme'>
                        <img src={Charge} alt='' />
                        <h3>Cobranças</h3>
                    </div>
                    <div className='customer-interaction'>
                        <img src={Filter} alt='' />
                        <div className='clients-container-relative'>
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
                </table>
                </div>
            </div>
        </div>
    )
}
export default Charges;