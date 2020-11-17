
import React, { useState, useEffect } from 'react';

function NewWork(props) {
    const [campos, setCampos] =useState(props)         
    const [id, setId] = useState(props.id);
    
    
    
    useEffect(() => {
        setId(props.id);
        setCampos(props)
       
    })


    return (
        <div hidden={props.hiddenForm}
            className="container">
            <br></br>
            <div className="form-inline">
                <div className="form-group">
                    <label for="nombreCliente"
                        className="form-control form-input bg-primary text-white rounded-pill form-line">
                        {id}</label>
                    <label for="nombreCliente"
                        className="form-control form-input bg-primary text-white rounded-pill form-line">
                        Nombre</label>
                    <input type="text"
                        id="nombreCliente"
                        className="form-control ml-1 mr-2"
                        aria-describedby="nombreCliente"
                        defaultValue={campos.nombre} />
                    <button className="btn btn-info mr-3 ml-2"
                        onClick={"_clean"}>limpiar Datos</button>
                    <label for="garantia"
                        className="form-control form-input bg-primary text-white rounded-pill form-line">
                        Garantía</label>
                    <input type="text"
                        id="garantia"
                        class="form-control ml-1 mr-2"
                        aria-describedby="garantia"
                        defaultValue={campos.trabajoSeleccionado.garantia} />
                    <label for="fecha"
                        className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        Fecha</label>
                    <input type="text"
                        id="fecha"
                        class="form-control ml-1 mr-2"
                        aria-describedby="fecha"
                        defaultValue={campos.trabajoSeleccionado.fecha} />
                    <button className="btn btn-info ml-2"                        
                        onClick={props.handleCancelNewWork}>Cancelar</button>
                </div>

            </div>

            <div className="container">
                <label className="form-control form-input bg-primary text-white rounded-pill form-line text-center">
                    Detalle</label>

                <textarea className="col col-5" id="detalle" rows="7"
                    placeholder="Ingrese descripción del trabajo"
                    defaultValue={campos.trabajoSeleccionado.detalle}
                    onChange=""
                />
                <spam className="float-left mr-1">
                    <div className="container">
                        <label for="importe"
                            className="bg-primary text-white  p-1">
                            Importe:
                        <input type="number"
                                className=" p-1 m-1"
                                id="importe"
                                aria-describedby="importe"
                                defaultValue={campos.trabajoSeleccionado.importe} />
                        </label>
                    </div>

                    <div className="container">
                        <label for="pago"
                            className="bg-primary text-white  pl-2 pr-2 p-2 ">
                            Pago:
                        <input type="number"
                                className=" pl-2 p-1 ml-3"
                                id="pago"
                                aria-describedby="Pago"
                                defaultValue={campos.trabajoSeleccionado.pago} />
                        </label>
                    </div>
                    <div>
                        <button className="btn btn-info ml-3"
                            onClick="">Guardar </button>
                        <button className="btn btn-danger ml-2"
                            onClick="">Eliminar</button>
                        <button className="btn btn-secondary ml-2"
                            onClick="">Costos</button>
                    </div>
                </spam>
                <spam className="float-right mr-3">
                    <div className="container">
                        <label for="Ayudante"
                            className="bg-primary text-white  p-1">
                            Ayudante:
                        <input type="number"
                                className=" p-1 m-1"
                                id="Ayudante"
                                aria-describedby="Ayudante"
                                defaultValue={campos.trabajoSeleccionado.ayudante} />
                        </label>
                    </div>

                    <div className="container">
                        <label for="Costo"
                            className="bg-primary text-white  pl-2 pr-2 p-2 ">
                            Costo:
                        <input type="number"
                                className=" pl-2 p-1 ml-3"
                                id="Costo"
                                aria-describedby="Costo"
                                defaultValue={campos.trabajoSeleccionado.costo} />
                        </label>
                    </div>
                    <div>
                        <label
                            className="bg-primary text-white  pl-2 pr-2 p-1 ml-3">
                            %:
                            <input size="2"
                                className="ml-1 text-center"
                                defaultValue="50" />
                        </label>
                        <button className="btn btn-info ml-2"
                            onClick="">Gastos </button>
                        <button className="btn btn-secondary ml-2"
                            onClick={props.goToPrint}>Remito</button>

                    </div>
                </spam>

            </div>
        </div>
    )
}
export default NewWork


