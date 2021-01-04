import React, { useEffect, useState } from "react";


function TableAssistant(props){

    

    function _setEstado(estado){
        let nuevoEstado="Pago"
        if(estado==="0"){
            nuevoEstado="A pagar"
        }
        return nuevoEstado;
    }

    return(
        <div>
            <table className="table table-hover table-dark"
                cellSpacing="10" cellPadding="10" border="3"
                id="Assistant"
            >
                <thead className="bg-danger">
                    <tr>
                        <th
                            className="text-center">ID</th>
                        <th
                            className="text-center">Cliente</th>
                        <th
                            className="text-center">Importe</th>
                        <th
                            className="text-center">Fecha</th>
                        <th
                            className="text-center">Estado</th>
                    </tr>
                </thead>
                <tbody >    
                    {                        
                            props.listaAyudante.map(ayudante => {
                                return (
                                    
                                    <tr
                                        onClick={() => props.handleAssistant(ayudante.idgerman)}                                    
                                        key={ayudante.idtrabajo}>
                                        <th scope="row">{ayudante.idgerman}</th>
                                        <td>{ayudante.nombre}</td>
                                        <td>{ayudante.importe}</td>
                                        <td>{ayudante.fecha}</td>
                                        <td>{_setEstado(ayudante.estado)}</td>
                                    </tr>
                                )
                            })                        

                    }
                </tbody>

            </table>
        </div>
    )

}
export default TableAssistant