
import React, { useState, useEffect } from 'react';

function NewWork(props) {
   
    

    /*
    En este componente recibimos todo el detalle desde trabajoSeleccionado
    menos el id y nombre porque hay 2 modos de acceder a este componente y son
    1) Seleccionado cliente
    2) seleccionado trabajo => la fecha y garantía ya vienen de trabajoSeleccionado
    */
    if (props.hiddenForm) {
        return (
            <div 
                className="container"
                onChange={props.onChange}>
                <br></br>
                <div className="form-inline">
                    <div className="form-group">
                        <label for="nombreCliente"
                            className="form-control form-input bg-primary text-white rounded-pill form-line">
                            {props.id}</label>
                        <label for="nombreCliente"
                            className="form-control form-input bg-primary text-white rounded-pill form-line">
                            Nombre</label>
                        <input type="text"
                            id="nombreCliente"
                            className="form-control ml-1 mr-2"
                            aria-describedby="nombreCliente"
                            value={props.nombre} />
                        <label for="ganancia"
                            className="form-control form-input bg-info text-white rounded-pill form-line">
                            Ganancia: {props.trabajoSeleccionado.ganancia}</label>
                        <label for="garantia"
                            className="form-control form-input bg-primary text-white rounded-pill form-line">
                            Garantía</label>
                        <input type="text"
                            id="garantia"
                            class="form-control ml-1 mr-2"
                            aria-describedby="garantia"
                            value={props.trabajoSeleccionado.garantia}
                            />
                        <label for="fecha"
                            className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                            Fecha</label>
                        <input type="text"
                            id="fecha"
                            class="form-control ml-1 mr-2"
                            aria-describedby="fecha"
                            value={props.trabajoSeleccionado.fecha}
                             />
                        <button className="btn btn-info ml-2"
                            onClick={props.handleCancelNewWork}>Cancelar</button>
                    </div>
                </div>
                <div className="container">
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line text-center">
                        Detalle</label>
                    <textarea className="col col-5" id="detalle" rows="10"
                        placeholder="Ingrese descripción del trabajo"
                        value={props.trabajoSeleccionado.detalle}/>
                    <spam className="float-left mr-1">
                        <div className="container">
                            <label for="importe"
                                className="bg-primary text-white  p-1">
                                Importe:
                                 <input type="number"
                                    className=" p-1 m-1"
                                    id="importe"
                                    aria-describedby="importe"
                                    
                                    value={props.trabajoSeleccionado.importe} />
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
                                    value={props.trabajoSeleccionado.pago} />
                            </label>
                        </div>
                        <div className="container">
                            <label for="cobrar"
                                className="bg-primary text-white  pl-2 pr-2 p-2 ">
                                cobrar:
                                   <input type="number"
                                    className="p-1 ml-2"
                                    id="cobrar"
                                    aria-describedby="cobrar"/>
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
                        <label for="porcentajeAyudante"
                                className="bg-primary text-white  pl-2 pr-2 p-1 ml-1"
                                >%:
                                       <input size="2"                                       
                                       type="text"
                                       id="porcentajeAyudante"
                                    className="ml text-center"                                                                  
                                    value={props.trabajoSeleccionado.porcentajeAyudante} />
                            </label>
                            <label 
                                className="bg-primary text-white  pl-2 pr-2 p-1 ml-3"
                                >Ayudante:
                                    <input size="5"                                 
                                    className=" ml-1"
                                    id="ayudante"
                                    aria-describedby="ayudante"
                                    value={props.trabajoSeleccionado.ayudante} />
                            </label>
                        </div>
                        <div className="container">
                            <label for="costo"
                                className="bg-primary text-white  p-2 ml-1"
                                >Costo:
                                     <input type="number"
                                    className=" pl-2 p-1 ml-3 pr-2"
                                    id="costo"
                                    aria-describedby="Costo"
                                    value={props.trabajoSeleccionado.costo} />
                            </label>
                        </div>
                        <div className="container">
                                <label for="Proveedor"
                                    className="bg-primary text-white p-2 ml-1"
                                    >Provee:
                                        <input type="text"
                                        className="pr-1 ml-2 pr-3"
                                        id="proveedor"
                                        aria-describedby="proveedor"
                                        value={props.trabajoSeleccionado.proveedor} />
                                </label>
                            </div>
                            <button className="btn btn-info ml-3"
                                onClick="">Gastos </button>
                            <button className="btn btn-secondary ml-2"
                                onClick={props.goToPrint}>Remito</button>
                                <button className="btn btn-info ml-2"
                                onClick={props.loadAssistant}>C. Ayudante</button>
                    </spam>
                </div>
            </div>
        )

    } else {
        return (null)
    }


}
export default NewWork


