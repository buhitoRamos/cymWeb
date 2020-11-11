import React, { useState, useEffect } from 'react';
import "../components/styles/Tbody.css";

function TableCustomer(props) {

    return (

        <div className="Tab">
            <table className="table table-hover table-dark"
                cellSpacing="10" cellPadding="10" border="3"
                id="customers"
            >
                <thead className="bg-danger">
                    <tr>
                        <th
                            className="text-center">ID</th>
                        <th
                            className="text-center">Nombre</th>
                        <th
                            className="text-center">Direccion</th>
                        <th
                            className="text-center">Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaClientes.map(customer => {
                            return (
                                <tr
                                    onClick={() => props.handleCustomer(customer.id)}
                                    
                                    key={customer.id}>
                                    <th scope="row">{customer.id}</th>
                                    <td>{customer.nombre}</td>
                                    <td>{customer.direccion}</td>
                                    <td>{customer.telefono}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>

    )


}
export default TableCustomer