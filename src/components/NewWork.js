
import React, { useState, useEffect } from 'react';

function NewWork(props) {    

    /*
    En este componente recibimos todo el detalle desde trabajoSeleccionado
    menos el id y nombre porque hay 2 modos de acceder a este componente y son
    1) Seleccionado cliente
    2) seleccionado trabajo => la fecha y garantía ya vienen de trabajoSeleccionado
    */
if(props.hiddenForm){
    return (
        <div 
    className="container">
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
                defaultValue={props.nombre} />
            <button className="btn btn-info mr-3 ml-2"
                onClick={"_clean"}>limpiar Datos</button>
            <label for="garantia"
                className="form-control form-input bg-primary text-white rounded-pill form-line">
                Garantía</label>
            <input type="text"
                id="garantia"
                class="form-control ml-1 mr-2"
                aria-describedby="garantia"                
                value={props.trabajoSeleccionado.garantia}
                onChange={props.onChange} />
            <label for="fecha"
                className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                Fecha</label>
            <input type="text"
                id="fecha"
                class="form-control ml-1 mr-2"
                aria-describedby="fecha"                
                value={props.trabajoSeleccionado.fecha}
                onChange={props.onChange} />
            <button className="btn btn-info ml-2"                        
                onClick={props.handleCancelNewWork}>Cancelar</button>
        </div>

    </div>

    <div className="container">
        <label className="form-control form-input bg-primary text-white rounded-pill form-line text-center">
            Detalle</label>

        <textarea className="col col-5" id="detalle" rows="10"
            placeholder="Ingrese descripción del trabajo"
            value={props.trabajoSeleccionado.detalle}
            onChange={props.onChange}
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
                        aria-describedby="cobrar"
                        value="{campos.trabajoSeleccionado.pago}" />
                        
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
                        value={props.trabajoSeleccionado.ayudante} />
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
                        value={props.trabajoSeleccionado.costo} />
                </label>
            </div>
            <div>
                <label
                    className="bg-primary text-white  pl-2 pr-2 p-1 ml-3">
                    %:
                    <input size="2"
                        className="ml-1 text-center"
                        value="50" />
                </label>
                <button className="btn btn-info ml-2"
                    onClick="">Gastos </button>
                <button className="btn btn-secondary ml-2"
                    onClick={props.goToPrint}>Remito</button>
                     <div className="container">
                <label for="Proveedor"
                    className="bg-primary text-white pl-2 pr-2 p-2 ">
                    Provee:
                <input type="text"
                        className="pr-1 ml-2 "
                        id="Proveedor"
                        aria-describedby="Proveedor"
                        value={props.trabajoSeleccionado.proveedor} />
                </label>
            </div>
            </div>
        </spam>
    </div>
</div>
)
    
} else{
    return(null)
}

    
}
export default NewWork


