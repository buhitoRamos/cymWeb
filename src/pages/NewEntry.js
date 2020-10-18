import React from "react"
import NavBar from "../components/NavBar"
import $ from "jquery"
import EntryForm from "../components/EntryForm"

class NewEntry extends React.Component {

    state = {
        id:"",
        fecha:"",
        formUpdate:true,
        idCliente: this.props.location.idCliente,
        detalle:"",
        ingresoElejido:{
            id:"",
            detalle:'',
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
        this.load()    
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
        

    }



    load = () => {
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: { id: this.state.idCliente,
                    el:1 
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

    handleSubmitNewEntry=()=>{

        /*
        En detalle utilizo this.state.detalle que se genera por el handleOnchangeValue
        */
        
        $.ajax({
            url: "http://localhost/backend/Ingreso.php",
            data: { id: this.state.idCliente,
                    el:2,
                    fe:this.state.ingresoElejido.fecha,
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


    handleNewEntry=()=>{
        var f= new Date()
        this.setState({
            formUpdate:false,
            ingresoElejido:{
                id:"",
                detalle:"* INGRESO:\n* MARCA:\n* MODELO:\n* CARGADOR:\n* FALLA:",
                fecha: f.getDate() +"-"+ (f.getMonth() + 1 )+"-" +f.getFullYear()

            }
        })
        console.log(this.state.ingresoElejido)
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
                        handleEntry={this.handleSubmitNewEntry}
                                                
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