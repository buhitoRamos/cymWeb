import React from 'react'
import Logo from "../components/Logo"
import NavBar from "../components/NavBar"


//Esta es la pagina de impresión de remito y comprobante de recibo
class ToPrint extends React.Component {
    state = {
        nombre: this.props.location.nombre,
        detalle: this.props.location.detalle,
        fecha: this.props.location.fecha,
        direccion: this.props.location.direccion,
        id: this.props.location.id,
        tipo: this.props.location.tipo,
        detalleTipo:this.props.location.detalleTipo,
        tyc: this.props.location.tyc

    }

    render() {
        const { history } = this.props
        
        
        
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
                        <h4> <span className="badge badge-info">{this.state.tipo}</span>
                            <span className="badge badge-secondary m-1">{this.state.id}</span>
                            <span className="badge badge-secondary float-right m-1">{this.state.fecha}</span>
                        </h4>
                        <h5> 
                            <span className="badge badge-info float-center">
                                X - Documento no válido como factura
                            </span>
                        </h5>
                    </div>
                    <div>
                        <h4> <span className="badge badge-info mt-4">Nombre:</span>
                            <span className="m-1 h5">{this.state.nombre}</span>
                        </h4>
                        <h4> <span className="badge badge-info mt-1">Dirección:</span>
                            <span className=" m-1 h5">
                                {this.state.direccion}
                            </span>
                        </h4>
                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">
                                <h2><span className="badge badge-primary p-2 mt-3">
                                    {this.state.detalleTipo}
                            </span></h2>
                            </label>
                        </div>

                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="8">
                            {this.state.detalle}
                        </textarea>
                        <p hidden={this.state.tyc}>
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