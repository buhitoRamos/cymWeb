import React, { useState, useEffect } from 'react';
import $ from "jquery"
import "../components/styles/Tbody.css";

function TableWork(props) {

    const [listaTrabajo, setListaTrabajo] = useState([]);

    useEffect(() => {

        loadWorks();
    }, [])


    function loadWorks() {
        $.ajax({
            url: "http://localhost/backend/Trabajos.php",
            data: { el: 1 },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                setListaTrabajo(response)
            }
        })
    }

    return (
        <div className="Work">
            <table className="table table-hover table-dark"
                cellSpacing="5" cellPadding="10" border="3"
                id="customers"
            >
                <thead className="bg-danger">
                    <t6>Trabajos</t6>
                    <tr>
                        <th
                            className="text-center">ID</th>
                        <th
                            className="text-center">Nombre</th>
                        <th
                            className="text-center">Detalle</th>
                        <th
                            className="text-center">Importe</th>
                        <th
                            className="text-center">Pago</th>
                        <th
                            className="text-center">Costo</th>
                        <th
                            className="text-center">Garantia</th>
                        <th
                            className="text-center">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaTrabajo.map(t => {
                            return (
                                <tr
                                // onClick={() => handleCustomer(id)}

                                >
                                    <th scope="row">{t.ID}</th>
                                    <td>{t.Nombre}</td>
                                    <td>{t.Detalle}</td>
                                    <td>{t.Importe}</td>
                                    <td>{t.Pago}</td>
                                    <td>{t.Costo}</td>
                                    <td>{t.Garantia}</td>
                                    <td>{t.Fecha}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default TableWork