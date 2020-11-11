import React, { useState, useEffect } from 'react';
import $ from "jquery"
import "../components/styles/Tbody.css";

function TableWork(props) {   
    const [load]=useState(props.loadWorks)
    

    /*
    Esta funcnion selecciona el trabajo, compara con la lista de trabajos del
    cliente con el id seleccionado para asignar mediante setTrabajos que viene de works 
    (props) y asi en Works ya tenga el trabajo para enviarlo a NewWork
    */
    function handleClick(id){        
       const eleccion = props.listaTrabajo.find(t => t.ID === id);
       props.setTrabajoSeleccionado({
         id:eleccion.ID,
         nombre:eleccion.Nombre,
         detalle:eleccion.Detalle,
         importe:eleccion.Importe,
         pago:eleccion.Pago,
         costo:eleccion.Costo,
         ayudante:eleccion.costoAyudante,
        garantia:eleccion.Garantia, 
        fecha:eleccion.Fecha})  
              
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
                        props.listaTrabajo.map(t => {
                            return (
                                <tr
                               onClick={() => handleClick(t.ID)}
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