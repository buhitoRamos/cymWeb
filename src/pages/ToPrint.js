import React, { useState } from 'react';
import Logo from "../components/Logo";
import NavBar from "../components/NavBar";
import { useHistory } from "react-router-dom";


//Esta es la pagina de impresión de remito y comprobante de recibo
//Componente realizado con Hooks
function ToPrint(props) {

    const [nombre, setNombre] = useState(props.location.nombre);
    const [detalle, setDetalle] = useState(props.location.detalle);
    const [fecha, setFecha] = useState(props.location.fecha);
    const [direccion, setDireccion] = useState(props.location.direccion);
    const [id, setId] = useState(props.location.id);
    const [tipo, setTipo] = useState(props.location.tipo);
    const [detalleTipo, setDetalleTipo] = useState(props.location.detalleTipo);
    const [tyc, setTyc] = useState(props.location.tyc);
    const history=useHistory();
        
        return (
            <div >
                <NavBar
                    txt="Comprobante"
                    type="hidden"
                    history={history}
                    NewCustomer="hidden"
                    newEntry="hidden"
                />
                <div className="container">
                    <div className="">
                        <Logo />
                    </div>
                    <div>
                        <h4> <span className="badge badge-info">{tipo}</span>
                            <span className="badge badge-secondary m-1">{id}</span>
                            <span className="badge badge-secondary float-right m-1">{fecha}</span>
                        </h4>
                        <h5> 
                            <span className="badge badge-info float-center">
                                X - Documento no válido como factura
                            </span>
                        </h5>
                    </div>
                    <div>
                        <h4> <span className="badge badge-info mt-4">Nombre:</span>
                            <span className="m-1 h5">{nombre}</span>
                        </h4>
                        <h4> <span className="badge badge-info mt-1">Dirección:</span>
                            <span className=" m-1 h5">
                                {direccion}
                            </span>
                        </h4>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                <h2><span className="badge badge-primary p-2 mt-3">
                                    {detalleTipo}
                            </span></h2>
                            </label>
                        </div>

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8">
                            {detalle}
                        </textarea>
                        <p hidden={tyc}>
                            * Pasado los 90 dias de no retirar el equipo, la casa no se responsabiliza
                              por perdidas y/o extravio del mismo. <br></br>
                            * Los presupuestos de hasta $1500 se reparan directo.
                        </p>
                    </div>
                </div>
            </div>
        )
    }

export default ToPrint