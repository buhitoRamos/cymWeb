import React from 'react';
import "../components/styles/Costs.css";

function Costs(props) {


    
        return (
            <div>
                <form className="form">
                    <div className="row">
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1 bg-primary text-white rounded-pill">ID TRABAJO</label>
                            <br />
                            <input
                                id="ID"
                                value="204"
                                type="text"
                                onChange=""
                                className="ml-1 form-input rounded-pill form-line text-center text-primary importe"
                            />
                        </div>
    
    
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1  bg-primary text-white rounded-pill">CLIENTE</label>
                            <br />
                            <input
                                id="cliente"
                                value="Pedro"
                                type="text"
                                onChange=""
                                className="ml-1 mt-1 form-input rounded-pill form-line text-center text-primary"
                            />
                        </div>
    
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1 bg-primary text-white rounded-pill">COBRA O COBRO</label>
                            <br />
                            <input
                                id="cobro"
                                value="Martin"
                                type="text"
                                onChange=""
                                className="ml-1 mt-1 form-input rounded-pill form-line text-center text-primary"
                            />
                        </div>
    
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1 bg-primary text-white rounded-pill">TOTAL MARTIN</label>
                            <br />
                            <input
                                id="totalMartin"
                                value="300"
                                type="text"
                                onChange=""
                                className="ml-1 mt-1 form-input rounded-pill form-line text-center text-primary importe"
                            />
                        </div>
    
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1 bg-primary text-white rounded-pill">TOTAL GERMAN</label>
                            <br />
                            <input
                                id="totalAyudante"
                                value="200"
                                type="text"
                                onChange=""
                                className="ml-1 mt-1 form-input rounded-pill form-line text-center text-primary importe"
                            />
                        </div>
    
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1 bg-primary text-white rounded-pill">TOTAL GASTOS</label>
                            <br />
                            <input
                                id="totalGastos"
                                value="500"
                                type="text"
                                onChange=""
                                className="ml-1 form-input rounded-pill form-line text-center text-primary importe"
                            />
                        </div>
                        <div className="col-sm text-center">
                            <label className="p-1 mt-1 bg-primary text-white rounded-pill">ESTADO</label>
                            <br />
                            <input
                                id="saldo"
                                value="SALDADO"
                                type="text"
                                onChange=""
                                className="ml-1 form-input rounded-pill form-line text-center text-primary importe"
                            />
                        </div>
    
                    </div>
                </form>
                <form className="form">
                    <div className="row">
                        <div className="radio ml-4">
                            <div className="col-sm  text-info bg-dark  m-1 ">
                                <h6 className="text-center">Asignar cobro a:</h6>
                                <div className="pl-2">
                                    <input className="form-check-input" type="radio" name="radio" id="radioMartin" />
                                    <label classNames="form-check-label" for="radioMartin">
                                        Martin
                            </label>
                                </div>
                                <div className="pl-2">
                                    <input className="form-check-input" type="radio" name="radio" id="radioGerman" />
                                    <label className="form-check-label" for="radioGerman">
                                        German
                            </label>
                                </div>
                            </div>
                        </div>
                        <div className="radio">
                            <div className="col-sm ">
    
                                <div className="m-1">
                                    <button className="btn btn-danger">Borrar</button>
                                </div>
                                <div className="m-1">
                                    <button className="btn btn-primary">Saldar</button>
                                </div>
                                <div className="m-1 text-center">
                                    <button className="btn btn-dark  pr-4 text-center"
                                    onClick={props.handleExit}>Salir</button>
                                </div>
                            </div>
                        </div>
                        <div className="row gasto">
                            <div className="col-lg bg-secondary mb-1 mt-1 p-2">
                                <button className="btn btn-primary">Editar</button>
                                <button className="btn btn-primary m-3">Borrar</button>
                                <button className="btn btn-primary m-1">Nuevo</button>
                                <input
                                    id="idGasto"
                                    placeholder="id gasto"
                                    value=""
                                    type="text"
                                    onChange=""
                                    className="ml-5  form-input rounded-pill form-line text-center text-primary importe"
                                />
                                <br />
                                
    
                                    <textarea 
                                    className="col col-7 mr-1" id="Detalle" rows="5"/>
    
    
                                    <div className="float-right mr-5 mb-1">
                                        <div className="radio bg-dark text-white">
                                        <h6 className="text-center">Gasto de:</h6>
                                        <div className="pl-4">
                                            <input className="form-check-input" type="radio" name="radio" id="radioGmartin" />
                                            <label classNames="form-check-label" for="radioGmartin">
                                                Martin</label>
                                        </div>
                                        <div className="pl-4">
                                            <input className="form-check-input" type="radio" name="radio" id="radioGgerman" />
                                            <label className="form-check-label" for="radioGgerman">
                                                German</label>
                                        </div>
                                        </div>
                                        <input/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )

   

   

}
export default Costs