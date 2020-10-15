import React from "react"
import NavBar from "../components/NavBar"
import $ from "jquery"
import EntryForm from "../components/EntryForm"

class NewEntry extends React.Component {

    state = {
        id:"",
        formUpdate:true,
        idCliente: this.props.location.idCliente,
        ingresoElejido:{
            id:"",
            detalle:"",
            fecha:""

        },
        listaIngreso: [
            {
                idingreso: "",
                detalle: "",
                fecha: ""
            }
        ]
    }
    componentDidMount() {
        console.log("el id del cliente es:" + this.state.idCliente)
        this.load();

    }
    handleCancel = () => {
        this.setState({
            formUpdate:true
        })
    }

    handleOnChangeValue = e => {
        e.preventDefault();

        this.setState({
            
            ...this.state,
            [e.target.id]: e.target.value
        })
        console.log(e.target.id + " valor: "+e.target.value)
    }

    handleClick = id =>{
        console.log(id)
        const ingreso = this.state.listaIngreso.find(i => i.idingreso === id);
        this.setState({
            formUpdate:false,
            ingresoElejido:{
                id:ingreso.idingreso,
                detalle:ingreso.detalle,
                fecha:ingreso.fecha                
            }
        })
        console.log("detalle: "+this.state.ingresoElejido.detalle)
        console.log(this.state.ingresoElejido)

    }



    load = () => {
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
    handleNewEntry=()=>{
        this.setState({
            formUpdate:false
        })
    }

    render() {

        const { history } = this.props
        return (
            <div>
                <NavBar
                    txt="Ingreso"
                    type="hidden"
                    history={history}
                    NewCustomer="hidden"
                    handleNewEntry={this.handleNewEntry}
                />

                <div className="container"
                    hidden={this.state.formUpdate}>
                    <EntryForm
                        ing={this.state.ingresoElejido}                        
                        handleCancel={this.handleCancel}
                        handleAcepted=""
                        handleOnChangeValue={this.handleOnChangeValue}
                        handleDeleted=""
                        handleEntry=""
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