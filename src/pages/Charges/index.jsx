import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavLink from "../../components/NavLinks";
import HomeInactve from "../../assets/home-inactve.svg";
import ProfileImg from "../../assets/profile.svg";
import ChargePink from "../../assets/charge-pink.svg";
import Order from "../../assets/order.svg";
import Charge from "../../assets/charge.svg";
import "./style.css";


function Charges() {
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

            <div className="tables-clients">
                <table>
                    <thead>
                        <tr>
                            <th className='center-order'>
                                <img src={Order} alt='' />
                                Cliente
                            </th>
                            <th>CPF</th>
                            <th>E-mail</th>
                            <th>Telefone</th>
                            <th>Status</th>
                            <th>Criar Cobrança</th>
                        </tr>
                    </thead>
                   
                </table>
            </div> 

        </div>
    )
}
export default Charges;