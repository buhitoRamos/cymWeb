
import React, { useState, useEffect} from 'react';

function NewWork(props) {

    const [hiddenForm, setHiddenForm] = useState(props.hiddenForm);
    const [nombre,setNombre] = useState(props.nombre);
    const [garantia, setGarantia] = useState(props.garantia);
    const [fecha, setFecha] = useState(props.fecha);

    useEffect(() => {
       setNombre(props.nombre);
       setHiddenForm(props.hiddenForm);
       setGarantia(props.garantia);
       setFecha(props.fecha);
     
    })

    function handleCancel() {
        setHiddenForm("hidden")
        
    }
    

    return (
        <div hidden={hiddenForm}
            className="container">
            <br></br>
            <form className="form-inline">
                <div className="form-group">
                    <label for="nombreCliente"
                        className="form-control form-input bg-primary text-white rounded-pill form-line">
                        Nombre</label>
                    <input type="text"
                        id="nombreCliente"
                        class="form-control ml-1 mr-2"
                        aria-describedby="nombreCliente"
                        defaultValue={nombre} />
                    <button className="btn btn-info mr-3 ml-2"
                        onClick="">limpiar Datos</button>
                    <label for="garantia"
                        className="form-control form-input bg-primary text-white rounded-pill form-line">
                        Garantía</label>
                    <input type="text"
                        id="garantia"
                        class="form-control ml-1 mr-2"
                        aria-describedby="garantia"
                        defaultValue={garantia} />
                    <label for="fecha"
                        className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        Fecha</label>
                    <input type="text"
                        id="fecha"
                        class="form-control ml-1 mr-2"
                        aria-describedby="fecha"
                        defaultValue={fecha} />
                    <button className="btn btn-info ml-2"
                        onClick={handleCancel}>Cancelar</button>
                </div>

            </form>
            <div className="container text-center">
                <label className="form-control form-input bg-primary text-white rounded-pill form-line mr-3">
                    Detalle</label>
                <textarea className="col col-10" id="detalle" rows="7"
                    defaultValue=""
                    onChange=""
                />
            </div>
        </div>
    )
}
export default NewWork