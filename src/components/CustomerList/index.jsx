import "./style.css";

function CustomerList () {
    return(
        <div className="tables-clients">
            {/* <table>
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
                {clients &&
                    clients.map((cliente) => (
                        <tbody key={cliente.id}>
                            <tr>
                                <td>{cliente.name}</td>
                                <td>{cliente.cpf}</td>
                                <td>{cliente.email}</td>
                                <td>{cliente.phone}</td>
                                <td>
                                    <span className='status'>Inadimplente</span>
                                </td>
                                <td>
                                    <img src={Charge} alt='' />
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </table> */}
        </div> 
    )
}