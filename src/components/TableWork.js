import React from 'react';
import "../components/styles/Tbody.css";

function TableWork(props) {
    

    return (
        <div className="Work">
            <h6 className="bg-danger text-center text-white p-1">Trabajos</h6>
            <table className="table table-hover table-dark"
                cellSpacing="5" cellPadding="10" border="3"
                id="customers"
            >
                <thead className="bg-danger">
                    
                    <tr>
                        <th className="text-center">ID</th>
                        <th className="text-center">Nombre</th>
                        <th className="text-center">Detalle</th>
                        <th className="text-center">Importe</th>
                        <th className="text-center">Pago</th>
                        <th className="text-center">Costo</th>
                        <th className="text-center">Deuda</th>
                        <th className="text-center">Ganancia</th>
                        <th className="text-center">Proveedor</th>
                        <th  className="text-center">Garantia</th>
                        <th className="text-center">Fecha</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.listaTrabajo.map(t => {
                            return (
                                <tr
                                    onClick={() => props.handleClickWork(t.ID)}
                                    key={t.ID.toString()}
                                >
                                    <th scope="row">{t.ID}</th>
                                    <td>{t.Nombre}</td>
                                    <td>{t.Detalle}</td>
                                    <td>{t.Importe}</td>
                                    <td>{t.Pago}</td>
                                    <td>{t.Costo}</td>
                                    <td className="text-danger">{t.Deuda}</td>
                                    <td>{t.Ganancia}</td>
                                    <td>{t.Proveedor}</td>
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