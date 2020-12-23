import React, {useEffect} from 'react';
import "../components/styles/Assistant.css"
import NavBar from '../components/NavBar';
import { useHistory } from "react-router-dom";

function Assistant() {
    const history = useHistory();

    useEffect(()=>{

    },[])

    //Esta función carga la tabla de los trabajos del ayudante
    function handleLoad(){

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
                    <button className="btn btn-outline-dark mr-1 ml-1 Button">Todos</button>
                    <br />
                    <button className="btn btn-dark m-1">A pagar</button>
                    <button className="btn btn-dark m-1">Pagos</button>
                </span>
                <span className="card border-primary Card m-1 float-left">
                    <div className="card-header font-weight-bold">Total a Pagar</div>
                    <div className="card-body text-primary">
                        <h5>3000</h5>
                    </div>
                </span>
                <div className="form-inline">
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line">
                        ID</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "50px" }} value="2" />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        CLIENTE</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "200px" }} value="Carlos Luis" />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        IMPORTE</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "100px" }} value="4000" />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        FECHA</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "100px" }} value="12/12/2020" />
                    <label className="form-control form-input bg-primary text-white rounded-pill form-line ml-2">
                        GARANTÍA</label>
                    <input className="form-control rounded-pill form-line text-center"
                        type="text" style={{ width: "100px" }} value="12/2/2021" />
                </div>
                <div className="text-center mt-2">
                    <button className="btn btn-primary Button2">Realizar pago</button>
                </div>
            </div>
            
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

                    }
                </tbody>

            </table>






        </div>
    )


}
export default Assistant