import React from "react"
import NavBar from "../components/NavBar"
import $ from "jquery"
import EntryForm from "../components/EntryForm"
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'

//Esta es la pagina donse se generan/actualizan/borran ingresos.
class NewEntry extends React.Component {

    state = {
        hiddenPrint: 'hidden',
        id: "",
        fecha: "",
        formUpdate: true,
        idCliente: this.props.location.idCliente,
        detalle: "",
        ingresoElejido: {
            id: "",
            detalle: '',
            nombre: "Ingreso",
            fecha: "",
            direccion: ""
        },
        listaIngreso: [
            {
                idingreso: "",
                detalle: "",
                fecha: ""
            }
        ]
    }

    //El metodo load se carga al renderizar el componente
    componentDidMount() {
        this.load()
    }

    //Este evento se da cuando se preciona el boton cancelar
    handleCancel = () => {
        this.setState({
            formUpdate: true,
            ingresoElejido: {
                id: "",
                detalle: '',
                fecha: "",
                nombre: "Ingreso"
            },
        })
    }

    //Evento que escucha todo lo que se tipea y guarda los valores en el estado.
    handleOnChangeValue = e => {
        e.preventDefault();

        this.setState({
            ...this.state,
            [e.target.id]: e.target.value
        })
        const ingreso = this.state.ingresoElejido.id
        if (ingreso > 1) {
            this.setState({
                hiddenPrint: false
            })
        }
    }

    /*
    Este evento se dispara cuando se clickea un ingreso ya generado
    muestra el formulario para editar o visyalizar en detalle el ingreso.
    */
    handleClick = id => {
        const ingreso = this.state.listaIngreso.find(i => i.idingreso === id);
        this.setState({
            formUpdate: false,
            hiddenPrint: false,
            ingresoElejido: {
                id: ingreso.idingreso,
                detalle: ingreso.detalle,
                fecha: ingreso.fecha,
                nombre: ingreso.nombre,
                direccion: ingreso.direccion
            }
        })
    }

    //Esta funcion carga la base de datos.
    load = () => {
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: {
                id: this.state.idCliente,
                el: 1
            },
            dataType: 'json',
            type: 'POST',
            async: true,
            success: (response) => {
                this.setState({
                    listaIngreso: response,
                })
            }
        })
    }

    //lleva a la pagina de impresión con todos los datos para imprimir el comprobante
    goToPrint = e => {
        this.props.history.push({
            pathname: '/comprobante',
            id: this.state.ingresoElejido.id,
            nombre: this.state.ingresoElejido.nombre,
            detalle: this.state.ingresoElejido.detalle,
            direccion: this.state.ingresoElejido.direccion,
            fecha: this.state.ingresoElejido.fecha,
            tipo: "Ingreso N°:",
            detalleTipo: "Detalle de Ingreso"
        })
        e.preventDefault();
    }

    //Guarda un nuevo ingreso
    handleSubmitNewEntry = () => {
        /*
        En detalle utilizo this.state.detalle que se genera por el handleOnchangeValue
        */
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: {
                id: this.state.idCliente,
                el: 2,
                fe: this.state.ingresoElejido.fecha,
                de: this.state.detalle,
            },
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

    //Esta función solicita confirmación para eliminar ingreso
    handleConfirmDelete = () => {
        confirmAlert({
            title: 'Estas por eliminar el ingreso N°: ' + this.state.ingresoElejido.id,
            message: '¿Estas Seguro?.',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () => {
                        this.deleteEntry()
                    }
                },
                {
                    label: 'No',
                }
            ]
        });
    }

    //Esta función elimina definitivamente un ingreso.
    deleteEntry = () => {
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: {
                el: 3,
                idCl: this.state.idCliente,
                id: this.state.ingresoElejido.id
            },
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

    /*Este evento setea los detalles que requiere un nuevo ingreso,
    muestra la fecha y los valores de detalle por default
    */
    handleNewEntry = () => {
        var f = new Date()
        this.setState({
            formUpdate: false,
            hiddenPrint: "hidden",
            ingresoElejido: {
                id: "",
                nombre: this.state.ingresoElejido.nombre,
                detalle: "* INGRESO:\n* MARCA:\n* MODELO:\n* CARGADOR:\n* FALLA:",
                fecha: f.getDate() + "-" + (f.getMonth() + 1) + "-" + f.getFullYear()
            }
        })
    }

    render() {
        const { history } = this.props
        return (
            <div>
                <NavBar
                    txt={this.state.ingresoElejido.nombre}
                    type="hidden"
                    history={history}
                    NewCustomer="hidden"
                    handleNewEntry={this.handleNewEntry}
                />

                <div className="container bg-light"
                    hidden={this.state.formUpdate}>
                    <EntryForm
                        ing={this.state.ingresoElejido}
                        handleCancel={this.handleCancel}
                        handleAcepted=""
                        handleOnChangeValue={this.handleOnChangeValue}
                        handleDeleted={this.handleConfirmDelete}
                        handleEntry={this.handleSubmitNewEntry}
                        toPrint={this.goToPrint}
                        hiddenPrint={this.state.hiddenPrint}
                    />
                </div>
                <div className="">
                    <table className="table table-hover table-dark"
                        cellSpacing="10" cellPadding="10" border="3"
                        id="customers"
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
                                this.state.listaIngreso.map(customer => {
                                    return (
                                        <tr
                                            key={customer.idingreso}
                                            onClick={() => this.handleClick(customer.idingreso)}>
                                            <th scope="row">{customer.idingreso}</th>
                                            <td><p>{customer.detalle}</p></td>
                                            <td>{customer.fecha}</td>
                                        </tr>
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
export default NewEntry