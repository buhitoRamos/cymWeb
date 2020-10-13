import React from "react"
import Logo from "../components/Logo"
import NavBar from "../components/NavBar"

class ToPrint extends React.Component {

    render() {
        const { history } = this.props
        return (
            <div >
                <NavBar
                    txt="Comprobante"
                    type="hidden"
                    history={history}
                    NewCustomer="hidden"
                />
                <div className="container">
                    <div className="">
                        <Logo />
                    </div>

                    <div>
                        <h4> <span className="badge badge-info">Ingreso N°:</span>
                            <span className="badge badge-secondary m-1">100</span>
                            <span className="badge badge-secondary float-right m-1">13/10/20</span>
                        </h4>
                        <h5>
                            <span className="badge badge-secondary float-center">
                                X - Documento no válido como factura
                            </span>
                        </h5>
                    </div>
                    <div>
                        <h4> <span className="badge badge-info mt-4">Nombre:</span>
                            <span className="m-1 ">Carlos Perez</span>
                        </h4>
                        <h4> <span className="badge badge-info mt-1">Dirección:</span>
                            <span className=" m-1">
                                Rivadavia xxxx, Ramos Mejia
                                </span>
                        </h4>

                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                <h2><span className="badge badge-primary p-2 mt-3">
                                    Detalle de Ingreso
                            </span></h2>
                            </label>
                        </div>

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8">
                            Formateo e instalación de windows 10 x64
                            con limpieza de hardware
                                </textarea>
                        <p>
                            * Pasado los 90 dias de no retirar el equipo, la casa no se responsabiliza
                                    por perdidas y/o extravio del mismo. <br></br>
                                    * Los presupuestos de hasta $1500 se reparan directo.
                                </p>
                    </div>



                </div>
            </div>
        )
    }


}
export default ToPrint