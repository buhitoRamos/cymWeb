import React from 'react'
import NavBar from "../components/NavBar"
import $ from "jquery"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import "../components/styles/Tbody.css"
import CustomerTable from "../components/CustomerTable"
import EditCustomerForm from "../components/EditCustomerForm"


class Customers extends React.Component {
    state = {
        newCustomer:false,
        id: "",
        nombre: "",
        formUpdate: "true",
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

    componentDidMount() {
        this.loadCustomers();
    }



    loadCustomers = () => {
        $.ajax({
            url: "http://localhost/backend/Clientes.php",
            data: { cl: this.state.cliente, el: 1 },
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

    handleChange = e => {
        e.preventDefault();
        console.log("seleccion")
        this.setState({
            ...this.state.cliente,
            cliente: e.target.value
        })
        setTimeout(() => this.loadCustomers(), 2000)
    }

    handleCancel = () => {
        this.setState({
            newCustomer:false,
            formUpdate: "true",
            nombre:"",
            telefono:"",
            direccion:""
        })
        this.loadCustomers();
        
    }

    handleNewCustomerForm = () =>{
        this.setState({
            nombre:"Ingrese Nombre",
            telefono:"Ingrese Teléfono",
            direccion:"Ingrese Dirección",
            newCustomer:true,            
            formUpdate: "",
        })
    }

    handleEditCustomer = () =>{
        console.log("handleEditCustomer")
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

    handleNewCustomer = () =>{
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

    handleDeletedConfirm = () =>{
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

    handleDeleted = () =>{
        console.log("alert")
        confirmAlert({
            title: 'Estas por eliminar a '+this.state.nombre,
            message: '¿Estas Seguro?.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    this.handleDeletedConfirm()
                }
              },
              {
                label: 'No',
                onClick: () => alert('No se Efectuaron cambios')
              }
            ]
          });
        
    }

    handleAcepted = e => {
        e.preventDefault();
        if(!this.state.newCustomer){
            this.handleEditCustomer();

        }else{
            this.handleNewCustomer();
        }
    }

    handleOnChangeValue = e => {
        e.preventDefault();

        this.setState({
            newCustomer:false,
            ...this.state,
            [e.target.id]: e.target.value
        })
    }

    handleCustomer = id => {
        console.log(id)
        const customer = this.state.listaClientes.find(c => c.idCliente === id);
        console.log(customer.idCliente)

        this.setState({            
            id: id,
            formUpdate: "",
            nombre: customer.nombre,
            direccion: customer.direccion,
            telefono: customer.telefono
        })
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
                    />
                </div>
                <div
                    className="container"
                    hidden={this.state.formUpdate}>
                    <EditCustomerForm
                        nombre={this.state.nombre}
                        direccion={this.state.direccion}
                        telefono={this.state.telefono}
                        handleCancel={this.handleCancel}
                        handleAcepted={this.handleAcepted}
                        handleOnChangeValue={this.handleOnChangeValue}
                        handleDeleted={this.handleDeleted}
                    />
                </div>
                <div className="">
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
                                            key={customer.idCliente}
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
                </div>

            </div>
        )
    }
}
export default Customers

