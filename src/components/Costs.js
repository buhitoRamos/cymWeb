import React from 'react';
import "../components/styles/Costs.css";

function Costs() {

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
            
            </div>

            </form>
        </div>
    )

}
export default Costs