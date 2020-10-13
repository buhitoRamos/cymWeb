import React from "react"
import NavBar from "../components/NavBar"
import $ from "jquery"

class NewEntry extends React.Component {

    state = {
        idCliente: this.props.location.idCliente,
        listaIngreso: [            
        ]
    }
    componentDidMount() {
        console.log("el id del cliente es:" + this.state.idCliente)
        this.loadEntry();
        
    }

    loadEntry=()=>{
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: { id: this.state.idCliente },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaIngreso: response
                })
            }
        })
    }
    imprimir=()=>{
        console.log(this.state.listaIngreso[0])
    }
    

    render() {

        const { history, idCliente } = this.props
        return (
            <div>
                <NavBar
                    txt="Ingreso"
                    type="hidden"
                    history={history}
                    NewCustomer="hidden"
                />
                <div className="">
                    <table className="table table-hover table-dark"
                        cellSpacing="10" cellPadding="10" border="3"
                        id="customers"
                        onClick={this.imprimir}
                    >
                        <thead className="bg-danger">
                            <tr>
                                <th className="text-center">ID</th>
                                <th className="text-center">Detalle</th>
                                <th className="text-center">Fecha</th>

                            </tr>
                        </thead>
                        <tbody>


                            {
                                /*
                                this.state.listaClientes.map(customer => {
                                    return (
                                        <CustomerTable
                                            key={customer.idCliente}
                                            handleCustomer={this.handleCustomer}
                                            id={customer.idCliente}
                                            nombre={customer.nombre}
                                            direccion={customer.direccion}
                                            telefono={customer.telefono}
                                        />
                                    )
                                })
                                */
                            }

                        </tbody>
                    </table>
                </div>




            </div>

        )
    }

}
export default NewEntry