import React from 'react'
import NavBar from "../components/NavBar"
import $ from "jquery"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import "../components/styles/Tbody.css"
import CustomerTable from "../components/CustomerTable"
import TableCustomer from "../components/TableCustomers"
import EditCustomerForm from "../components/EditCustomerForm"

//Pagina de clientes, para ver/editar/borrar y agregar nuevos.
class Customers extends React.Component {
    state = {
        newCustomer: false,
        id: "",
        nombre: "",
        formUpdate: true,
        cliente: "",
        direccion: "",
        telefono: "",
        listaClientes: [
            {
                idCliente: "",
                nombre: "",
                direccion: "",
                telefono: ""
            }
        ],
    }

    //Evento que carga a todos los clientes al ingresar.
    componentDidMount() {
        this.loadCustomers();
    }

    //Funcion que carga todos los clientes o cliente tipeado.
    loadCustomers = () => {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: { cl: "", el: 1 },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaClientes: response,
                })
            }
        })
    }

    //Evento que escucha todo lo que se tipea y guarda en estado.
    handleChange = e => {
        e.preventDefault();
        this.setState({
            ...this.state.cliente,
            cliente: e.target.value
        })
        setTimeout(() => this.loadCustomers(), 2000)
    }

    //Cuando se cancela un ingreso/edicion de contacto.
    handleCancel = () => {
        this.setState({
            newCustomer: false,
            formUpdate: true,
            nombre: "",
            telefono: "",
            direccion: ""
        })
        this.loadCustomers();
    }

    //Esta Función nos levanta el formulario para crear nuevos clientes.
    handleNewCustomerForm = () => {
        this.setState({
            nombre: "Ingrese Nombre",
            telefono: "Ingrese Teléfono",
            direccion: "Ingrese Dirección",
            newCustomer: true,
            formUpdate: false,
        })
    }

    //Para editar clientes.
    handleEditCustomer = () => {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: {
                el: 2,
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
                idCliente: this.state.id,
            },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaClientes: response,
                })
            }
        })
    }

    //Envia al back los datos para guardar el nuevo cliente.
    handleNewCustomer = () => {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: {
                el: 3,
                nombre: this.state.nombre,
                direccion: this.state.direccion,
                telefono: this.state.telefono,
            },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaClientes: response,
                })
            }
        })
    }

    //Este evento borra el cliente luego de que sea confirmado.
    deleteCustomer = () => {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: {
                el: 4,
                idCliente: this.state.id,
            },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaClientes: response,
                })
            }
        })
    }

    //Solicita confirmar para borrar.
    confirmDelete = () => {
        confirmAlert({
            title: 'Estas por eliminar a ' + this.state.nombre,
            message: '¿Estas Seguro?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.deleteCustomer()
                        this.setState({
                            formUpdate: true
                        })
                    }
                },
                {
                    label: 'No',
                    // onClick: () => alert('No se Efectuaron cambios')
                }
            ]
        });
    }

    handleAcepted = e => {
        e.preventDefault();
        if (!this.state.newCustomer) {
            this.handleEditCustomer();
        } else {
            this.handleNewCustomer();
            this.setState({
                formUpdate: true,
            })
        }
    }

    handleOnChangeValue = e => {
        e.preventDefault();
        this.setState({
            newCustomer: true,
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    handleCustomer = id => {
        const customer = this.state.listaClientes.find(c => c.idCliente === id);
        this.setState({
            id: id,
            formUpdate: false,
            nombre: customer.nombre,
            direccion: customer.direccion,
            telefono: customer.telefono
        })
    }

    handleEntry = e => {
        this.props.history.push({
            pathname: '/ingreso',
            idCliente: this.state.id
        })
        e.preventDefault();
    }

    render() {
        const { history } = this.props

        return (
            <div>
                <div>
                    <NavBar
                        txt="Clientes"
                        type="search"
                        history={history}
                        handleChange={this.handleChange}
                        handleNewCustomerForm={this.handleNewCustomerForm}
                        newEntry="hidden"
                    />
                </div>
                <div className="container"
                    hidden={this.state.formUpdate}>
                    <EditCustomerForm
                        nombre={this.state.nombre}
                        direccion={this.state.direccion}
                        telefono={this.state.telefono}
                        handleCancel={this.handleCancel}
                        handleAcepted={this.handleAcepted}
                        handleOnChangeValue={this.handleOnChangeValue}
                        handleDeleted={this.confirmDelete}
                        handleEntry={this.handleEntry}
                        hiddenTa="hidden"
                    />
                </div>
                <div>
                    <TableCustomer 
                    listaClientes={this.state.listaClientes}
                    handleCustomer={this.handleCustomer}
                    />

                </div>

                {/* aca comienza tabla
                <div className="Tab">
                    <table className="table table-hover table-dark"
                        cellSpacing="10" cellPadding="10" border="3"
                        id="customers"
                    >
                        <thead className="bg-danger">
                            <tr>
                                <th
                                    className="text-center">ID</th>
                                <th
                                    className="text-center">Nombre</th>
                                <th
                                    className="text-center">Direccion</th>
                                <th
                                    className="text-center">Telefono</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.listaClientes.map(customer => {
                                    return (
                                        <CustomerTable
                                            // key={customer.idCliente}
                                            handleCustomer={this.handleCustomer}
                                            id={customer.idCliente}
                                            nombre={customer.nombre}
                                            direccion={customer.direccion}
                                            telefono={customer.telefono}
                                        />
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div> */}
                {/* aca termina la tabla */}
            </div>
        )
    }
}
export default Customers

