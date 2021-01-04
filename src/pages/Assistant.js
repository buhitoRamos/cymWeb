import React, { useEffect, useState } from 'react';
import "../components/styles/Assistant.css"
import NavBar from '../components/NavBar';
import { useHistory } from "react-router-dom";
import TableAssistant from "../components/TableAssistant"
import $ from "jquery";

function Assistant() {
    const history = useHistory();
    const [listaAyudante, setListaAyudante]= useState([]);
    const [detalle, SetDetalle]=useState({});
    const [count, setCount]=useState(1)

    useEffect(() => {
        SetDetalle({
            id:"",
            nombre:"",
            importe:"",
            fecha:"",
            estado:"",
            total:0
        })
        _loadAssistant(2);
    }, [count])

    //Esta función carga la tabla de los trabajos del ayudante
    function _loadAssistant(el) {
        $.ajax({
            url: "http://localhost/backend/Ayudante.php",
            data: { el: el },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                setListaAyudante(response)
                let sumaTotal=0;
                response.forEach(element => {
                    if(element.estado==="0"){
                        sumaTotal=sumaTotal+parseFloat(element.importe);
                    }
                    SetDetalle({
                        id:"",
                        nombre:"",
                        fecha:"",
                        importe:"",
                        total:sumaTotal
                    })                    
                });
            }
        })
    }

    //Esta función carga los datos del cliente seleccionado para realizar pago
    function handleAssistant(id){
        const aux = listaAyudante.find(c => c.idgerman === id);
        let total=0;
        SetDetalle({
            ...detalle,
            id:aux.idgerman,
            nombre:aux.nombre,
            importe:aux.importe,
            fecha:aux.fecha,           
        })
    }

    //Esta función realiza el pago
    function _paymentAssistant(){
        console.log(detalle.id)
        $.ajax({
            url: "http://localhost/backend/Ayudante.php",
            data: { el: 3, id:detalle.id },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: () => {
                
                             
            }
        })
        _loadAssistant(2);
        setCount(count+1); 

    }



    return (
        <div>
            <NavBar
                txt="Ayudante"
                type="hidden"
                history={history}
                NewCustomer="hidden"
                newEntry="hidden"
            />
            <div className="mt-2">
                <span className="float-left">
                    <button className="btn btn-outline-dark mr-1 ml-1 Button"
                    onClick={()=>{_loadAssistant(1)}}>Todos</button>
                    <br />
                    <button className="btn btn-dark m-1 ButtonApagar"
                     onClick={()=>{_loadAssistant(2)}}>A pagar</button> 
                </span>
                <span className="card border-primary Card m-1 float-left">
                    <div className="card-header font-weight-bold">Total a Pagar</div>
                    <div className="card-body text-primary">
                        <h5>{detalle.total}</h5>
                    </div>
                </span>
                <div className="form-inline">
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ">
                        ID</label>
                    <input className="form-control rounded-pill form-line text-center "
                        type="text" style={{ width: "80px" }} value={detalle.id} />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        CLIENTE</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "250px" }} value={detalle.nombre} />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        IMPORTE</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "100px" }} value={detalle.importe} />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        FECHA</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "130px" }} value={detalle.fecha} />
                   
                        
                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-primary Button2"
                    onClick={_paymentAssistant}>Realizar pago</button>
                </div>
            </div>   
            <TableAssistant
            listaAyudante={listaAyudante}
            handleAssistant={handleAssistant}
            />      






        </div>
    )


}
export default Assistant